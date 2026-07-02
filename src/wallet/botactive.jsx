import React, { useState, useEffect, useRef } from "react";
import Footer from "./footer";
import { createChart, LineSeries } from "lightweight-charts";

export default function botactive() {
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const symbol = "BTCUSDT";
  const chartContainerRef = useRef();
  const lineSeriesRef = useRef();
  const [interval, setInterval] = useState("7d");
  const intervalMap = {
    "1h": "1m",
    "4h": "5m",
    "1d": "15m",
    "7d": "1h",
    "30d": "4h",
    "1y": "1d",
  };
  const [priceFlash, setPriceFlash] = useState("");

  useEffect(() => {
    fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`,
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setCoin((prev) => {
        if (prev?.lastPrice) {
          if (Number(data.c) > Number(prev.lastPrice)) {
            setPriceFlash("up");
          } else if (Number(data.c) < Number(prev.lastPrice)) {
            setPriceFlash("down");
          }
        }

        return {
          symbol: data.s,
          lastPrice: data.c,
          priceChangePercent: data.P,
          highPrice: data.h,
          lowPrice: data.l,
          volume: data.v,
          quoteVolume: data.q,
        };
      });
    };

    return () => ws.close();
  }, []);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 200,
      layout: {
        background: { color: "#0f172a" },
        textColor: "#ffffff",
      },
    });

    // 👇 এইখানে হবে
    lineSeriesRef.current = chart.addSeries(LineSeries);

    fetch(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${intervalMap[interval]}&limit=100`,
    )
      .then((res) => res.json())
      .then((data) => {
        const chartData = data.map((item) => ({
          time: item[0] / 1000,
          value: parseFloat(item[4]),
        }));

        lineSeriesRef.current.setData(chartData);
      });

    return () => chart.remove();
  }, [interval]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPriceFlash("");
    }, 400);

    return () => clearTimeout(timer);
  }, [coin?.lastPrice]);

  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)]"
          id="app"
        >
          <div id="coin-content" className="pb-24">
            <div className="px-5 py-4 flex items-center gap-3">
              <a
                href="javascript:history.back()"
                className="w-10 h-10 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center flex-shrink-0"
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </a>
              <div
                id="coin-header-icon"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-black flex-shrink-0 animate-pulse"
                style={{ background: "#f7931a22", color: "#f7931a" }}
              >
                {coin?.symbol?.replace("USDT", "")}
              </div>
              <div>
                <div
                  id="coin-header-name"
                  className="text-base font-bold text-white"
                >
                  {coin?.symbol}
                </div>
              </div>
              <div className="ml-auto flex gap-2">
                <button
                  id="wl-btn"
                  className="w-9 h-9 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center transition-transform active:scale-95"
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </button>
                <a
                  href="price-alerts.html"
                  className="w-9 h-9 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center transition-transform active:scale-95"
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="px-5 pb-4">
              <div
                id="coin-price"
                className={`text-4xl font-black tracking-tight mb-2 transition-colors duration-300 ${
                  priceFlash === "up"
                    ? "text-green-400"
                    : priceFlash === "down"
                      ? "text-red-400"
                      : "text-white"
                }`}
              >
                {Number(coin?.lastPrice).toLocaleString()}
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  id="coin-badge"
                  className="bg-success/15 text-success text-xs font-bold px-2 py-0.5 rounded-full"
                >
                  {Number(coin?.priceChangePercent).toFixed(2)}%
                </span>
                <span id="coin-hl" className="text-[13px] text-white/40">
                  H : {Number(coin?.highPrice).toLocaleString()} · L :{" "}
                  {Number(coin?.lowPrice).toLocaleString()}
                </span>
              </div>
            </div>
            {/* Chart */}
            <div className="px-5 mb-5">
              <div className="flex gap-1 mb-3">
                <button
                  onClick={() => setInterval("1h")}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    interval === "1h"
                      ? "bg-primary text-bg-dark"
                      : "text-white/40"
                  }`}
                >
                  1H
                </button>

                <button
                  onClick={() => setInterval("4h")}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    interval === "4h"
                      ? "bg-primary text-bg-dark"
                      : "text-white/40"
                  }`}
                >
                  4H
                </button>

                <button
                  onClick={() => setInterval("1d")}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    interval === "1d"
                      ? "bg-primary text-bg-dark"
                      : "text-white/40"
                  }`}
                >
                  1D
                </button>

                <button
                  onClick={() => setInterval("7d")}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    interval === "7d"
                      ? "bg-primary text-bg-dark"
                      : "text-white/40"
                  }`}
                >
                  7D
                </button>

                <button
                  onClick={() => setInterval("30d")}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    interval === "30d"
                      ? "bg-primary text-bg-dark"
                      : "text-white/40"
                  }`}
                >
                  30D
                </button>

                <button
                  onClick={() => setInterval("1y")}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    interval === "1y"
                      ? "bg-primary text-bg-dark"
                      : "text-white/40"
                  }`}
                >
                  1Y
                </button>
              </div>
              <div ref={chartContainerRef} className="h-[200px] w-full" />
            </div>
            {/* Stats */}
            <div className="px-5 grid grid-cols-2 gap-3 mb-5">
              <div className="bg-surface border border-white/[0.08] rounded-card p-3">
                <div className="text-[11px] text-white/40 mb-1">24h High</div>
                <div
                  id="coin-mcap"
                  className="text-[14px] font-bold text-white"
                >
                  {Number(coin?.highPrice).toLocaleString()}
                </div>
              </div>
              <div className="bg-surface border border-white/[0.08] rounded-card p-3">
                <div className="text-[11px] text-white/40 mb-1">24h Low</div>
                <div id="coin-vol" className="text-[14px] font-bold text-white">
                  {Number(coin?.lowPrice).toLocaleString()}
                </div>
              </div>
              <div className="bg-surface border border-white/[0.08] rounded-card p-3">
                <div className="text-[11px] text-white/40 mb-1">24h Volume</div>
                <div id="coin-ath" className="text-[14px] font-bold text-white">
                  {Number(coin?.volume).toLocaleString()}
                </div>
              </div>
              <div className="bg-surface border border-white/[0.08] rounded-card p-3">
                <div className="text-[11px] text-white/40 mb-1">
                  24h Volume(USDT)
                </div>
                <div
                  id="coin-supply"
                  className="text-[14px] font-bold text-white"
                >
                  {Number(coin?.quoteVolume).toLocaleString("en-US", {
                    notation: "compact",
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
            </div>
            {/* About */}
            <div className="px-5 mb-5">
              <div className="bg-surface border border-white/[0.08] rounded-card p-4">
                <div className="text-[15px] font-bold mb-2 text-white">
                  About
                </div>
                <p
                  id="coin-desc"
                  className="text-sm text-white/60 leading-relaxed"
                >
                  Bitcoin is a decentralized digital currency, without a central
                  bank or single administrator.
                </p>
              </div>
            </div>
            {/* AI Signal */}
            <div className="px-5 mb-5">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/[0.08] border border-primary/20 rounded-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00D4AA"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x={2} y={2} width={20} height={8} rx={2} />
                    <rect x={2} y={14} width={20} height={8} rx={2} />
                    <line x1={6} y1={6} x2="6.01" y2={6} />
                    <line x1={6} y1={18} x2="6.01" y2={18} />
                  </svg>
                  <span className="text-[13px] font-bold text-primary">
                    AI SIGNAL
                  </span>
                  <span className="ml-auto bg-primary/15 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                    87% confidence
                  </span>
                </div>
                <div className="text-xs text-white/50">
                  Strong buy signal detected. Target: +15% · Stop loss: -8%
                </div>
              </div>
            </div>
            {/* Quick links */}
            <div className="px-5 mb-5 grid grid-cols-3 gap-2">
              <a
                href="price-chart-full.html"
                className="bg-surface-2 border border-white/[0.08] rounded-btn h-14 flex flex-col items-center justify-center gap-1 text-[11px] font-semibold text-white/70 hover:text-white hover:bg-surface/5 transition-colors"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Full Chart
              </a>
              <a
                href="coin-stats.html"
                className="bg-surface-2 border border-white/[0.08] rounded-btn h-14 flex flex-col items-center justify-center gap-1 text-[11px] font-semibold text-white/70 hover:text-white hover:bg-surface/5 transition-colors"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={18} y1={20} x2={18} y2={10} />
                  <line x1={12} y1={20} x2={12} y2={4} />
                  <line x1={6} y1={20} x2={6} y2={14} />
                </svg>
                Statistics
              </a>
              <a
                href="asset-news.html"
                className="bg-surface-2 border border-white/[0.08] rounded-btn h-14 flex flex-col items-center justify-center gap-1 text-[11px] font-semibold text-white/70 hover:text-white hover:bg-surface/5 transition-colors"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                </svg>
                News
              </a>
            </div>
            {/* Trade buttons */}
            <div className="px-5 grid grid-cols-2 gap-3 mb-4">
              <a
                href="buy-crypto.html"
                className="bg-primary text-bg-dark font-bold rounded-btn h-12 flex items-center justify-center gap-2 shadow-primary transition-transform active:scale-95"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                Buy
              </a>
              <a
                href="sell-crypto.html"
                className="bg-error/15 text-error border border-error/20 rounded-btn h-12 flex items-center justify-center gap-2 font-bold transition-transform active:scale-95 hover:bg-error/25"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                  <polyline points="17 18 23 18 23 12" />
                </svg>
                Sell
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

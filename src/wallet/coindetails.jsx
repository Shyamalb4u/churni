import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Footer from "./footer";
import {
  createChart,
  CandlestickSeries,
  HistogramSeries,
} from "lightweight-charts";
import Swal from "sweetalert2";

export default function coindetails() {
  const { symbol } = useParams();

  const [coin, setCoin] = useState(null);
  const chartContainerRef = useRef();
  const lineSeriesRef = useRef();
  const [interval, setChartInterval] = useState("7d");
  const intervalMap = {
    "1h": "1m",
    "4h": "5m",
    "1d": "15m",
    "7d": "1h",
    "30d": "4h",
    "1y": "1d",
  };
  const botSteps = [
    "Connecting Exchange...",
    "Loading AI Engine...",
    "Synchronizing Market...",
    "Analyzing Order Book...",
    "Compiling AI Signal...",
    "Risk Analysis...",
    "Preparing Trade...",
  ];
  const [priceFlash, setPriceFlash] = useState("");
  const navigate = useNavigate();
  const [orderBook, setOrderBook] = useState({
    bids: [],
    asks: [],
  });

  // start qbot
  const [botStatus, setBotStatus] = useState("idle");
  // idle | preparing | running | completed
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [todayProfit, setTodayProfit] = useState(0);
  // profit colour
  const [isUp, setIsUp] = useState(true);
  // vol ref
  const volumeSeriesRef = useRef();

  // profit calculation
  // useEffect(() => {
  //   if (botStatus !== "running") return;

  //   let profit = 0;

  //   const timer = setInterval(() => {
  //     profit += Math.random() * 1.5 + 0.3;

  //     if (profit >= 15) {
  //       profit = 15;

  //       setTodayProfit(15);
  //       clearInterval(timer);

  //       setBotStatus("completed");

  //       Swal.fire({
  //         icon: "success",
  //         title: "🎯 Target Achieved!",
  //         text: "QBOT has completed the trade.",
  //         confirmButtonText: "Awesome!",
  //         confirmButtonColor: "#00D4AA",
  //         background: "#111827",
  //         color: "#fff",
  //       });

  //       return;
  //     }

  //     setTodayProfit(Number(profit.toFixed(2)));
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [botStatus]);

  useEffect(() => {
    if (botStatus !== "running") return;

    let profit = 0;
    const targetProfit = Math.random() * 3 + 12; // 12% - 15%

    const timer = setInterval(() => {
      let change;

      const random = Math.random();

      if (random < 0.2) {
        // 20% chance -> একটু loss
        change = -(Math.random() * 0.4 + 0.1);
      } else if (random < 0.7) {
        // 50% chance -> ছোট profit
        change = Math.random() * 0.6 + 0.2;
      } else {
        // 30% chance -> বড় profit
        change = Math.random() * 1.2 + 0.5;
      }

      profit += change;

      setIsUp(change >= 0);

      // 0% এর নিচে যেতে দেবে না
      if (profit < 0) {
        profit = 0;
      }

      // Target hit
      if (profit >= targetProfit) {
        profit = targetProfit;

        setTodayProfit(Number(targetProfit.toFixed(2)));
        clearInterval(timer);

        setBotStatus("completed");

        Swal.fire({
          icon: "success",
          title: "🎯 Target Achieved!",
          text: "QBOT has completed the trade.",
          confirmButtonText: "Awesome!",
          confirmButtonColor: "#00D4AA",
          background: "#111827",
          color: "#fff",
        });

        return;
      }

      setTodayProfit(Number(profit.toFixed(2)));
    }, 1000);

    return () => clearInterval(timer);
  }, [botStatus]);

  // progressbar calculation

  useEffect(() => {
    if (botStatus !== "preparing") return;

    let index = 0;

    const timer = setInterval(() => {
      if (index < botSteps.length) {
        setCurrentStep(botSteps[index]);
        setProgress(Math.round(((index + 1) / botSteps.length) * 100));
        index++;
      } else {
        clearInterval(timer);

        setTimeout(() => {
          setBotStatus("running");
        }, 500);
      }
    }, 800);

    return () => clearInterval(timer);
  }, [botStatus]);

  useEffect(() => {
    fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
      });
  }, [symbol]);
  useEffect(() => {
    fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=20`)
      .then((res) => res.json())
      .then((data) => {
        setOrderBook({
          bids: data.bids,
          asks: data.asks,
        });
      });
  }, [symbol]);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=${symbol.toLowerCase()}@ticker/${symbol.toLowerCase()}@kline_${intervalMap[interval]}/${symbol.toLowerCase()}@depth20@100ms`,
    );

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      // Ticker Stream
      if (message.stream.endsWith("@ticker")) {
        const data = message.data;

        // if (lineSeriesRef.current) {
        //   lineSeriesRef.current.update({
        //     time: Math.floor(Date.now() / 1000),
        //     value: Number(data.c),
        //   });
        // }
        // Live Candle Stream

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
      }

      if (message.stream.includes("@kline_")) {
        const k = message.data.k;
        if (lineSeriesRef.current) {
          lineSeriesRef.current.update({
            time: k.t / 1000,
            open: Number(k.o),
            high: Number(k.h),
            low: Number(k.l),
            close: Number(k.c),
          });
        }
        const isUp = Number(k.c) >= Number(k.o);

        lineSeriesRef.current.applyOptions({
          priceLineColor: isUp ? "#0ECB81" : "#F6465D",
        });
        if (volumeSeriesRef.current) {
          volumeSeriesRef.current.update({
            time: k.t / 1000,
            value: Number(k.v),
            color: Number(k.c) >= Number(k.o) ? "#0ECB8166" : "#F6465D66",
          });
        }
      }

      // Order Book Stream
      if (message.stream.endsWith("@depth20@100ms")) {
        const data = message.data;

        setOrderBook({
          bids: data.bids,
          asks: data.asks,
        });
      }
    };

    return () => ws.close();
  }, [symbol, interval]);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 200,

      layout: {
        background: { color: "#0f172a" },
        textColor: "#ffffff",
      },

      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },

      rightPriceScale: {
        autoScale: true,
        borderVisible: false,
      },

      crosshair: {
        vertLine: {
          visible: true,
          labelVisible: true,
        },
        horzLine: {
          visible: true,
          labelVisible: true,
        },
      },
    });
    // 👇 chart ready hoyeche ekhane
    // lineSeriesRef.current = chart.addSeries(LineSeries);
    // lineSeriesRef.current = chart.addSeries(LineSeries, {
    //   priceFormat: {
    //     type: "price",
    //     precision: 4,
    //     minMove: 0.0001,
    //   },
    // });
    lineSeriesRef.current = chart.addSeries(CandlestickSeries, {
      upColor: "#0ECB81",
      downColor: "#F6465D",

      borderUpColor: "#0ECB81",
      borderDownColor: "#F6465D",

      wickUpColor: "#0ECB81",
      wickDownColor: "#F6465D",

      priceLineVisible: true,
      lastValueVisible: true,
      // priceLineColor: "#00D4AA",
      priceLineStyle: 2,
    });
    volumeSeriesRef.current = chart.addSeries(HistogramSeries, {
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "volume",
      lastValueVisible: false,
      priceLineVisible: false,
    });

    chart.priceScale("volume").applyOptions({
      visible: false,
      borderVisible: false,

      scaleMargins: {
        top: 0.75,
        bottom: 0,
      },
    });

    if (!intervalMap[interval]) return;
    fetch(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${intervalMap[interval]}&limit=100`,
    )
      .then((res) => res.json())
      .then((data) => {
        const chartData = data.map((item) => ({
          time: item[0] / 1000,

          open: Number(item[1]),
          high: Number(item[2]),
          low: Number(item[3]),
          close: Number(item[4]),
        }));

        const volumeData = data.map((item) => ({
          time: item[0] / 1000,
          value: Number(item[5]),
          color: Number(item[4]) >= Number(item[1]) ? "#0ECB8166" : "#F6465D66",
        }));

        lineSeriesRef.current.setData(chartData);
        volumeSeriesRef.current.setData(volumeData);
        // chart.timeScale().fitContent();
      });

    return () => chart.remove();
  }, [interval, symbol]);

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
              <button
                onClick={() => navigate(-1)}
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
              </button>
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
              <div className="flex items-center justify-between mb-2">
                {/* Price */}
                <div
                  id="coin-price"
                  className={`text-3xl font-black tracking-tight transition-colors duration-300 ${
                    priceFlash === "up"
                      ? "text-green-400"
                      : priceFlash === "down"
                        ? "text-red-400"
                        : "text-white"
                  }`}
                >
                  {Number(coin?.lastPrice).toLocaleString("en-US", {
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4,
                  })}
                </div>

                {/* Volume */}
                <div className="text-right text-[11px] leading-5 text-white">
                  <div>
                    <span className="text-white/80">24h V (USDT) : </span>{" "}
                    <span className="text-white font-medium">
                      {Number(coin?.quoteVolume).toLocaleString("en-US", {
                        notation: "compact",
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/80">24h V : </span>{" "}
                    <span className="text-white font-medium">
                      {Number(coin?.volume).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  id="coin-badge"
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    Number(coin?.priceChangePercent) >= 0
                      ? "bg-success/20 text-success"
                      : "bg-error/20 text-error"
                  }`}
                >
                  {Number(coin?.priceChangePercent) >= 0 ? "+" : ""}
                  {Number(coin?.priceChangePercent).toFixed(2)}%
                </span>
                <span id="coin-hl" className="text-[13px] text-white">
                  H : {Number(coin?.highPrice).toLocaleString()} · L :{" "}
                  {Number(coin?.lowPrice).toLocaleString()}
                </span>
              </div>
            </div>
            {/* Chart */}
            <div className="px-5 mb-2">
              <div className="flex gap-1 mb-3">
                <button
                  onClick={() => setChartInterval("1h")}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    interval === "1h"
                      ? "bg-primary text-bg-dark"
                      : "text-white/40"
                  }`}
                >
                  1H
                </button>

                <button
                  onClick={() => setChartInterval("4h")}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    interval === "4h"
                      ? "bg-primary text-bg-dark"
                      : "text-white/40"
                  }`}
                >
                  4H
                </button>

                <button
                  onClick={() => setChartInterval("1d")}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    interval === "1d"
                      ? "bg-primary text-bg-dark"
                      : "text-white/40"
                  }`}
                >
                  1D
                </button>

                <button
                  onClick={() => setChartInterval("7d")}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    interval === "7d"
                      ? "bg-primary text-bg-dark"
                      : "text-white/40"
                  }`}
                >
                  7D
                </button>

                <button
                  onClick={() => setChartInterval("30d")}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    interval === "30d"
                      ? "bg-primary text-bg-dark"
                      : "text-white/40"
                  }`}
                >
                  30D
                </button>

                <button
                  onClick={() => setChartInterval("1y")}
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
            {/* Order Book */}
            <div className="px-5 mb-2">
              <div className="grid grid-cols-2 gap-4">
                {/* Bids */}
                <div>
                  <div className="grid grid-cols-2 text-green-400 text-xs mb-2">
                    <span>Bid</span>
                    <span className="text-right">Amount</span>
                  </div>

                  {orderBook.bids.slice(0, 10).map((bid, i) => (
                    <div key={i} className="grid grid-cols-2 py-1 text-xs">
                      <span className="text-green-400">
                        {Number(bid[0]).toLocaleString()}
                      </span>

                      <span className="text-right text-white">
                        {Number(bid[1]).toFixed(4)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Asks */}
                <div>
                  <div className="grid grid-cols-2 text-red-400 text-xs mb-2">
                    <span>Ask</span>
                    <span className="text-right">Amount</span>
                  </div>

                  {orderBook.asks.slice(0, 10).map((ask, i) => (
                    <div key={i} className="grid grid-cols-2 py-1 text-xs">
                      <span className="text-red-400">
                        {Number(ask[0]).toLocaleString()}
                      </span>

                      <span className="text-right text-white">
                        {Number(ask[1]).toFixed(4)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Signal */}
            <div className="px-5 mb-2">
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
                    QBOT LIVE
                  </span>
                  <span className="ml-auto bg-primary/15 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                    99% confidence
                  </span>
                </div>
                <div className="text-xs text-white/60">
                  Strong buy/sell detected. Target: +15% · Stop loss: -2%
                </div>
              </div>
            </div>

            {botStatus === "preparing" && (
              <div className="mx-5 mb-2 rounded-2xl border border-primary/20 bg-surface p-4">
                <div className="flex justify-between mb-3">
                  <span className="text-primary font-bold">
                    🤖 QBOT PREPARING
                  </span>

                  <span className="text-xs text-white/50">{progress}%</span>
                </div>

                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-3">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="text-sm text-white/70">{currentStep}</div>
              </div>
            )}
            {(botStatus === "running" || botStatus === "completed") && (
              <div className="mx-5 mb-2 rounded-2xl border border-green-500/30 bg-surface p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-green-400">
                    💰 QBOT PROFIT
                  </span>

                  {/* <span className="text-xs font-bold text-green-400">LIVE</span> */}
                  <span
                    className={`text-xs font-bold ${
                      botStatus === "completed"
                        ? "text-yellow-400"
                        : "text-green-400"
                    }`}
                  >
                    {botStatus === "completed" ? "COMPLETED" : "LIVE"}
                  </span>
                </div>
                <div
                  className={`text-4xl font-black ${isUp ? "text-green-400" : "text-red-400"}`}
                >
                  +{todayProfit}%
                </div>
                {/* <div className="text-4xl font-black text-green-400">
                  +{todayProfit}%
                </div> */}

                <div className="mt-2 text-sm text-white/80">
                  {botStatus === "completed"
                    ? "Trade completed successfully."
                    : "QBOT is actively trading..."}
                </div>
              </div>
            )}
            {/* Trade buttons */}
            <div className="px-5 mb-4 pt-4">
              <button
                onClick={async () => {
                  if (botStatus !== "idle") return;

                  const result = await Swal.fire({
                    title: "Launch QBOT Strategy?",
                    text: "QBOT will start analyzing the market and generate AI trading signals.",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Launch Now",
                    cancelButtonText: "Cancel",
                    confirmButtonColor: "#00D4AA",
                    cancelButtonColor: "#ef4444",
                    background: "#111827",
                    color: "#ffffff",
                    reverseButtons: true,
                  });

                  if (result.isConfirmed) {
                    setBotStatus("preparing");
                    setProgress(10);
                    setCurrentStep("Connecting Exchange...");
                  }
                }}
                disabled={botStatus !== "idle"}
                className={`w-full h-12 rounded-btn font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  botStatus === "idle"
                    ? "bg-primary text-bg-dark shadow-primary active:scale-95"
                    : "bg-primary text-bg-dark shadow-primary opacity-70"
                }`}
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

                {botStatus === "idle" && "Start QBOT"}
                {botStatus === "preparing" && "Preparing..."}
                {botStatus === "running" && "QBOT Running"}
                {botStatus === "completed" && "Completed"}
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

import { useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import Footer from "./footer";
export default function market() {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [livePrices, setLivePrices] = useState({});
  const [priceFlash, setPriceFlash] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    loadMarket();

    const ws = new WebSocket(
      "wss://stream.binance.com:9443/ws/!miniTicker@arr",
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setLivePrices((prev) => {
        const updated = { ...prev };
        const flash = {};

        data.forEach((item) => {
          const old = prev[item.s];

          if (old) {
            if (parseFloat(item.c) > old) {
              flash[item.s] = "up";
            } else if (parseFloat(item.c) < old) {
              flash[item.s] = "down";
            }
          }

          updated[item.s] = parseFloat(item.c);
        });

        setPriceFlash(flash);

        return updated;
      });
    };

    return () => ws.close();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPriceFlash({});
    }, 400);

    return () => clearTimeout(timer);
  }, [livePrices]);

  async function loadMarket() {
    try {
      const res = await fetch("https://api.binance.com/api/v3/ticker/24hr");

      const data = await res.json();

      const list = data
        .filter((x) => x.symbol.endsWith("USDT"))
        .sort((a, b) => Number(b.quoteVolume) - Number(a.quoteVolume))
        .slice(0, 100);

      setMarkets(list);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  const filteredMarkets = useMemo(() => {
    return markets.filter((coin) =>
      coin.symbol.toLowerCase().includes(search.toLowerCase()),
    );
  }, [markets, search]);

  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)]"
          id="app"
        >
          <div className="px-5 pt-4 pb-3 sticky top-0 bg-bg-dark/95 backdrop-blur-sm border-b border-white/5 z-10">
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-2xl font-extrabold">Markets</h1>
              <div className="flex gap-2">
                <a
                  href="trending.html"
                  className="w-9 h-9 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center"
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
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </a>
                <a
                  href="gainers-losers.html"
                  className="w-9 h-9 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center"
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
                    <line x1={12} y1={1} x2={12} y2={23} />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </a>
                <a
                  href="market-categories.html"
                  className="w-9 h-9 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center"
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
                    <rect x={3} y={3} width={7} height={7} />
                    <rect x={14} y={3} width={7} height={7} />
                    <rect x={14} y={14} width={7} height={7} />
                    <rect x={3} y={14} width={7} height={7} />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative mb-3">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-surface-2 border border-white/10 rounded-btn h-11 pl-10 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 text-sm"
                placeholder="Search coins..."
              />
            </div>
          </div>
          <div className="px-5 py-2 flex items-center gap-2 text-[15px] text-white/30">
            <div className="w-6">#</div>
            <div className="flex-1">Assets</div>
            <div className="w-[72px] text-right">Last Price</div>
          </div>
          <div className="px-5 pb-24">
            {loading && (
              <div className="text-center py-10 text-white/40">
                Loading Markets...
              </div>
            )}

            {!loading &&
              filteredMarkets.map((coin, index) => {
                const symbol = coin.symbol.replace("USDT", "");

                const livePrice =
                  livePrices[coin.symbol] || Number(coin.lastPrice);

                return (
                  <div
                    key={coin.symbol}
                    onClick={() => navigate(`/coin-details/${coin.symbol}`)}
                    className="flex items-center py-3 border-b border-t border-white/[0.08] transition-all duration-300"
                  >
                    {/* Rank */}

                    <div className="w-6 text-[12px] text-white/40">
                      {index + 1}
                    </div>

                    {/* Coin */}

                    <div className="flex items-center flex-1 ml-2">
                      {/* Avatar */}

                      {/* <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                        {symbol.substring(0, 3)}
                      </div> */}

                      <div className="ml-3">
                        <div className="font-semibold text-sm">
                          {symbol} / USDT
                        </div>

                        <div className="text-[11px] text-white/40">
                          {Number(coin.quoteVolume).toLocaleString("en-US", {
                            notation: "compact",
                            maximumFractionDigits: 2,
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Chart Placeholder */}

                    <div className="w-16 flex justify-center">
                      <div className="w-12 h-[2px] bg-white/10 rounded-full" />
                    </div>

                    {/* Price */}

                    <div className="w-[95px] text-right">
                      <div
                        className={`font-bold text-sm transition-all duration-300 ${
                          priceFlash[coin.symbol] === "up"
                            ? "text-green-400"
                            : priceFlash[coin.symbol] === "down"
                              ? "text-red-400"
                              : "text-white"
                        }`}
                      >
                        {/* $ */}
                        {livePrice.toLocaleString(undefined, {
                          minimumFractionDigits: 4,
                          maximumFractionDigits: 4,
                        })}
                      </div>

                      <div
                        className={`text-[11px] font-semibold ${
                          Number(coin.priceChangePercent) >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {Number(coin.priceChangePercent) >= 0 ? "+" : ""}
                        {Number(coin.priceChangePercent).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

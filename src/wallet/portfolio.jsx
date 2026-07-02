import React from "react";
import Footer from "./footer";

export default function portfolio() {
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)] bg-bg-dark"
          id="app"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 sticky top-0 bg-bg-dark/95 backdrop-blur-sm border-b border-white/5 z-10">
            <button
              onclick="history.back()"
              className="w-10 h-10 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center"
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
            <h1 className="text-[17px] font-bold">Portfolio</h1>
            <a
              href="portfolio-rebalance.html"
              className="w-10 h-10 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center"
            >
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
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </a>
          </div>
          <div className="pb-24">
            {/* Hero balance card */}
            <div className="portfolio-card mx-5 mt-4 rounded-3xl p-6 relative overflow-hidden border border-primary/20">
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-10 blur-3xl bg-primary" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full opacity-10 blur-2xl bg-secondary" />
              <div className="text-[13px] text-white/70 mb-2 font-medium tracking-wide relative z-10">
                Total Portfolio Value
              </div>
              <div
                className="text-[42px] font-black text-white leading-none tracking-tight mb-5 relative z-10"
                id="port-total"
              >
                $47,823.56
              </div>
              <div className="grid grid-cols-3 gap-0 relative z-10">
                <div className="text-center">
                  <div className="text-[11px] text-white/40 mb-1">
                    All-time P&amp;L
                  </div>
                  <div
                    className="text-[15px] font-extrabold text-success"
                    id="port-pnl"
                  >
                    +$8,420.00
                  </div>
                </div>
                <div className="border-x border-white/10 text-center">
                  <div className="text-[11px] text-white/40 mb-1">ROI</div>
                  <div
                    className="text-[15px] font-extrabold text-primary"
                    id="port-roi"
                  >
                    +21.3%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[11px] text-white/40 mb-1">Today</div>
                  <div
                    className="text-[15px] font-extrabold text-success"
                    id="port-today"
                  >
                    +2.4%
                  </div>
                </div>
              </div>
            </div>
            {/* Performance chart */}
            <div className="mx-5 mt-4 bg-surface border border-white/[0.08] rounded-card p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[15px] font-bold">Performance</div>
                <div className="flex items-center gap-2">
                  <div
                    className="flex bg-surface-2 rounded-[10px] p-1 gap-0.5"
                    id="period-btns"
                  >
                    <button
                      onclick="setPeriod(this, '7D')"
                      className="period-btn h-7 px-2.5 rounded-lg text-xs font-semibold bg-primary text-bg-dark transition-all"
                    >
                      7D
                    </button>
                    <button
                      onclick="setPeriod(this, '30D')"
                      className="period-btn h-7 px-2.5 rounded-lg text-xs font-semibold text-white/50 transition-all"
                    >
                      30D
                    </button>
                    <button
                      onclick="setPeriod(this, '90D')"
                      className="period-btn h-7 px-2.5 rounded-lg text-xs font-semibold text-white/50 transition-all"
                    >
                      90D
                    </button>
                    <button
                      onclick="setPeriod(this, '1Y')"
                      className="period-btn h-7 px-2.5 rounded-lg text-xs font-semibold text-white/50 transition-all"
                    >
                      1Y
                    </button>
                  </div>
                  <a
                    href="portfolio-performance.html"
                    className="text-xs text-primary font-bold whitespace-nowrap"
                  >
                    Full →
                  </a>
                </div>
              </div>
              <div className="h-[150px]">
                <canvas id="portfolio-chart" />
              </div>
            </div>
            {/* Asset Allocation */}
            <div className="mx-5 mt-4 bg-surface border border-white/[0.08] rounded-card p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[15px] font-bold">Asset Allocation</div>
                <a
                  href="asset-allocation.html"
                  className="text-[13px] text-primary font-bold"
                >
                  Details
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[110px] h-[110px] flex-shrink-0 relative">
                  <canvas id="alloc-donut" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="text-[11px] text-white/40">BTC</div>
                    <div className="text-[15px] font-extrabold">40%</div>
                  </div>
                </div>
                <div
                  className="flex-1 min-w-0 flex flex-col gap-1.5"
                  id="alloc-legend"
                />
              </div>
            </div>
            {/* Holdings */}
            <div className="mx-5 mt-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[15px] font-bold">Holdings</div>
                <a
                  href="profit-loss.html"
                  className="text-[13px] text-primary font-bold"
                >
                  P&amp;L Details
                </a>
              </div>
              <div
                className="bg-surface border border-white/[0.08] rounded-card overflow-hidden"
                id="holdings-list"
              />
            </div>
            {/* Quick actions */}
            <div className="mx-5 mt-4 grid grid-cols-2 gap-3">
              <a
                href="buy-crypto.html"
                className="h-[50px] bg-gradient-to-r from-primary to-success text-bg-dark font-extrabold rounded-btn flex items-center justify-center gap-2 text-sm shadow-primary"
              >
                + Buy Crypto
              </a>
              <a
                href="portfolio-performance.html"
                className="h-[50px] bg-surface-2 border border-white/[0.08] text-white font-bold rounded-btn flex items-center justify-center gap-2 text-sm"
              >
                📊 Analytics
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

import React from "react";
import Footer from "./footer";
export default function dashboard() {
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)]"
          id="app"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center">
                <img
                  src="assets/images/buyer1.png"
                  alt="user"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div>
                <div className="text-xs text-white/40">Good morning 👋</div>
                <div className="text-base font-bold">Alex Mercer</div>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="notifications.html"
                className="relative w-10 h-10 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center"
              >
                <svg
                  width={20}
                  height={20}
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
                <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error" />
              </a>
              <button
                onclick="toggleTheme()"
                className="w-10 h-10 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center"
                title="Toggle theme"
              >
                <span className="theme-icon-moon">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </span>
                <span className="theme-icon-sun" style={{ display: "none" }}>
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={5} />
                    <line x1={12} y1={1} x2={12} y2={3} />
                    <line x1={12} y1={21} x2={12} y2={23} />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1={1} y1={12} x2={3} y2={12} />
                    <line x1={21} y1={12} x2={23} y2={12} />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          {/* Total Portfolio Value Section */}
          <div className="px-5 pb-3">
            <div className="relative overflow-hidden rounded-[24px] border border-primary/20 bg-gradient-to-br from-[#171c2f] via-[#121826] to-[#0b0f19] p-3 shadow-xl">
              {/* Glow */}
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>

              <div className="relative z-10">
                {/* Wallet Address */}
                <div className="bg-white/5 rounded-2xl p-4 mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-white/50">
                      Wallet Address
                    </span>

                    <button className="text-primary text-sm">Copy</button>
                  </div>

                  <p className="text-white font-semibold tracking-wide">
                    0x8F0D53A...50D545D91
                  </p>
                </div>

                {/* Network */}
                <div className="flex justify-between">
                  <div>
                    <p className="text-white/40 text-xs">USDT</p>

                    <h4 className="text-white font-semibold">12.00</h4>
                  </div>

                  <div className="text-right">
                    <p className="text-white/40 text-xs">BNB</p>

                    <h4 className="text-white font-semibold">0.00025</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Quick actions */}
          <div className="px-5 mb-6">
            <div className="grid grid-cols-4 gap-3">
              <a
                href="deposit.html"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center group-active:scale-95 transition-all">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00D4AA"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1={12} y1={15} x2={12} y2={3} />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold text-white/40">
                  Deposit
                </span>
              </a>
              <a
                href="withdraw.html"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center group-active:scale-95 transition-all">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7B61FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1={12} y1={3} x2={12} y2={15} />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold text-white/40">
                  Withdraw
                </span>
              </a>
              <a
                href="trade.html"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center group-active:scale-95 transition-all">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF6B35"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="17 1 21 5 17 9" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <polyline points="7 23 3 19 7 15" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold text-white/40">
                  Trade
                </span>
              </a>
              <a
                href="swap.html"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center group-active:scale-95 transition-all">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFB800"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 3 21 3 21 8" />
                    <line x1={4} y1={20} x2={21} y2={3} />
                    <polyline points="21 16 21 21 16 21" />
                    <line x1={15} y1={15} x2={21} y2={21} />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold text-white/40">
                  Swap
                </span>
              </a>
              <a
                href="wallet.html"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center group-active:scale-95 transition-all">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00C896"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                    <line x1={1} y1={10} x2={23} y2={10} />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold text-white/40">
                  Wallet
                </span>
              </a>
              <a
                href="watchlist.html"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center group-active:scale-95 transition-all">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF6B35"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold text-white/40">
                  Watchlist
                </span>
              </a>
              <a
                href="staking-dashboard.html"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center group-active:scale-95 transition-all">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7B61FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={8} r={6} />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold text-white/40">
                  Stake
                </span>
              </a>
              <a
                href="ai-advisor.html"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center group-active:scale-95 transition-all">
                  <svg
                    width={24}
                    height={24}
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
                </div>
                <span className="text-[12px] font-semibold text-white/40">
                  AI Advisor
                </span>
              </a>
            </div>
          </div>
          {/* AI Signal */}
          <div className="px-5 mb-6">
            <a
              href="ai-advisor.html"
              className="bg-gradient-to-br from-secondary/15 to-primary/[0.08] border border-secondary/20 rounded-card p-4 flex items-center gap-4 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-[12px] bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7B61FF"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={2} y={2} width={20} height={8} rx={2} />
                  <rect x={2} y={14} width={20} height={8} rx={2} />
                  <line x1={6} y1={6} x2="6.01" y2={6} />
                  <line x1={6} y1={18} x2="6.01" y2={18} />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-secondary font-bold tracking-wide mb-1">
                  🤖 AI SIGNAL
                </div>
                <div className="text-sm font-bold">
                  BUY ETH — 87% confidence
                </div>
                <div className="text-xs text-white/40">
                  Bullish divergence detected · 1-2 week timeframe
                </div>
              </div>
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
          {/* Markets */}
          <div className="px-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Market</h2>
              <a
                href="market-overview.html"
                className="text-primary text-sm font-bold hover:opacity-80 transition-opacity"
              >
                See All
              </a>
            </div>
            <div id="home-coins" className="flex flex-col" />
          </div>
          {/* My Portfolio Section */}
          <section className="px-5 mb-15 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">My Portfolio</h2>
              <a
                href="portfolio-overview.html"
                className="text-primary text-sm font-bold hover:opacity-80 transition-opacity"
              >
                Details
              </a>
            </div>
            <div className="bg-surface border border-white/5 rounded-[24px] p-5">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[11px] text-white/30 font-bold tracking-wider uppercase mb-1">
                    Total P&amp;L
                  </div>
                  <div className="text-3xl font-black text-success">
                    +$9,623.56
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-white/30 font-bold tracking-wider uppercase mb-1">
                    ROI
                  </div>
                  <div className="text-2xl font-black text-success">
                    +25.19%
                  </div>
                </div>
              </div>
              <div id="home-holdings" className="space-y-1">
                {/* Rendered via JS */}
              </div>
            </div>
          </section>
          <div className="h-10" />
          <Footer />
        </div>
      </div>
    </>
  );
}

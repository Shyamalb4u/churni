import React from "react";
import Footer from "./footer";

export default function wallet() {
  return (
    <>
      <div class="min-h-screen flex justify-center">
        <div
          class="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)]"
          id="app"
        >
          <div class="flex items-center justify-between px-5 pt-8 pb-4 sticky top-0 bg-bg-dark/95 backdrop-blur-sm z-10">
            <h2 class="text-[24px] font-bold">Wallet</h2>
            <a
              href="transaction-filters.html"
              class="w-10 h-10 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center"
            >
              <svg
                width="18"
                height="18"
                viewbox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
            </a>
          </div>
          <div class="px-5 pb-24 animate-fade-up">
            <div class="bg-gradient-to-br from-primary/15 to-secondary/[0.08] border border-primary/20 rounded-card p-6 mb-5">
              <div class="text-[13px] text-white/50 mb-1.5">Total Balance</div>
              <div class="text-[38px] font-black tracking-tight mb-5">
                $47,823.56
              </div>
              <div class="flex gap-3">
                <a
                  href="deposit.html"
                  class="flex-1 bg-primary text-bg-dark font-bold rounded-btn h-12 flex items-center justify-center gap-2 text-[15px]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Deposit
                </a>
                <a
                  href="withdraw.html"
                  class="flex-1 bg-surface-2 border border-white/[0.1] rounded-btn h-12 flex items-center justify-center gap-2 font-bold text-[15px]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  Withdraw
                </a>
              </div>
            </div>
            <div class="text-[16px] font-bold mb-3">Assets</div>
            <div id="wallet-assets"></div>
          </div>
          <nav class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface border-t border-white/[0.08] flex items-center justify-around h-[72px] z-50">
            <a
              href="home.html"
              id="nav-home"
              class="flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewbox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span class="text-[10px] font-semibold">Home</span>
            </a>
            <a
              href="market-overview.html"
              id="nav-market"
              class="flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewbox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              <span class="text-[10px] font-semibold">Markets</span>
            </a>
            <a
              href="trade.html"
              id="nav-trade"
              class="flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors"
            >
              <div class="w-12 h-12 rounded-lg bg-primary flex flex-col items-center justify-center shadow-primary">
                <svg
                  width="22"
                  height="22"
                  viewbox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="17 1 21 5 17 9"></polyline>
                  <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                  <polyline points="7 23 3 19 7 15"></polyline>
                  <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                </svg>
                <span class="text-[10px] text-black font-semibold">Trade</span>
              </div>
            </a>
            <a
              href="portfolio-overview.html"
              id="nav-portfolio"
              class="flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewbox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span class="text-[10px] font-semibold">Portfolio</span>
            </a>
            <a
              href="profile.html"
              id="nav-profile"
              class="flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewbox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span class="text-[10px] font-semibold">Profile</span>
            </a>
          </nav>
        </div>
        <Footer />
      </div>
    </>
  );
}

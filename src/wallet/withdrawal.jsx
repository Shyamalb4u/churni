import React from "react";
import Footer from "./footer";

export default function withdrawal() {
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)] bg-bg-dark"
          id="app"
        >
          <div className="flex items-center px-5 pt-8 pb-4 sticky top-0 bg-bg-dark/95 backdrop-blur-sm z-10 border-b border-white/5">
            <button
              onclick="history.back()"
              className="w-10 h-10 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center text-white mr-4 flex-shrink-0"
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
            <h2 className="text-[20px] font-extrabold tracking-tight text-center flex-1 pr-14">
              Withdraw
            </h2>
          </div>
          <div className="px-5 pt-5 pb-24 animate-fade-up">
            <div className="mb-4 text-left">
              <label className="text-[13px] font-bold text-white/50 block mb-2 px-1">
                Asset
              </label>
              <div className="w-full bg-surface border border-white/10 rounded-xl h-14 px-4 flex items-center cursor-pointer transition-colors hover:bg-surface/[0.02]">
                <span className="text-[14px] font-bold">
                  USDT —
                  <span className="text-white/70 font-medium">
                    $12,450.00 available
                  </span>
                </span>
              </div>
            </div>
            <div className="mb-4 text-left">
              <label className="text-[13px] font-bold text-white/50 block mb-2 px-1">
                Network
              </label>
              <div className="w-full bg-surface border border-white/10 rounded-xl h-14 px-4 flex items-center shadow-sm cursor-pointer transition-colors hover:bg-surface/[0.02]">
                <span className="text-[14px] font-bold">
                  BNB Smart Chain (BEP-20)
                  <span className="text-white/50 font-medium px-1">·</span>
                  <span className="text-white/70 font-medium tracking-tight">
                    Fee: ~$0.10
                  </span>
                </span>
              </div>
            </div>
            <div className="mb-4 text-left">
              <label className="text-[13px] font-bold text-white/50 block mb-2 px-1">
                Destination Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-surface border border-white/10 rounded-xl h-14 px-4 pr-12 text-[14px] font-bold text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Enter wallet address or scan QR"
                />
                <button
                  onclick="showToast('QR scanner activated', 'info')"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors"
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
                    <rect x={3} y={3} width={7} height={7} rx={1} />
                    <rect x={14} y={3} width={7} height={7} rx={1} />
                    <rect x={14} y={14} width={7} height={7} rx={1} />
                    <rect x={3} y={14} width={7} height={7} rx={1} />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mb-6 text-left">
              <label className="text-[13px] font-bold text-white/50 block mb-2 px-1">
                Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full bg-surface border border-white/10 rounded-xl h-14 px-4 pr-28 text-[15px] font-bold text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder={0.0}
                  defaultValue={1000}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <span className="text-[14px] font-bold text-white/50">
                    USDT
                  </span>
                  <button
                    className="text-[12px] font-black text-primary hover:text-primary-dark transition-colors"
                    onclick="showToast('Max amount selected', 'success')"
                  >
                    MAX
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between px-1 mt-2">
                <span className="text-[11px] font-bold text-white/40">
                  Available: $12,450.00
                </span>
                <span className="text-[11px] font-bold text-white/40">
                  Min: $10
                </span>
              </div>
            </div>
            <div className="bg-surface border border-white/10 rounded-[16px] p-5">
              <div className="flex justify-between items-center mb-3.5">
                <span className="text-[13px] text-white/60 font-medium">
                  Amount
                </span>
                <span className="text-[14px] font-bold tracking-tight">
                  $1,000.00
                </span>
              </div>
              <div className="flex justify-between items-center mb-3.5">
                <span className="text-[13px] text-white/60 font-medium">
                  Network Fee
                </span>
                <span className="text-[14px] font-bold tracking-tight text-warning">
                  $0.10
                </span>
              </div>
              <div className="flex justify-between items-center pt-3.5 border-t border-white/5">
                <span className="text-[13px] text-white/60 font-medium">
                  You Receive
                </span>
                <span className="text-[14px] font-black tracking-tight text-success">
                  $999.90
                </span>
              </div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-center gap-3 mt-4">
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary flex-shrink-0"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-[13px] font-bold text-primary/80">
                Two-factor authentication (2FA) is required to process this
                withdrawal
              </span>
            </div>
            <button
              onclick="showToast('Withdrawal initiated!', 'success')"
              className="bg-primary hover:bg-primary-dark text-bg-dark font-extrabold rounded-btn h-14 w-full mt-6 flex items-center justify-center transition-all active:scale-95 shadow-[0_4px_24px_rgba(0,212,170,0.2)] text-[15px]"
            >
              Verify &amp; Withdraw
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

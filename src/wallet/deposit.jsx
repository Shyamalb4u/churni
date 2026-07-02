import React from "react";
import Footer from "./footer";

export default function deposit() {
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)]"
          id="app"
        >
          <div className="flex items-center justify-between px-5 py-3.5 sticky top-0 bg-bg-dark/95 backdrop-blur-sm border-b border-white/5 z-10">
            <a
              href="wallet.html"
              className="w-10 h-10 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center flex-shrink-0 transition-colors hover:bg-surface/5"
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
            <h1 className="text-[17px] font-bold">Deposit</h1>
            <div className="w-10" />
          </div>
          <div className="px-5 pt-5 pb-24 animate-fade-up">
            <div className="mb-4">
              <label className="text-[13px] font-medium text-white/50 block mb-2">
                Select Asset
              </label>
              <div className="relative">
                <select className="w-full bg-surface-2 border border-white/10 rounded-btn h-12 px-4 text-white text-sm focus:outline-none appearance-none cursor-pointer">
                  <option>USDT — Tether</option>
                  <option>BTC — Bitcoin</option>
                  <option>ETH — Ethereum</option>
                </select>
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <div className="mb-5">
              <label className="text-[13px] font-medium text-white/50 block mb-2">
                Select Network
              </label>
              <div className="border-2 border-primary rounded-xl p-3.5 mb-2 flex items-center gap-3 cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                  BNB
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">
                    BNB Smart Chain (BEP-20)
                  </div>
                  <div className="text-xs text-white/40">
                    Fee: ~$0.10 · ~1-2 min
                  </div>
                </div>
                <span className="bg-primary/15 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                  Fast
                </span>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00D4AA"
                  strokeWidth="2.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="border border-white/10 rounded-xl p-3.5 mb-2 flex items-center gap-3 cursor-pointer hover:border-white/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-surface-2 flex items-center justify-center text-xs font-bold text-white/40 flex-shrink-0">
                  ETH
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">
                    Ethereum (ERC-20)
                  </div>
                  <div className="text-xs text-white/40">
                    Fee: ~$3-5 · ~5-10 min
                  </div>
                </div>
              </div>
              <div className="border border-white/10 rounded-xl p-3.5 flex items-center gap-3 cursor-pointer hover:border-white/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-surface-2 flex items-center justify-center text-xs font-bold text-white/40 flex-shrink-0">
                  TRX
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">
                    Tron (TRC-20)
                  </div>
                  <div className="text-xs text-white/40">
                    Fee: ~$1 · ~1-3 min
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-5">
              <div className="w-[200px] h-[200px] mx-auto rounded-[16px] bg-surface-2 border-2 border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 grid grid-cols-8 gap-0.5">
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm" />
                  <div className="rounded-sm bg-surface" />
                  <div className="rounded-sm bg-surface" />
                </div>
                <div
                  className="absolute top-4 left-4 w-9 h-9 border-3 border-white rounded-lg bg-bg-dark"
                  style={{ borderWidth: 3 }}
                />
                <div
                  className="absolute top-4 right-4 w-9 h-9 border-3 border-white rounded-lg bg-bg-dark"
                  style={{ borderWidth: 3 }}
                />
                <div
                  className="absolute bottom-4 left-4 w-9 h-9 border-3 border-white rounded-lg bg-bg-dark"
                  style={{ borderWidth: 3 }}
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="text-[13px] font-medium text-white/50 block mb-2">
                Deposit Address (BEP-20)
              </label>
              <div className="bg-surface-2 border border-white/[0.08] rounded-xl p-4 flex items-center gap-3">
                <div className="flex-1 min-w-0 font-mono text-xs text-white/50 break-all">
                  0x742d35Cc6634C0532925a3b8D4C9C9dFf3a7dA2c
                </div>
                <button
                  id="btn-copy-address"
                  className="bg-primary/15 border-none rounded-lg px-3 py-2 text-primary text-xs font-bold cursor-pointer flex-shrink-0 transition-transform active:scale-95 hover:bg-primary/25"
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="bg-warning/[0.08] border border-warning/20 rounded-xl p-4 mb-5 text-xs text-white/50 leading-relaxed">
              ⚠️ Only send <strong className="text-white">USDT (BEP-20)</strong>{" "}
              to this address. Sending other tokens may result in permanent
              loss.
            </div>
            <div className="bg-surface border border-white/[0.08] rounded-card p-4">
              <div className="flex justify-between py-2.5 border-b border-white/5">
                <span className="text-[13px] text-white/40">Min. Deposit</span>
                <span className="text-[13px] font-semibold text-white">
                  $10 USDT
                </span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-white/5">
                <span className="text-[13px] text-white/40">Confirmations</span>
                <span className="text-[13px] font-semibold text-white">
                  12 blocks
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-[13px] text-white/40">Est. Arrival</span>
                <span className="text-[13px] font-semibold text-white">
                  1-2 minutes
                </span>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

import React from "react";
import Footer from "./footer";

export default function stakingdetails() {
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)]"
          id="app"
        >
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <h2 className="text-2xl font-extrabold">Staking</h2>
            <a
              href="stake-asset.html"
              className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center"
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00D4AA"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={12} y1={5} x2={12} y2={19} />
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
            </a>
          </div>
          <div className="px-5 pb-28 animate-fade-up">
            <div className="bg-gradient-to-br from-primary/15 to-secondary/[0.08] border border-primary/20 rounded-card p-6 mb-5">
              <div className="text-[13px] text-white/50 mb-1.5">
                Total Staked Value
              </div>
              <div
                className="text-[36px] font-black tracking-tight mb-3"
                id="staked-total"
              >
                $12,450
              </div>
              <div className="flex gap-5">
                <div>
                  <div className="text-xs text-white/40">Pending Rewards</div>
                  <div
                    className="text-lg font-extrabold text-success"
                    id="staked-rewards"
                  >
                    $150.54
                  </div>
                </div>
                <div className="w-px bg-surface/10" />
                <div>
                  <div className="text-xs text-white/40">Avg. APY</div>
                  <div className="text-lg font-extrabold text-primary">
                    6.5%
                  </div>
                </div>
                <div className="w-px bg-surface/10" />
                <div>
                  <div className="text-xs text-white/40">Positions</div>
                  <div className="text-lg font-extrabold">4</div>
                </div>
              </div>
            </div>
            <a
              href="claim-rewards.html"
              className="flex items-center gap-4 px-4 py-4 bg-success/[0.08] border border-success/20 rounded-card mb-6 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-[14px] bg-success/20 flex items-center justify-center flex-shrink-0">
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-base font-bold">Claim Rewards</div>
                <div className="text-[13px] text-success">
                  $150.54 available to claim
                </div>
              </div>
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth={2}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
            <div className="text-[15px] font-bold mb-3">Active Positions</div>
            <div id="staking-positions" />
            <div className="text-[15px] font-bold mt-6 mb-3">Earn More</div>
            <a
              href="stake-asset.html"
              className="flex items-center gap-4 px-4 py-4 bg-surface-2 border border-white/[0.08] rounded-card cursor-pointer"
            >
              <div className="w-12 h-12 rounded-[14px] bg-primary/15 flex items-center justify-center">
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
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} y1={8} x2={12} y2={16} />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
              </div>
              <div>
                <div className="text-[15px] font-bold">Stake More Assets</div>
                <div className="text-[13px] text-white/40">
                  Up to 18.5% APY available
                </div>
              </div>
              <svg
                className="ml-auto"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth={2}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
            <div className="h-5" />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

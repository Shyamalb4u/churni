import React from "react";
import Footer from "./footer";
export default function refer({ uid }) {
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)]"
          id="app"
        >
          <div className="flex items-center justify-between px-5 py-3.5 sticky top-0 bg-bg-dark/95 backdrop-blur-sm border-b border-white/5 z-10">
            <a
              href="profile.html"
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
                strokeLinesignup="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </a>
            <h1 className="text-[17px] font-bold">Refer &amp; Earn</h1>
            <div className="w-10" />
          </div>
          <div className="px-5 pt-5 pb-24 animate-fade-up">
            <div className="bg-gradient-to-br from-secondary/15 to-primary/10 border border-secondary/20 rounded-card p-6 mb-6 text-center">
              <div className="text-4xl mb-3">🎁</div>
              <div className="text-xl font-extrabold mb-1">
                Refer Friends &amp; Earn Crypto
              </div>
              <div className="text-white/50 text-sm leading-relaxed">
                Earn 5% of your referred friends' trading fees for 12 months. No
                cap on referrals — the more you share, the more you earn.
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-surface border border-white/[0.08] rounded-card p-3 text-center">
                <div className="text-xl font-extrabold text-primary">12</div>
                <div className="text-xs text-white/40">Referrals</div>
              </div>
              <div className="bg-surface border border-white/[0.08] rounded-card p-3 text-center">
                <div className="text-xl font-extrabold text-success">$0</div>
                <div className="text-xs text-white/40">Earned</div>
              </div>
              <div className="bg-surface border border-white/[0.08] rounded-card p-3 text-center">
                <div className="text-xl font-extrabold text-warning">5%</div>
                <div className="text-xs text-white/40">Commission</div>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-[15px] font-bold mb-3">
                Your Unique Referral Code
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/[0.06] border border-primary/20 rounded-card p-4 flex items-center justify-between">
                <span className="text-2xl font-black tracking-widest text-primary">
                  {uid}
                </span>
                <button
                  onclick={`copyToClipboard('${uid}')`}
                  className="bg-primary text-bg-dark font-bold rounded-btn px-4 py-2 text-sm"
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-[15px] font-bold mb-3">Share Your Link</div>
              <div className="bg-surface-2 border border-white/[0.08] rounded-btn p-3 flex items-center gap-2 mb-3">
                <div className="flex-1 min-w-0 text-xs text-white/50 font-mono truncate">
                  https://qbot.technology/signup?s={uid}
                </div>
                <button
                  onclick={`copyToClipboard('https://qbot.technology/signup?s=${uid}')`}
                  className="text-primary text-xs font-bold flex-shrink-0"
                >
                  Copy
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  onclick={`showToast('Shared to WhatsApp', 'info')`}
                  className="flex-1 bg-surface-2 border border-white/[0.08] rounded-btn h-11 text-sm font-semibold"
                >
                  WhatsApp
                </button>
                <button
                  onclick={`showToast('Shared to Twitter', 'info')`}
                  className="flex-1 bg-surface-2 border border-white/[0.08] rounded-btn h-11 text-sm font-semibold"
                >
                  Twitter
                </button>
                <button
                  onclick={`showToast('Shared to Telegram', 'info')`}
                  className="flex-1 bg-surface-2 border border-white/[0.08] rounded-btn h-11 text-sm font-semibold"
                >
                  Telegram
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

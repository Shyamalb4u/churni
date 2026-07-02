import React from "react";
import Footer from "./footer";

export default function profile() {
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)]"
          id="app"
        >
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <h2 className="text-2xl font-extrabold">Profile</h2>
            <a
              href="app-settings.html"
              className="w-10 h-10 rounded-xl bg-surface-2 border border-white/[0.08] flex items-center justify-center"
            >
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
                <circle cx={12} cy={12} r={3} />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </a>
          </div>
          <div className="px-5 pb-24 animate-fade-up">
            <div className="text-center py-8 bg-gradient-to-br from-primary/10 to-secondary/[0.06] border border-primary/15 rounded-card mb-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-3">
                <img
                  src="assets/images/buyer1.png"
                  alt="user"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="text-xl font-extrabold mb-1">Alex Mercer</div>
              <div className="text-white/50 text-sm mb-3">
                alex.mercer@email.com
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="bg-primary/15 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  Pro Member
                </span>
                <span className="bg-success/15 text-success text-xs font-bold px-3 py-1 rounded-full">
                  ✓ KYC Verified
                </span>
              </div>
            </div>
            <div className="bg-surface border border-white/[0.08] rounded-card mb-4">
              <a
                href="edit-profile.html"
                className="flex items-center gap-3 px-4 py-4 border-b border-white/5 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0">
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
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">Edit Profile</div>
                  <div className="text-xs text-white/40">
                    Name, photo &amp; contact details
                  </div>
                </div>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
              <a
                href="security.html"
                className="flex items-center gap-3 px-4 py-4 border-b border-white/5 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7B61FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">Security</div>
                  <div className="text-xs text-white/40">
                    Password, 2FA &amp; biometric login
                  </div>
                </div>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
              <a
                href="notification-settings.html"
                className="flex items-center gap-3 px-4 py-4 border-b border-white/5 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFB800"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">Notifications</div>
                  <div className="text-xs text-white/40">
                    Price alerts &amp; notification preferences
                  </div>
                </div>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
              <a
                href="kyc-info.html"
                className="flex items-center gap-3 px-4 py-4 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00C896"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">
                    Identity Verification
                  </div>
                  <div className="text-xs text-success">Verified</div>
                </div>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            </div>
            <div className="bg-surface border border-white/[0.08] rounded-card mb-4">
              <a
                href="/refer"
                className="flex items-center gap-3 px-4 py-4 border-b border-white/5 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9945FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">Refer &amp; Earn</div>
                  <div className="text-xs text-white/40">
                    12 referrals · $145.50 earned
                  </div>
                </div>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
              <a
                href="pricing.html"
                className="flex items-center gap-3 px-4 py-4 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0">
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
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1={7} y1={7} x2="7.01" y2={7} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">Subscription</div>
                  <div className="text-xs text-primary">Pro Member</div>
                </div>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            </div>
            <div className="bg-surface border border-white/[0.08] rounded-card mb-6">
              <a
                href="help-center.html"
                className="flex items-center gap-3 px-4 py-4 border-b border-white/5 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0">
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
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1={12} y1={17} x2="12.01" y2={17} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">Help Center</div>
                  <div className="text-xs text-white/40">
                    FAQs, guides &amp; live support
                  </div>
                </div>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
              <a
                href="terms.html"
                className="flex items-center gap-3 px-4 py-4 border-b border-white/5 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8B91A8"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">Terms of Service</div>
                </div>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
              <a
                href="privacy.html"
                className="flex items-center gap-3 px-4 py-4 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8B91A8"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x={3} y={11} width={18} height={11} rx={2} />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">Privacy Policy</div>
                </div>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            </div>
            <button
              onclick="
        showToast('Signed out', 'info');
        setTimeout(() => (window.location.href = 'welcome.html'), 1000);
      "
              className="bg-error/15 text-error border border-error/20 rounded-btn h-12 flex items-center justify-center gap-2 font-bold w-full mb-4"
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1={21} y1={12} x2={9} y2={12} />
              </svg>
              Sign Out
            </button>
            <div className="text-center text-xs text-white/20 pb-4">
              Cryptrix v2.0.0 · Built with care ❤️
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

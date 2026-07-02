import React from "react";
import Footer from "./footer";
export default function activation() {
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
                strokeLinejoin="round"
                className="rtl:rotate-180"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </a>
            <h1 className="text-[17px] font-bold">Upgrade Plan</h1>
            <div className="w-10" />
          </div>
          <div className="px-5 pt-5 pb-28 animate-fade-up">
            {/* Promo Banner */}
            <div className="bg-gradient-to-br from-secondary/80 to-primary/80 rounded-[24px] p-6 mb-6 text-center text-white relative overflow-hidden shadow-lg shadow-primary/20">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-surface/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-surface/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-surface/20 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-md">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"
                      fill="#FFD700"
                      stroke="#FFD700"
                    />
                    <path d="M5 20h14" strokeWidth={3} strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="text-xl font-black mb-1">
                  Unlock the Full Power of AI Trading
                </h2>
                <p className="text-white/80 text-xs max-w-[240px] mx-auto leading-relaxed">
                  AI-powered signals, unlimited trades, zero trading fees, and
                  professional-grade market intelligence
                </p>
              </div>
            </div>
            {/* Billing Toggle */}
            <div className="flex items-center justify-between bg-surface-2 border border-white/5 rounded-pill p-1 mb-8">
              <button
                id="toggleMonthly"
                className="flex-1 py-2.5 text-xs font-bold rounded-pill bg-primary text-bg-dark transition-all"
              >
                Monthly
              </button>
              <button
                id="toggleAnnual"
                className="flex-1 py-2.5 text-xs font-bold rounded-pill text-white/40 hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                Annual
                <span className="bg-success/20 text-success text-[9px] px-1.5 py-0.5 rounded-full">
                  -20%
                </span>
              </button>
            </div>
            {/* Pricing Cards */}
            <div className="space-y-6">
              {/* Free Card */}
              <div className="bg-surface border border-white/[0.08] rounded-[24px] p-6 relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFB800"
                        strokeWidth={2}
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M12 6v12M6 12h12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold">Free</h3>
                      <p className="text-white/40 text-[10px]">
                        Always free, no card needed
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black">$0</div>
                    <div className="text-white/40 text-[10px]">forever</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Basic portfolio tracking
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    5 price alerts
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Market overview
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Email support
                  </li>
                </ul>
              </div>
              {/* Pro Card (Most Popular) */}
              <div className="bg-surface border-2 border-primary rounded-[24px] p-6 relative shadow-lg shadow-primary/10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-bg-dark text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00D4AA"
                        strokeWidth={2}
                      >
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-primary">Pro</h3>
                      <p className="text-white/40 text-[10px]">
                        Ideal for active traders
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black" id="proPrice">
                      $29
                    </div>
                    <div className="text-white/40 text-[10px]" id="proPeriod">
                      per month
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Everything in Free
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    AI trading signals (unlimited)
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Advanced portfolio analytics
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Unlimited price alerts
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Real-time market data
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    0.05% trading fee (50% off)
                  </li>
                </ul>
                <div className="w-full h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm backdrop-blur-sm">
                  ✓ Your Active Plan
                </div>
              </div>
              {/* Elite Card */}
              <div className="bg-surface border border-white/[0.08] rounded-[24px] p-6 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all" />
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#7B61FF"
                        strokeWidth={2}
                      >
                        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-secondary">
                        Elite
                      </h3>
                      <p className="text-white/40 text-[10px]">
                        For professional traders
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black" id="elitePrice">
                      $79
                    </div>
                    <div className="text-white/40 text-[10px]" id="elitePeriod">
                      per month
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Everything in Pro
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    AI Robo-advisor (24/7)
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copy trading (Top Traders)
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    API access (1000 req/min)
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-secondary font-bold">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    ZERO trading fees
                  </li>
                  <li className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C896"
                      strokeWidth={3}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Early access to new features
                  </li>
                </ul>
                <a
                  href="checkout.html"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-secondary to-[#6040EE] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-secondary/20 active:scale-95 transition-all"
                >
                  Upgrade to Elite
                </a>
              </div>
            </div>
            {/* Feature Comparison */}
            <div className="mt-12 mb-10">
              <h4 className="text-sm font-bold mb-6 flex items-center justify-between">
                Feature Comparison
              </h4>
              <div className="bg-surface border border-white/5 rounded-[24px] overflow-hidden">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-surface/5">
                    <tr>
                      <th className="py-3 px-4 text-white/60 font-medium">
                        Feature
                      </th>
                      <th className="py-3 px-2 text-center text-white/60 font-medium">
                        Free
                      </th>
                      <th className="py-3 px-2 text-center text-primary font-bold">
                        Pro
                      </th>
                      <th className="py-3 px-2 text-center text-secondary font-bold">
                        Elite
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 px-4 text-white/80">AI Signals</td>
                      <td className="py-3 px-2 text-center">❌</td>
                      <td className="py-3 px-2 text-center">✅</td>
                      <td className="py-3 px-2 text-center">✅</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white/80">Price Alerts</td>
                      <td className="py-3 px-2 text-center">5</td>
                      <td className="py-3 px-2 text-center text-primary font-bold">
                        ∞
                      </td>
                      <td className="py-3 px-2 text-center text-secondary font-bold">
                        ∞
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white/80">Analytics</td>
                      <td className="py-3 px-2 text-center">Basic</td>
                      <td className="py-3 px-2 text-center text-primary">
                        Advanced
                      </td>
                      <td className="py-3 px-2 text-center text-secondary">
                        Premium
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white/80">Trade Fees</td>
                      <td className="py-3 px-2 text-center">0.1%</td>
                      <td className="py-3 px-2 text-center">0.05%</td>
                      <td className="py-3 px-2 text-center text-secondary font-bold">
                        0%
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white/80">API Access</td>
                      <td className="py-3 px-2 text-center">❌</td>
                      <td className="py-3 px-2 text-center">❌</td>
                      <td className="py-3 px-2 text-center">✅</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white/80">Support</td>
                      <td className="py-3 px-2 text-center text-white/40">
                        Email
                      </td>
                      <td className="py-3 px-2 text-center text-primary">
                        Priority
                      </td>
                      <td className="py-3 px-2 text-center text-secondary">
                        Dedicated
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 mb-12">
              <div className="bg-surface-2 border border-white/5 rounded-2xl p-4 text-center">
                <div className="text-xl mb-1">🔒</div>
                <div className="text-[10px] font-bold">Secure</div>
                <div className="text-[8px] text-white/40">256-bit SSL</div>
              </div>
              <div className="bg-surface-2 border border-white/5 rounded-2xl p-4 text-center">
                <div className="text-xl mb-1">💳</div>
                <div className="text-[10px] font-bold">Easy</div>
                <div className="text-[8px] text-white/40">Cancel anytime</div>
              </div>
              <div className="bg-surface-2 border border-white/5 rounded-2xl p-4 text-center">
                <div className="text-xl mb-1">🌍</div>
                <div className="text-[10px] font-bold">Global</div>
                <div className="text-[8px] text-white/40">150+ countries</div>
              </div>
            </div>
            {/* FAQ Section */}
            <div className="mb-10">
              <h4 className="text-sm font-bold mb-5 flex items-center justify-between">
                Frequently Asked Questions
              </h4>
              <div className="space-y-3">
                <div className="bg-surface-2 border border-white/5 rounded-2xl overflow-hidden">
                  <div
                    onclick="
              const n = this.nextElementSibling;
              n.style.display =
                n.style.display === 'block' ? 'none' : 'block';
            "
                    className="px-5 py-4 flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-xs font-semibold">
                      Can I cancel anytime?
                    </span>
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  <div
                    className="px-5 pb-4 text-[11px] text-white/40 leading-relaxed"
                    style={{ display: "none" }}
                  >
                    Yes. You can cancel at any time from your account billing
                    settings. You'll retain full access to your plan until the
                    end of the current billing period.
                  </div>
                </div>
                <div className="bg-surface-2 border border-white/5 rounded-2xl overflow-hidden">
                  <div
                    onclick="
              const n = this.nextElementSibling;
              n.style.display =
                n.style.display === 'block' ? 'none' : 'block';
            "
                    className="px-5 py-4 flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-xs font-semibold">
                      What payment methods are accepted?
                    </span>
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  <div
                    className="px-5 pb-4 text-[11px] text-white/40 leading-relaxed"
                    style={{ display: "none" }}
                  >
                    We accept major credit cards (Visa, Mastercard, Amex), Apple
                    Pay, Google Pay, and several popular cryptocurrencies like
                    BTC, ETH, and USDT.
                  </div>
                </div>
                <div className="bg-surface-2 border border-white/5 rounded-2xl overflow-hidden">
                  <div
                    onclick="
              const n = this.nextElementSibling;
              n.style.display =
                n.style.display === 'block' ? 'none' : 'block';
            "
                    className="px-5 py-4 flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-xs font-semibold">
                      Is there a free trial?
                    </span>
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  <div
                    className="px-5 pb-4 text-[11px] text-white/40 leading-relaxed"
                    style={{ display: "none" }}
                  >
                    Yes. We offer a 7-day free trial on the Pro plan, giving you
                    full access to AI signals, advanced analytics, and all Pro
                    features — no commitment required.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

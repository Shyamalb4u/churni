import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Signup() {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("US");

  useEffect(() => {
    fetch("https://ipinfo.io/json")
      .then((res) => res.json())
      .then((data) => {
        if (data.country) {
          setCountry(data.country); // IN, BD, US
        }
      })
      .catch(() => {
        setCountry("US");
      });
  }, []);

  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)]"
          id="app"
        >
          <div className="min-h-screen bg-bg-dark flex flex-col">
            <div className="flex items-center justify-center gap-3 px-5 pt-5">
              <img src="/logo.png" style={{ width: 120 }} />
              <h1 className="text-[17px] font-bold">Create Account</h1>
            </div>
            <div className="flex-1 px-6 pt-4 pb-6 animate-fade-up">
              <p className="text-white/50 mb-4 text-[15px] text-center">
                Join our AI-powered traders team,
              </p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-[13px] font-medium text-white/50 block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-surface-2 border border-white/10 rounded-btn h-12 px-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors font-medium text-sm"
                    placeholder="Alex"
                  />
                </div>
                <div>
                  <label className="text-[13px] font-medium text-white/50 block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-surface-2 border border-white/10 rounded-btn h-12 px-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors font-medium text-sm"
                    placeholder="Mercer"
                    value=""
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="text-[13px] font-medium text-white/50 block mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                    width="18"
                    height="18"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input
                    type="email"
                    className="w-full bg-surface-2 border border-white/10 rounded-btn h-12 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors font-medium text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="text-[13px] font-medium text-white/50 block mb-2">
                  Phone Number
                </label>
                <PhoneInput
                  className="w-full phone-input"
                  international
                  defaultCountry={country}
                  countryCallingCodeEditable={false}
                  value={phone}
                  onChange={setPhone}
                />

                {/* <div className="relative">
                  <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                    +91
                  </label>
                  <input
                    id="phone"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="w-full bg-surface-2 border border-white/10 rounded-btn h-12 pl-12 pr-8 px-5 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors font-medium text-sm"
                    placeholder="000-000-0000"
                  />
                </div> */}
              </div>
              <div className="mb-3">
                <label className="text-[13px] font-medium text-white/50 block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full bg-surface-2 border border-white/10 rounded-btn h-12 px-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors font-medium text-sm"
                  placeholder="Min. 6 characters"
                />
                <div className="mt-2 mb-1">
                  <div className="h-1.5 bg-surface/10 rounded-full overflow-hidden m-2">
                    <div className="h-full rounded-full w-[65%] bg-gradient-to-r from-warning to-success"></div>
                  </div>
                  <div className="text-xs text-white/40 mt-1">
                    Password strength:
                    <span className="text-warning font-semibold">Medium</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="text-[13px] font-medium text-white/50 block mb-2">
                  Referral Code 🌟🌟🌟
                </label>
                <input
                  type="text"
                  className="w-full bg-surface-2 border border-white/10 rounded-btn h-12 px-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors font-medium text-sm tracking-[3px]"
                  placeholder="Enter referral code"
                />
              </div>
              <div className="flex items-start gap-2.5 mb-4">
                <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center flex-shrink-0 mt-0.5 cursor-pointer">
                  <svg
                    width="12"
                    height="12"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="#0A0B0F"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-[13px] text-white/50 leading-relaxed">
                  I agree to the
                  <a href="terms.html" className="text-primary font-semibold">
                    Terms of Service
                  </a>
                  and
                  <a href="privacy.html" className="text-primary font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <a
                href="otp.html"
                className="bg-primary text-bg-dark font-bold rounded-btn h-12 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-primary w-full mb-5"
              >
                Create Account
              </a>
              <div className="text-center text-sm">
                <span className="text-white/40">Already have an account? </span>
                <a href="signin.html" className="text-primary font-bold">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

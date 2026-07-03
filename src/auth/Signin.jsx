import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Signin() {
  const api_link = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isBusi, setIsBusi] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      const address = userInfo.publicKey;
      if (address) {
        navigate("/account");
      }
    } catch (error) {}
  }, [navigate]);

  function errorMessage(msgTitle) {
    //console.log(msgTitle);
    Swal.fire({
      icon: "error",
      title: msgTitle,
      text: "Please Fill the Required Fields.",
      confirmButtonText: "OK",
      confirmButtonColor: "#d44e00",
      background: "#111827",
      color: "#fff",
    });
  }

  async function onLogin() {
    console.log(Date.now());
    setIsBusi(true);
    if (mail.length < 4) {
      setIsBusi(false);
      errorMessage("Invalid Mail Address");
      return;
    }

    if (password.length < 6) {
      setIsBusi(false);
      errorMessage("Minimum Password Length 6");
      return;
    }
    //////////////////////////
    let url = api_link + "signin";
    const data = {
      mail: mail.trim(),
      pass: password,
    };
    const customHeaders = {
      "Content-Type": "application/json",
    };
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify(data),
      });

      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      const reData = await result.json();
      //console.log(reData);
      if (reData.message !== "OK") {
        setIsBusi(false);
        errorMessage("Login Failed.");
        return;
      }
      if (reData.user.codes === "NO") {
        setIsBusi(false);
        errorMessage("Invalid Credintial");
        return;
      } else {
        setIsBusi(false);
        const uid = reData.user.codes;
        const name = reData.user.names;
        const publicKey = reData.user.publicKey;
        const phrases = reData.user.phrases;
        const user = {
          id: uid,
          name: name,
          publicKey: publicKey,
          phrases: phrases,
        };
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/account");
      }
    } catch (error) {
      setIsBusi(false);
      console.log("Others Error!");
    }
  }
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)]"
          id="app"
        >
          <div className="min-h-screen bg-bg-dark flex flex-col">
            <div className="flex-1 px-6 pt-8 pb-6 animate-fade-up">
              <div className="mb-9">
                <div className="mb-5" style={{ textAlign: "center" }}>
                  <img src="logo.png" alt="logo" style={{ width: "120px" }} />
                </div>
                <h2 className="text-[28px] font-extrabold text-center mb-2">
                  Welcome back
                </h2>
                <p className="text-white/50 text-[15px] text-center">
                  Sign in to your QBOT account
                </p>
              </div>
              {/* Email */}
              <div className="mb-4">
                <label className="text-[13px] font-medium text-white/50 block mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <input
                    type="email"
                    className="w-full bg-surface-2 border border-white/10 rounded-btn h-12 pl-11 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors font-medium text-sm"
                    placeholder="alex@example.com"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    maxLength={150}
                  />
                </div>
              </div>
              {/* Password */}
              <div className="mb-4">
                <label className="text-[13px] font-medium text-white/50 block mb-2">
                  Password
                </label>
                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="pw-input"
                    className="w-full bg-surface-2 border border-white/10 rounded-btn h-12 pl-11 pr-12 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors font-medium text-sm"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    maxLength={40}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
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
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                  </button>
                </div>
                <div className="text-right mt-2">
                  <a
                    href="/"
                    className="text-primary text-[13px] font-semibold"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                disabled={isBusi}
                onClick={() => onLogin()}
                className="bg-primary text-bg-dark font-bold rounded-btn h-12 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-primary w-full mb-5"
              >
                {isBusi ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Connecting...
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </div>
            <div className="text-center pb-10 text-sm">
              <span className="text-white/40">All rights reserved 2026 </span>
              <span className="text-primary font-bold">QBOT</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

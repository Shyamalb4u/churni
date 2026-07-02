import React from "react";
import { NavLink } from "react-router-dom";
export default function footer() {
  return (
    <>
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface border-t border-white/[0.08] flex items-center justify-around h-[72px] z-50">
        <NavLink
          to="/account"
          id="nav-home"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? "text-primary" : "text-white/40 hover:text-primary"
            }`
          }
        >
          <svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>

          <span className="text-[10px] font-semibold">Home</span>
        </NavLink>
        <NavLink
          to="/market-overview"
          id="nav-market"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? "text-primary" : "text-white/40 hover:text-primary"
            }`
          }
        >
          <svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="16 7 22 7 22 13" />
          </svg>

          <span className="text-[10px] font-semibold">Markets</span>
        </NavLink>
        <a
          href="/buy-bot"
          id="nav-trade"
          className="flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors"
        >
          <div className="w-12 h-12 rounded-lg bg-primary flex flex-col items-center justify-center shadow-primary">
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="17 1 21 5 17 9" />
              <path d="M3 11V9a4 4 0 0 1 4-4h14" />
              <polyline points="7 23 3 19 7 15" />
              <path d="M21 13v2a4 4 0 0 1-4 4H3" />
            </svg>
            <span className="text-[10px] text-black font-semibold">Trade</span>
          </div>
        </a>
        <NavLink
          to="/portfolio-overview"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? "text-primary" : "text-white/40 hover:text-primary"
            }`
          }
        >
          <svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>

          <span className="text-[10px] font-semibold">Portfolio</span>
        </NavLink>
        <NavLink
          to="/profile"
          id="nav-profile"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? "text-primary" : "text-white/40 hover:text-primary"
            }`
          }
        >
          <svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
          <span className="text-[10px] font-semibold">Profile</span>
        </NavLink>
      </nav>
    </>
  );
}

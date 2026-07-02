import React from "react";
import Footer from "./footer";

export default function notification() {
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <div
          className="relative w-full max-w-[430px] min-h-screen overflow-x-hidden shadow-[0_0_80px_rgba(0,212,170,0.08)]"
          id="app"
        >
          <div className="flex items-center justify-between px-5 py-3.5 sticky top-0 bg-bg-dark/95 backdrop-blur-sm border-b border-white/5 z-10">
            <a
              href="home.html"
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
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </a>
            <h3 className="text-[17px] font-bold">Notifications</h3>
            <button
              onclick="showToast('All marked as read', 'success')"
              className="text-primary text-sm font-semibold"
            >
              Mark All
            </button>
          </div>
          <div className="px-5 pt-5 pb-24 animate-fade-up" id="notif-list" />
          <Footer />
        </div>
      </div>
    </>
  );
}

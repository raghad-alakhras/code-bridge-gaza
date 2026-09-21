"use client";

import { usePathname } from "next/navigation";

import {
  FiSearch,
  FiBell,
  FiLogOut,
} from "react-icons/fi";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/profile": "Profile",
  "/jobs": "Jobs",
  "/courses": "Courses",
  "/cv-generator": "CV Generator",
  "/ai-assistant": "AI Assistant",
  "/settings": "Settings",
  "/dashboard/admin": "Admin Dashboard",
  "/dashboard/admin/users": "Users Management",
  "/dashboard/admin/jobs": "Jobs Management",
  "/dashboard/admin/courses": "Courses Management",
};

export default function Topbar() {
  const pathname = usePathname();

  const pageTitle = pageTitles[pathname] || "Dashboard";

  return (
    <header className="flex py-4 shrink-0 items-center border-b border-slate-200 bg-white px-9">
      
      {/* Page Title */}
      <div className="w-[275px] shrink-0">
        <h1 className="text-[17px] font-extrabold text-slate-900">
          {pageTitle}
        </h1>
      </div>

      {/* Search */}
      <div className="flex flex-1">
        <div className="relative w-full max-w-[575px]">
          <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[18px] text-slate-400" />

          <input
            type="text"
            placeholder="Search jobs, courses..."
            className="h-10 w-70 rounded-[18px] border border-slate-200 bg-slate-50 pl-14 pr-5 text-[13px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:bg-white"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-5">
        
        {/* Notifications */}
        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
        >
          <FiBell className="text-[16px] " />

          <span className="absolute right-[9px] top-[7px] h-2 w-2 rounded-full bg-violet-600 ring-2 ring-white " />
        </button>

        {/* User */}
        <div className="flex items-center gap-4">
          <div className="flex h-[37px] w-[37px] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-[14px] font-bold text-white shadow-lg shadow-violet-200">
            AH
          </div>

          <p className="whitespace-nowrap text-[13px] font-bold text-slate-900">
            Ahmed Hassan
          </p>
        </div>

        {/* Logout */}
        <button
          type="button"
          className="ml-2 flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-violet-600"
        >
          <FiLogOut className="text-[20px]" />
        </button>

      </div>
    </header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../../../_Components/Logo/Logo";

import {
  FiGrid,
  FiUser,
  FiBriefcase,
  FiBookOpen,
  FiFileText,
  FiMessageSquare,
  FiSettings,
  FiShield,
  FiUsers,
  FiLogOut,
} from "react-icons/fi";

const userLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: FiGrid,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: FiUser,
  },
  {
    name: "Jobs",
    href: "/dashboard/jobs",
    icon: FiBriefcase,
  },
  {
    name: "Courses",
    href: "/dashboard/courses",
    icon: FiBookOpen,
  },
  {
    name: "CV Generator",
    href: "/dashboard/cv-generator",
    icon: FiFileText,
  },
  {
    name: "AI Assistant",
    href: "/dashboard/ai-assistant",
    icon: FiMessageSquare,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: FiSettings,
  },
];

const adminLinks = [
  {
    name: "Admin Dashboard",
    href: "/dashboard/admin",
    icon: FiShield,
  },
  {
    name: "Users Management",
    href: "/dashboard/admin/users",
    icon: FiUsers,
  },
  {
    name: "Jobs Management",
    href: "/dashboard/admin/jobs",
    icon: FiBriefcase,
  },
  {
    name: "Courses Management",
    href: "/dashboard/admin/courses",
    icon: FiBookOpen,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/dashboard" || href === "/dashboard/admin") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <aside className="flex h-screen w-[250px] shrink-0 flex-col bg-gradient-to-b from-[#263F91] via-[#4143A4] to-[#6746AC] text-white">

      {/* Scrollable Sidebar Content */}
      <div className="flex-1 overflow-y-auto px-5 pt-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

        {/* Logo */}
        <div className="px-1">
          <Logo variant="sidebar" />
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-white/15" />

        {/* User Navigation */}
        <nav >
          {userLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex h-9 my-1 items-center gap-4 rounded-2xl px-4 text-[13px] font-medium transition-all duration-200 ${
                  active
                    ? "bg-[#F8F8FC] font-semibold text-[#493CB2]"
                    : "text-[#e4e3ed] hover:bg-white/10"
                }`}
              >
                <Icon className="shrink-0 text-[16px]" />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Admin Section */}
        <div className="mt-6">

          <div className="mb-2 flex items-center gap-2 px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B8ACE9]">
            <FiShield className="text-[14px]" />

            <span>Admin Panel</span>
          </div>

          <nav>
            {adminLinks.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex h-9 my-1 items-center gap-4 rounded-2xl px-4 text-[13px] font-medium transition-all duration-200 ${
                    active
                      ? "bg-[#F8F8FC] font-semibold text-[#493CB2]"
                      : "text-[#e4e3ed] hover:bg-white/10"
                  }`}
                >
                  <Icon className="shrink-0 text-[16px]" />

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="h-5" />
      </div>

      {/* Logged User - Fixed Bottom */}
      <div className="shrink-0 px-5 pb-4 pt-3">
        <div className="flex h-[55px] items-center gap-3 rounded-2xl bg-white/10 px-4">
          
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B72D4] text-sm font-bold text-white">
            AH
          </div>

          <p className="min-w-0 flex-1 truncate text-[13px] font-bold text-white">
            Ahmed Hassan
          </p>

          <button
            type="button"
            className="flex h-7 w-7 shrink-0 items-center justify-center text-[#D7D1F5] transition hover:text-white"
          >
            <FiLogOut className="text-[21px]" />
          </button>

        </div>
      </div>
    </aside>
  );
}
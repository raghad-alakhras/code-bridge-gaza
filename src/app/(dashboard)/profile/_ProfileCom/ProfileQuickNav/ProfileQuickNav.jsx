"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiBookOpen,
  FiSettings,
} from "react-icons/fi";

const profileLinks = [
  {
    name: "Home",
    href: "/dashboard",
    icon: FiHome,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: FiUser,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: FiCode,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: FiBriefcase,
  },
  {
    name: "Education",
    href: "#education",
    icon: FiBookOpen,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: FiSettings,
  },
];

export default function ProfileQuickNav() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-6">
      <div className="flex flex-col items-center gap-3 rounded-[28px] border border-slate-100 bg-white px-3 py-4 shadow-sm">
        {profileLinks.map((item) => {
          const Icon = item.icon;

          const active =
            item.href === "/profile" && pathname === "/profile";

          return (
            <Link
              key={item.name}
              href={item.href}
              title={item.name}
              className={`group flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-200 ${
                active
                  ? "bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-violet-200"
                  : "text-slate-500 hover:bg-violet-50 hover:text-violet-600"
              }`}
            >
              <Icon className="text-[22px]" />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
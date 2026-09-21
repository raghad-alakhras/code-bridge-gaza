import Link from "next/link";
import {
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiMessageCircle,
} from "react-icons/fi";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: FiLinkedin,
  },
  {
    name: "GitHub",
    href: "#",
    icon: FiGithub,
  },
  {
    name: "Facebook",
    href: "#",
    icon: FiFacebook,
  },
  {
    name: "Message",
    href: "#",
    icon: FiMessageCircle,
  },
];

export default function SocialLinks() {
  return (
    <section className="rounded-[30px] border border-slate-100 bg-white px-10 py-9 shadow-sm">
      
      <h2 className="text-[24px] font-extrabold text-slate-950">
        Follow Me
      </h2>

      <div className="mt-8 flex flex-wrap gap-5">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <Link
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="flex h-[72px] w-[72px] items-center justify-center rounded-[18px] border border-violet-200 bg-[#FAF9FF] text-slate-500 transition-all duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600 hover:-translate-y-1"
            >
              <Icon className="text-[30px]" />
            </Link>
          );
        })}
      </div>

    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type FooterDict = Dictionary["footer"];

export default function Footer({ dict }: { dict: FooterDict }) {
  return (
    <footer className="bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex flex-col items-start mb-6">
            <Image
              src="/images/footerlogo.svg"
              alt="logo"
              width={143}
              height={100}
            />
          </div>
          <p className="text-white/45 text-sm leading-relaxed max-w-xs">
            {dict.description}
          </p>
        </div>

        <div>
          <h4 className="text-white/40 text-[9px] tracking-[0.35em] uppercase mb-7">
            {dict.navLabel}
          </h4>
          <ul className="space-y-3.5">
            {dict.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/65 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white/40 text-[9px] tracking-[0.35em] uppercase mb-7">
            {dict.contactLabel}
          </h4>
          <ul className="space-y-4 text-white/65 text-sm">
            <li className="flex items-start gap-3">
              <svg
                className="w-4 h-4 mt-0.5 text-gold shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Seoul St 21, Ulaanbaatar, Mongolia</span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-gold shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+976 11 321 456</span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-gold shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@bishrelt.mn</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 md:px-10 py-5 max-w-7xl mx-auto">
        <p className="text-white/25 text-xs">{dict.copyright}</p>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Our Rooms", href: "#rooms" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Event Halls", href: "#events" },
  { label: "Karaoke & Lounge", href: "#karaoke" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#141414] backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between py-4 sm:py-5">
          <Link href="/">
            <Image src='/images/logo.svg' width={90} height={38} alt="Bishrelt Hotel" className="sm:w-27.5 sm:h-11.5" />
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-100 font-normal hover:text-white text-[16px] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-white/90 hover:text-white text-sm tracking-wider transition-colors">
              EN
            </button>
            <Link
              href="#booking"
              className="border border-white text-white hover:bg-white hover:text-hotel-dark text-xs tracking-widest uppercase px-6 py-2.5 transition-colors"
            >
              Захиалга өгөх
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2 -mr-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-hotel-dark/95 backdrop-blur-md border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-5 mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-gold text-sm tracking-wide transition-colors block py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button className="text-white/70 hover:text-white text-sm tracking-wider transition-colors">
              EN
            </button>
            <Link
              href="#booking"
              className="border border-white text-white text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-white hover:text-hotel-dark transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Захиалга өгөх
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

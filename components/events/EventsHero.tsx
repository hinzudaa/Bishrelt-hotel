import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["eventsPage"]["hero"];
  lang: string;
};

export default function EventsHero({ dict, lang }: Props) {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <Image
        src="/event/hero.jpg"
        alt="Event Halls"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.70) 0%, rgba(10,10,10,0.30) 50%, rgba(10,10,10,0.85) 100%)",
        }}
      />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-0 w-full">
          <p className="text-gold text-[13px] tracking-[0.35em] uppercase flex items-center gap-3 font-roboto-slab mb-5">
            <span className="w-8 h-px bg-gold inline-block" />
            {dict.tagline}
          </p>
          <h1 className="font-cormorant font-semibold leading-none mb-5">
            <span className="text-white italic text-[44px] md:text-[72px] block">{dict.titleGold}</span>
            <span className="text-white text-[44px] md:text-[72px] block">{dict.titleNormal}</span>
          </h1>
          <p className="text-white/70 text-[15px] max-w-md leading-relaxed">
            {dict.subtitle}
          </p>
          <div className="hidden sm:flex flex-row gap-3 mt-8">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-gold text-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold-dark transition-colors"
            >
              {dict.bookButton}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#halls"
              className="inline-flex items-center gap-3 bg-transparent text-[#FFFFFFD9] text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-[#FFFFFF33] transition-colors"
            >
              {dict.learnMore}
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 sm:hidden px-6 pb-10 flex flex-col gap-3">
        <Link
          href="#contact"
          className="flex items-center justify-center gap-3 bg-gold text-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold-dark transition-colors"
        >
          {dict.bookButton}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="#halls"
          className="flex items-center justify-center gap-3 bg-transparent text-[#FFFFFFD9] text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-[#FFFFFF33] transition-colors"
        >
          {dict.learnMore}
        </Link>
      </div>
    </section>
  );
}

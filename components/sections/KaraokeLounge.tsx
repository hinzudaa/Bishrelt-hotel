import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type KaraokeDict = Dictionary["karaoke"];

const featureIcons = [
  <svg key="1" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
  </svg>,
  <svg key="2" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="3" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 2v4M8 2v4M3 10h18" />
  </svg>,
  <svg key="4" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="5" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>,
  <svg key="6" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>,
];

export default function KaraokeLounge({ dict }: { dict: KaraokeDict }) {
  return (
    <section id="karaoke" className="bg-[#F0EBE0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 h-auto md:h-[800px]">
        <div className="relative h-[500px] md:h-full overflow-hidden order-2 md:order-1">
          <Image
            src="/karaoke/image.jpg"
            alt="Karaoke & Lounge"
            fill
            className="object-cover md:px-0 px-2 md:rounded-none rounded-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="pt-10 px-6 md:px-0 md:pt-[73px] md:pl-20 flex flex-col justify-between order-1 md:order-2 md:pb-0 pb-10">
          <div className="flex justify-between flex-col w-full h-auto md:h-[640px]">
            <p className="text-gold text-[16px] font-normal font-roboto-slab tracking-[0.2em] uppercase border-l-2 border-gold pl-3 mb-5">
              {dict.sectionLabel}
            </p>
            <h2 className="text-hotel-dark text-3xl md:text-[40px] font-cormorant italic font-semibold pb-[24px]">
              {dict.heading}
            </h2>
            <p className="text-hotel-charcoal/65 text-sm leading-relaxed mb-3">
              {dict.description1}
            </p>
            <p className="text-hotel-charcoal/65 text-sm leading-relaxed">
              {dict.description2}
            </p>

            <ul className="grid grid-cols-1 py-10 gap-y-3 mb-8">
              {dict.features.map((label, i) => (
                <li key={label} className="flex items-center gap-2 text-hotel-charcoal/70 text-sm">
                  <span className="text-gold shrink-0">{featureIcons[i]}</span>
                  {label}
                </li>
              ))}
            </ul>
            <div>
              <button className="border border-hotel-dark text-hotel-dark hover:bg-hotel-dark hover:text-white text-xs tracking-[0.2em] uppercase px-8 py-3 transition-colors flex items-center gap-3">
                {dict.learnMore}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type CtaDict = Dictionary["roomsPage"]["cta"];

export default function RoomsCTA({ dict }: { dict: CtaDict }) {
  return (
    <section className="bg-[#f0ebe0] pb-[21px]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-roboto-slab text-[10px] tracking-[0.4em] uppercase text-gold pb-6">
          {dict.label}
        </p>
        <h2 className="font-cormorant text-hotel-dark text-5xl md:text-[58px] leading-tight">
          {dict.heading1}
        </h2>
        <h2 className="font-cormorant italic text-gold text-5xl md:text-[58px] leading-tight mb-8">
          {dict.heading2}
        </h2>
        <p className="text-gray-500 text-[16px] leading-relaxed pb-10">
          {dict.description}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="#booking"
            className="bg-gold text-gray-900 text-[11px] tracking-[0.22em] uppercase px-8 py-3.5 hover:bg-gold-dark transition-colors inline-flex items-center gap-3"
          >
            {dict.bookButton}
          </Link>
          <Link
            href="#contact"
            className="border border-gray-500 text-gray-500 text-[11px] tracking-[0.22em] uppercase px-8 py-3.5 hover:bg-hotel-dark hover:text-white transition-colors inline-flex items-center"
          >
            {dict.contactButton}
          </Link>
        </div>
      </div>
    </section>
  );
}

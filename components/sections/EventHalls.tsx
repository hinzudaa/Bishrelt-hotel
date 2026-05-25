import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type EventsDict = Dictionary["events"];

export default function EventHalls({ dict }: { dict: EventsDict }) {
  return (
    <section id="events" className="relative overflow-hidden min-h-[500px] md:min-h-[800px]">
      <Image
        src="/event/image.png"
        alt="Event Hall"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-hotel-dark/65" />

      <div className="relative max-w-7xl mx-auto h-full min-h-0 md:min-h-[680px] flex flex-col justify-between pt-24 md:pt-[240px] px-6 md:px-0 pb-10 md:pb-0 gap-8 md:gap-0">
        <div className="max-w-[632px]">
          <p className="text-[#C9A961] text-[16px] font-normal font-roboto-slab tracking-[0.2em] uppercase border-l-2 border-gold pl-3 mb-5">
            {dict.sectionLabel}
          </p>
          <h2 className="text-white text-3xl md:text-[40px] mb-6 font-semibold leading-snug font-cormorant italic">
            {dict.heading}
          </h2>
          <p className="text-gray-100 font-normal text-[16px] leading-relaxed mb-10">
            {dict.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-43">
          {dict.halls.map((hall) => (
            <div key={hall.name} className="pl-4 border-l-2 border-gold">
              <p className="text-gold text-[16px] font-semibold tracking-[0.2em] uppercase mb-[2px]">
                {hall.type}
              </p>
              <h3 className="text-white text-[28px] font-cormorant font-bold leading-9 mb-[2px]">
                {hall.name}
              </h3>
              <p className="text-white text-[16px] font-roboto-slab font-light mt-[8px]">
                {hall.capacity}
              </p>
            </div>
          ))}
        </div>

        <div>
          <button className="border border-white text-white hover:bg-white hover:text-hotel-dark text-xs tracking-[0.2em] uppercase px-8 py-3 transition-colors inline-flex items-center gap-3">
            {dict.learnMore}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

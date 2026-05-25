import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type RestaurantDict = Dictionary["restaurant"];

const featureIcons = [
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
  </svg>,
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v1m6-1v1M5 8h14M5 8a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2M8 13h.01M12 13h.01M16 13h.01" />
  </svg>,
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M3 12h18M3 17h18" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 3v4M16 3v4" />
  </svg>,
];

export default function Restaurant({ dict }: { dict: RestaurantDict }) {
  return (
    <section id="restaurant" className="bg-[#F0EBE0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 h-auto md:h-[800px]">
        <div className="py-8 px-6 md:py-14 md:pr-20 md:pl-0 flex flex-col justify-center order-2 md:order-1">
          <p className="text-[#C9A961] font-normal text-[16px] font-roboto-slab tracking-[0.2em] uppercase border-l-2 border-gold pl-3 mb-5">
            {dict.sectionLabel}
          </p>
          <h2 className="text-hotel-dark text-3xl md:text-4xl mb-6 font-cormorant italic">
            {dict.heading}
          </h2>
          <p className="text-hotel-charcoal/65 text-sm leading-relaxed mb-10">
            {dict.description}
          </p>

          <ul className="space-y-6 mb-10">
            {dict.features.map((f, i) => (
              <li key={f.title} className="flex items-start gap-4">
                <span className="text-gold mt-0.5 shrink-0">{featureIcons[i]}</span>
                <div>
                  <p className="text-hotel-dark text-sm font-medium mb-0.5">{f.title}</p>
                  <p className="text-hotel-charcoal/55 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <button className="border border-hotel-dark text-hotel-dark hover:bg-hotel-dark hover:text-white text-xs tracking-[0.2em] uppercase px-8 py-3 transition-colors inline-flex items-center gap-3 self-start">
            {dict.learnMore}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="relative h-[500px] md:h-full overflow-hidden order-1 md:order-2">
          <Image
            src="/restaurant/image.jpg"
            alt="restaurant"
            fill
            className="object-cover transition-all duration-500 md:px-0 px-2 md:rounded-none rounded-2xl"
            sizes="(max-width: 768px) 100vw, 640px"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}

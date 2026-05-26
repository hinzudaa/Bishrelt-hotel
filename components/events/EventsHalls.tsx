import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["eventsPage"]["halls"];
};

export default function EventsHalls({ dict }: Props) {
  return (
    <section id="halls" className="py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="flex flex-col gap-16 md:gap-0">
          {dict.items.map((hall, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center`}
              >
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="relative h-[320px] md:h-[800px] overflow-hidden">
                    <Image
                      src={hall.image}
                      alt={hall.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className={isEven ? "lg:order-1 lg:pr-20" : "lg:order-2 lg:pl-20"}>
                  <p className="text-[16px] border-l-[3px] pl-2 font-roboto-slab font-normal tracking-[0.3em] uppercase text-gold mb-4 flex items-center gap-3">
                    {hall.tagline}
                  </p>
                  <h2 className="font-cormorant italic font-semibold text-black text-[36px] md:text-[40px] leading-tight mb-4">
                    {hall.name}
                  </h2>
                  <p className="text-gray-500 text-[16px] font-light leading-relaxed mb-8">
                    {hall.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 grid grid-cols-2">
                    {hall.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-3 font-normal text-gray-500 text-[14px]">
                        <span className="w-2 h-2 bg-gold inline-block rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="inline-flex cursor-pointer items-center gap-3 bg-transparent border border-gray-500 text-black text-[10px] tracking-[0.2em] hover:bg-gray-600 hover:text-white uppercase px-8 py-4 transition-colors">
                    {hall.button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

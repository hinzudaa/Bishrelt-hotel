import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["restaurantPage"]["about"];
};

export default function RestaurantAbout({ dict }: Props) {
  return (
    <section className="bg-[#f0ebe0] py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold inline-block" />
              {dict.label}
            </p>
            <h2 className="font-cormorant italic font-semibold text-black text-[28px] md:text-[40px] leading-tight mb-1">
              {dict.heading}
            </h2>
            <p className="font-cormorant italic text-gold text-[40px] mb-8">
              {dict.headingGold}
            </p>
            <div className="space-y-5">
              {dict.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-500 text-[15px] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-10 mt-12 pt-10 border-t border-gray-300">
              {dict.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-10">
                  <div className="text-center">
                    <p className="font-roboto-slab text-hotel-charcoal text-[32px] font-normal leading-none">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                  {i < dict.stats.length - 1 && (
                    <div className="w-px h-10 bg-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="relative h-[420px] lg:h-full min-h-[420px]">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/restaurant/image.jpg"
                  alt="Embassy Restaurant interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="absolute -bottom-6 left-[-24px] hidden lg:block w-[200px] h-[200px] overflow-hidden shadow-xl border-4 border-[#f0ebe0]">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
                  alt="Signature dish"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

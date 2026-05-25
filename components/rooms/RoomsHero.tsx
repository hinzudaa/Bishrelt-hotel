import Image from "next/image";
import { CATEGORIES, type Category } from "../../types/data";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type RoomsHeroDict = Dictionary["roomsPage"]["hero"];
type CategoryLabels = Dictionary["roomsPage"]["categories"];

type Props = {
  activeTab: Category;
  onTabChange: (tab: Category) => void;
  activePage: number;
  onPageChange: (page: number) => void;
  dict: RoomsHeroDict;
  categories: typeof CATEGORIES;
  categoryLabels: CategoryLabels;
  filterType: string;
  filterPrice: string;
  filterGuests: string;
};

export default function RoomsHero({
  activeTab,
  onTabChange,
  activePage,
  onPageChange,
  dict,
  categories,
  categoryLabels,
  filterType,
  filterPrice,
  filterGuests,
}: Props) {
  return (
    <section className="relative min-h-screen flex flex-col">
      <Image
        src="/rooms/image.jpg"
        alt={dict.titleNormal}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#0A0A0A]/75 via-[#0A0A0A]/30 to-[#0A0A0A]" />

      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 md:px-0 flex flex-col justify-center pt-20">
        <p className="text-gold text-[16px] tracking-[0.35em] uppercase flex items-center justify-start gap-3 font-normal font-roboto-slab">
          <span className="w-8 h-px bg-gold inline-block" />
          {dict.tagline}
        </p>
        <h1 className="font-cormorant italic text-5xl md:text-[72px] leading-tight mb-5 font-bold">
          <span className="text-gold">{dict.titleGold}</span>
          <span className="text-white">{dict.titleNormal}</span>
        </h1>
        <p className="text-white text-[16px] font-normal max-w-lg leading-relaxed">
          {dict.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t-2 bg-[#0A0A0A] border-[#FFFFFF1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-0 flex flex-col md:flex-row md:items-center md:justify-between py-4 md:py-6 gap-3 md:gap-6">

          <div className="flex items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase shrink-0">
              {filterType}
            </span>
            <div className="flex items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onTabChange(cat)}
                  className={`px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase transition-all border whitespace-nowrap ${
                    activeTab === cat
                      ? "border-gold text-gold"
                      : "border-white/20 text-white/40 hover:border-white/40 hover:text-white/70"
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase shrink-0">
              {filterPrice}
            </span>
            <button className="flex items-center gap-2 border border-white/20 text-white/40 text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 hover:border-white/40 hover:text-white/70 transition-all">
              DELUXE
              <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase shrink-0">
              {filterGuests}
            </span>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  onClick={() => onPageChange(n)}
                  className={`w-8 h-7 flex items-center justify-center text-[10px] tracking-wider border transition-all ${
                    activePage === n
                      ? "border-gold text-gold"
                      : "border-white/20 text-white/40 hover:border-white/40 hover:text-white/70"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

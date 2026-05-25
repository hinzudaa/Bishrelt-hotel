import Image from "next/image";
import { CATEGORIES, type Category } from "../../types/data";

type Props = {
  activeTab: Category;
  onTabChange: (tab: Category) => void;
  activePage: number;
  onPageChange: (page: number) => void;
};

export default function RoomsHero({ activeTab, onTabChange, activePage, onPageChange }: Props) {
  return (
    <section className="relative min-h-screen flex flex-col">
      <Image
        src="/rooms/image.jpg"
        alt="Манай Өрөөнүүд"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#0A0A0A]/75 via-[#0A0A0A]/30 to-[#0A0A0A]" />

      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 md:px-0 flex flex-col justify-center pt-20">
        <p className="text-gold text-[16px] tracking-[0.35em] uppercase flex items-center justify-start gap-3 font-normal font-roboto-slab ">
          <span className="w-8 h-px bg-gold inline-block" />
          Манай өрөөнүүд · Accommodation
        </p>
        <h1 className="font-cormorant italic text-5xl md:text-[72px] leading-tight mb-5 font-bold">
          <span className="text-gold"> Манай</span>
          <span className="text-white"> Өрөөнүүд</span>
        </h1>
        <p className="text-white text-[16px] font-normal max-w-lg leading-relaxed">
          Байрлахад тохиромжтой дөрвөн төрлийн өрөөний сонголттойг сонгоорой. Үүнд Deluxe King-ийн дулаан дотно өрөөнөөс эхлээд Bishrelt Suite-ийн эргэн тойрон дахь тагт хүртэл багтана.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t-2 bg-[#0A0A0A] border-[#FFFFFF1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-0 flex items-center justify-between py-6 gap-6">

          <div className="flex items-center gap-3">
            <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase shrink-0">ТӨРӨЛ</span>
            <div className="flex items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onTabChange(cat)}
                  className={`px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase transition-all border whitespace-nowrap ${
                    activeTab === cat
                      ? "border-gold text-gold"
                      : "border-white/20 text-white/40 hover:border-white/40 hover:text-white/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase shrink-0">ҮНЭ</span>
            <button className="flex items-center gap-2 border border-white/20 text-white/40 text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 hover:border-white/40 hover:text-white/70 transition-all">
              DELUXE
              <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase shrink-0">ЗОЧНЫ ТОО</span>
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

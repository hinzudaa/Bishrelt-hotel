import Image from "next/image";
import Link from "next/link";
import type { Room } from "../../types/data";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type CardDict = Dictionary["roomsPage"]["card"];
type GridDict = Dictionary["roomsPage"]["grid"];

type Props = {
  room: Room;
  lang: string;
  gridDict: GridDict;
  cardDict: CardDict;
};

export default function RoomCard({ room, lang, gridDict, cardDict }: Props) {
  const description = lang === "en" ? room.descriptionEn : room.description;

  return (
    <div className="bg-white group cursor-pointer flex flex-col">
      <div className="relative h-[330px] overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute bottom-0 left-0 px-3 py-1.5">
          <span className="text-white font-roboto-slab text-[32px] font-normal">
            {room.price}
          </span>
        </div>
        <div className="absolute top-5 right-5 bg-[#0A0A0A66] border-2 border-black px-3 py-1.5">
          <span className="text-white/75 text-[9px] tracking-[0.22em] uppercase">
            {room.type}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-black font-cormorant font-semibold text-[28px]">
          {room.name}
        </h3>
        <p className="text-gold text-[16px] font-cormorant italic font-normal tracking-wide">
          {room.subtitle}
        </p>
        <p className="text-gray-500 text-[14px] leading-relaxed font-normal pt-5 pb-[28px]">
          {description}
        </p>

        <div className="flex items-center gap-6 text-gray-400 text-[11px] border-t pt-5 border-gray-300">
          <span className="flex items-center gap-1.5 text-[14px] font-normal font-roboto-slab">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2M4 8h16M4 8v10a2 2 0 002 2h12a2 2 0 002-2V8" />
            </svg>
            {room.area}{gridDict.areaUnit}
          </span>
          <span className="flex items-center gap-1.5 text-[14px] font-normal font-roboto-slab">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {gridDict.guestsLabel} {room.guests}
          </span>
        </div>

        <div className="flex gap-2 mt-auto pt-6">
          <button className="flex-1 bg-gold text-gray-900 text-[10px] font-normal tracking-[0.18em] uppercase py-2.5 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2">
            {cardDict.book}
          </button>
          <Link
            href={`/${lang}/rooms/${room.id}`}
            className="flex-1 border border-gray-500 font-normal text-gray-500 text-[10px] tracking-[0.18em] uppercase py-2.5 hover:border-hotel-dark hover:text-hotel-dark transition-colors flex items-center justify-center"
          >
            {cardDict.details}
          </Link>
        </div>
      </div>
    </div>
  );
}

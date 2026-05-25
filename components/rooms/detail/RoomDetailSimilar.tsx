import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/types/data";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  rooms: Room[];
  lang: string;
  dict: Dictionary["roomDetail"];
};

export default function RoomDetailSimilar({ rooms, lang, dict }: Props) {
  if (rooms.length === 0) return null;

  return (
    <section className="pb-40">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-gold inline-block" />
          {dict.similarLabel}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rooms.map((room) => (
            <Link
              key={room.id}
              href={`/${lang}/rooms/${room.id}`}
              className="group block"
            >
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-gold text-[14px] font-normal uppercase">{room.type}</h3>
                    <h3 className="font-cormorant font-semibold text-white text-[24px] leading-tight">
                      {room.name}
                    </h3>
                    <p className="text-white/60 font-cormorant italic text-[14px] mt-0.5">
                      {room.subtitle}
                    </p>
                    <div className="flex flex-row gap-2">
                    <p className="font-roboto-slab text-gray-400 text-[12px] mt-1">{room.price}</p>
                    <p className="text-gray-400">·</p>
                    <p className="font-roboto-slab text-gray-400 text-[12px] mt-1">{room.area}m²</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

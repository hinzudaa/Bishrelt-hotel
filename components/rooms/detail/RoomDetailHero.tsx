import Image from "next/image";
import type { Room } from "@/types/data";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  room: Room;
  lang: string;
  dict: Dictionary["roomDetail"];
};

export default function RoomDetailHero({ room, lang, dict }: Props) {
  return (
    <section className="relative h-[70vh] min-h-screen w-full overflow-hidden">
      <Image
        src={room.image}
        alt={room.name}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.30) 50%, #0A0A0A 100%)",
        }}
      />
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-0">
          <div className="max-w-xl">
            <p className="text-gold text-[16px] tracking-[0.35em] uppercase flex items-center justify-start gap-3 font-normal font-roboto-slab">
              <span className="w-8 h-px bg-gold inline-block" />
              <span>Suite · 65m² · 3th–4th Floor</span>
            </p>
            <h1 className="font-cormorant font-semibold text-white text-[42px] md:text-[72px] leading-tight mb-2">
              {room.name}
            </h1>
            <p className="text-white font-normal text-[18px] mb-5">
              {room.subtitle}
            </p>
            <div className="flex items-center gap-6">
              <span className="font-roboto-slab text-gold text-[36px] font-normal">
                {room.price}
              </span>
            </div>
          </div>
          <div className="pt-6">
            <button className="flex-1 bg-gold text-gray-900 text-[10px] font-normal tracking-[0.18em] uppercase py-2.5 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 p-4">
              Өрөө захиалах
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Room } from "@/types/data";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import BookingWidget from "./BookingWidget";

type Props = {
  room: Room;
  description: string;
  paragraphs: string[];
  dict: Dictionary["roomDetail"];
};

export default function RoomDetailAbout({ room, paragraphs, dict }: Props) {
  return (
    <section className="bg-[#f0ebe0] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-gold inline-block" />
              {dict.aboutLabel}
            </p>
            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-gray-500 text-[16px] leading-relaxed font-normal">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex items-center md:justify-start justify-center gap-8 mt-10 pt-8 border-t border-gray-300">
              <div className="text-center">
                <p className="font-roboto-slab text-hotel-charcoal text-[22px]">{room.area}</p>
                <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-0.5">m²</p>
              </div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="text-center">
                <p className="font-roboto-slab text-hotel-charcoal text-[22px]">{room.guests}</p>
                <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-0.5">{dict.guests}</p>
              </div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="text-center">
                <p className="font-roboto-slab text-hotel-charcoal text-[22px]">{room.price}</p>
                <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-0.5">{dict.perNight}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <BookingWidget
              price={room.price}
              roomName={room.name}
              dict={dict}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

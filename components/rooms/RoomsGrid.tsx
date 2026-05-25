import type { Room } from "../../types/data";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import RoomCard from "./RoomCard";

type GridDict = Dictionary["roomsPage"]["grid"];
type CardDict = Dictionary["roomsPage"]["card"];

type Props = {
  rooms: Room[];
  lang: string;
  gridDict: GridDict;
  cardDict: CardDict;
};

export default function RoomsGrid({ rooms, lang, gridDict, cardDict }: Props) {
  const showingText = gridDict.showing
    .replace("{count}", String(rooms.length))
    .replace("{total}", String(rooms.length));

  return (
    <div className="bg-[#f0ebe0] py-12 md:py-25">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-3 flex items-center justify-between">
        <p className="text-gray-500 text-[10px] font-normal tracking-wide uppercase">
          {showingText}
        </p>
        <div className="hidden md:flex items-center gap-3 text-gray-500 text-[10px] tracking-widest uppercase">
          <span>{gridDict.allRooms}</span>
          <span className="text-hotel-charcoal/15">—</span>
          <span>{gridDict.perNight}</span>
          <span className="text-hotel-charcoal/15">—</span>
          <span>{gridDict.breakfast}</span>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-0">
          {rooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map((room) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  lang={lang}
                  gridDict={gridDict}
                  cardDict={cardDict}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-hotel-charcoal/40 text-sm">{gridDict.noRooms}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

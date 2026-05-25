import type { Room } from "./data";
import RoomCard from "./RoomCard";

export default function RoomsGrid({ rooms }: { rooms: Room[] }) {
  return (
    <div className="bg-[#f0ebe0] py-25">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-3 flex items-center justify-between">
        <p className="text-gray-500 text-[10px] font-normal tracking-wide uppercase">
          {rooms.length} өрөөнөөс {rooms.length} -г харуулж байна
        </p>
        <div className="hidden md:flex items-center gap-3 text-gray-500 text-[10px] tracking-widest uppercase">
          <span>БҮХ НЭР</span>
          <span className="text-hotel-charcoal/15">—</span>
          <span>НЭГ ШӨНИЙН ҮНЭ</span>
          <span className="text-hotel-charcoal/15">—</span>
          <span>ӨГЛӨӨНИЙ ЦАЙ БАГТСАН</span>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-0">
          {rooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-hotel-charcoal/40 text-sm">
                Энэ ангилалд өрөө байхгүй байна.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

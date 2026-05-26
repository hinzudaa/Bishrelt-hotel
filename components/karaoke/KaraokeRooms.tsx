import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["karaokePage"]["rooms"];
};

export default function KaraokeRooms({ dict }: Props) {
  return (
    <section id="rooms" className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-gold inline-block" />
          {dict.label}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.items.map((room, i) => (
            <div
              key={i}
              className="bg-white flex flex-col"
            >
              <div className="p-6">
                <div className=" border-b border-gray-100 pb-5">
                  <h3 className="font-cormorant font-semibold text-black text-[22px]">
                    {room.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400">
                    {room.capacity}
                  </p>
                </div>

                <div className="flex-1 pb-6">
                  <p className="text-gray-500 text-[14px] font-normal">
                    {room.desc}
                  </p>
                </div>

                <div className="flex-1 pb-5">
                  <ul className="space-y-3">
                    {room.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-3 text-gray-500 text-[14px] font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] tracking-[0.15em] uppercase text-gray-400 mb-0.5">
                      {dict.perHour}
                    </p>
                    <span className="font-roboto-slab text-gold text-[22px]">
                      {room.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

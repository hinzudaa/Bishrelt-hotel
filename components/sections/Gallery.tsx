"use client";

import Image from "next/image";

type SlideUnit = {
  p1: { src: string; alt: string };
  p2: { src: string; alt: string };
  p3: { src: string; alt: string };
  p4: { src: string; alt: string };
  p5: { src: string; alt: string };
  p6: { src: string; alt: string };
};

const slides: SlideUnit[] = [
  {
    p1: { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", alt: "Hotel grand lobby" },
    p2: { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", alt: "Elegant salon" },
    p3: { src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80", alt: "Ornate entrance" },
    p4: { src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80", alt: "Grand marble lobby" },
    p5: { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80", alt: "Lobby with orchids" },
    p6: { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80", alt: "Hotel interior" },
  },
  {
    p1: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Fine dining" },
    p2: { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80", alt: "Hotel corridor" },
    p3: { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", alt: "Hotel lounge" },
    p4: { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", alt: "Hotel pool lobby" },
    p5: { src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80", alt: "Luxury bedroom" },
    p6: { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Restaurant interior" },
  },
  {
    p1: { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80", alt: "Event hall" },
    p2: { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80", alt: "Suite view" },
    p3: { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", alt: "Grand hall" },
    p4: { src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80", alt: "Lobby entrance" },
    p5: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Dining room" },
    p6: { src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80", alt: "Ornate interior" },
  },
];

function LeftHalf({ unit }: { unit: SlideUnit }) {
  return (
    <div className="grid grid-cols-[340px_340px] grid-rows-[240px_240px] gap-2 shrink-0">
      <div className="relative overflow-hidden col-start-1 row-start-1">
        <Image src={unit.p1.src} alt={unit.p1.alt} fill className="object-cover" sizes="340px" />
      </div>
      <div className="relative overflow-hidden col-start-2 row-start-1">
        <Image src={unit.p2.src} alt={unit.p2.alt} fill className="object-cover" sizes="340px" />
      </div>
      <div className="relative overflow-hidden col-span-2 row-start-2">
        <Image src={unit.p3.src} alt={unit.p3.alt} fill className="object-cover" sizes="688px" />
      </div>
    </div>
  );
}

function RightHalf({ unit }: { unit: SlideUnit }) {
  return (
    <div className="grid grid-cols-[340px_340px] grid-rows-[240px_240px] gap-2 shrink-0">
      <div className="relative overflow-hidden col-span-2 row-start-1">
        <Image src={unit.p4.src} alt={unit.p4.alt} fill className="object-cover" sizes="688px" />
      </div>
      <div className="relative overflow-hidden col-start-1 row-start-2">
        <Image src={unit.p5.src} alt={unit.p5.alt} fill className="object-cover" sizes="340px" />
      </div>
      <div className="relative overflow-hidden col-start-2 row-start-2">
        <Image src={unit.p6.src} alt={unit.p6.alt} fill className="object-cover" sizes="340px" />
      </div>
    </div>
  );
}

export default function Gallery() {
  const allSlides = [...slides, ...slides];

  return (
    <section className="bg-[#F0EBE0] py-14 overflow-hidden">
      <div className="text-center mb-8 px-6">
        <h2 className="text-black text-2xl md:text-[28px] leading-snug font-semibold font-cormorant italic">
          1994 оноос хойш жинхэнэ Улаанбаатарын дэгжин байдал
        </h2>
        <div className="mt-4 mx-auto w-[346px] h-[2px] bg-[#C9A961]" />
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-4 w-[8448px] animate-gallery-marquee hover:[animation-play-state:paused]">
          {allSlides.flatMap((unit, i) => [
            <LeftHalf key={`l${i}`} unit={unit} />,
            <RightHalf key={`r${i}`} unit={unit} />,
          ])}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6">
        <p className="text-black text-[16px] leading-relaxed font-light ">
          Та ирсэн мөчөөс эхлэн хүрээлэн буй орчны зохицол, материалын тансаг байдал, нарийн ширийн зүйл бүрт илэрсэн гар урлалын гайхалтай чанарт сэтгэл татагдах болно.
        </p>
      </div>
    </section>
  );
}

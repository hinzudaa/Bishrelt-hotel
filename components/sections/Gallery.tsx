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

const CELL_W = 340;
const CELL_H = 240;
const GAP = 3;
const UNIT_W = CELL_W * 2 + GAP * 3 + CELL_W * 2;

function SlideUnitBlock({ unit }: { unit: SlideUnit }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `${CELL_W}px ${CELL_W}px ${CELL_W}px ${CELL_W}px`,
        gridTemplateRows: `${CELL_H}px ${CELL_H}px`,
        gap: `${GAP}px`,
        flexShrink: 0,
      }}
    >
      {/* Top-left: 2 photos side by side */}
      <div className="relative overflow-hidden" style={{ gridColumn: "1", gridRow: "1" }}>
        <Image src={unit.p1.src} alt={unit.p1.alt} fill className="object-cover" sizes="340px" />
      </div>
      <div className="relative overflow-hidden" style={{ gridColumn: "2", gridRow: "1" }}>
        <Image src={unit.p2.src} alt={unit.p2.alt} fill className="object-cover" sizes="340px" />
      </div>
      {/* Bottom-left: 1 wide photo spanning 2 cols */}
      <div className="relative overflow-hidden" style={{ gridColumn: "1 / 3", gridRow: "2" }}>
        <Image src={unit.p3.src} alt={unit.p3.alt} fill className="object-cover" sizes="683px" />
      </div>
      {/* Top-right: 1 wide photo spanning 2 cols */}
      <div className="relative overflow-hidden" style={{ gridColumn: "3 / 5", gridRow: "1" }}>
        <Image src={unit.p4.src} alt={unit.p4.alt} fill className="object-cover" sizes="683px" />
      </div>
      {/* Bottom-right: 2 photos side by side */}
      <div className="relative overflow-hidden" style={{ gridColumn: "3", gridRow: "2" }}>
        <Image src={unit.p5.src} alt={unit.p5.alt} fill className="object-cover" sizes="340px" />
      </div>
      <div className="relative overflow-hidden" style={{ gridColumn: "4", gridRow: "2" }}>
        <Image src={unit.p6.src} alt={unit.p6.alt} fill className="object-cover" sizes="340px" />
      </div>
    </div>
  );
}

export default function Gallery() {
  const allSlides = [...slides, ...slides];
  const trackWidth = slides.length * (UNIT_W + GAP);
  const duration = slides.length * 8;

  return (
    <section className="bg-hotel-cream py-14 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-8 px-6">
        <h2
          className="text-hotel-dark text-2xl md:text-3xl leading-snug"
          style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
        >
          1994 оноос хойш жинхэнэ Улаанбаатарын дэгжин байдал
        </h2>
        <div className="mt-4 mx-auto w-28 h-px bg-gold" />
      </div>

      {/* Marquee track */}
      <div className="overflow-hidden">
        <div
          style={{
            display: "flex",
            gap: `${GAP}px`,
            width: `${trackWidth * 2 + GAP}px`,
            animation: `gallery-slide ${duration}s linear infinite`,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")}
        >
          {allSlides.map((unit, i) => (
            <SlideUnitBlock key={i} unit={unit} />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="max-w-[1300px] mx-auto mt-6 px-10">
        <p className="text-hotel-charcoal/65 text-sm leading-relaxed max-w-2xl">
          Та ирсэн мөчөөс эхлэн хүрээлэн буй орчны зохицол, материалын тансаг
          байдал, нарийн ширийн зүйл бүрт илэрсэн гар урлалын гайхалтай чанарт
          сэтгэл татагдах болно.
        </p>
      </div>
    </section>
  );
}

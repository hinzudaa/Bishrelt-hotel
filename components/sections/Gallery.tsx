"use client";

import Image from "next/image";

type SlideUnit = {
  p1: { src: string; alt: string };
  p2: { src: string; alt: string };
  p3: { src: string; alt: string };
  p4: { src: string; alt: string };
  p5: { src: string; alt: string };
  p6: { src: string; alt: string };
  p7: { src: string; alt: string };
  p8: { src: string; alt: string };
  p9: { src:string;  alt:string};
};

const slides: SlideUnit[] = [
  {
    p1: { src: "/gallery/image9.png", alt: "Hotel grand lobby" },
    p2: { src: "/gallery/image1.jpg", alt: "Elegant salon" },
    p3: { src: "/gallery/image2.jpg", alt: "Ornate entrance" },
    p4: { src: "/gallery/image3.jpg", alt: "Grand marble lobby" },
    p5: { src: "/gallery/image4.jpg", alt: "Lobby with orchids" },
    p6: { src: "/gallery/image5.jpg", alt: "Hotel interior" },
    p7: { src: "/gallery/image6.jpg", alt: "Hotel interior" },
    p8: { src: "/gallery/image7.jpg", alt: "Hotel interior" },
    p9: { src: "/gallery/image8.jpg", alt: "Hotel interior" },
  },
];

function LeftHalf({ unit }: { unit: SlideUnit }) {
  return (
    <div className="grid grid-cols-[250px_250px] grid-rows-[240px_240px] gap-2 shrink-0">
      <div className="relative overflow-hidden col-start-1 row-start-1">
        <Image
          src={unit.p1.src}
          alt={unit.p1.alt}
          fill
          className="object-cover"
          sizes="250px"
        />
      </div>
      <div className="relative overflow-hidden col-start-2 row-start-1">
        <Image
          src={unit.p3.src}
          alt={unit.p3.alt}
          fill
          className="object-cover"
          sizes="250px"
        />
      </div>
      <div className="relative overflow-hidden col-span-2 row-start-2">
        <Image
          src={unit.p2.src}
          alt={unit.p2.alt}
          fill
          className="object-cover"
          sizes="500px"
        />
      </div>
    </div>
  );
}

function RightHalf({ unit }: { unit: SlideUnit }) {
  return (
    <div className="grid grid-cols-[250px_250px] grid-rows-[240px_240px] gap-2 shrink-0">
      <div className="relative overflow-hidden col-span-2 row-start-1">
        <Image
          src={unit.p6.src}
          alt={unit.p6.alt}
          fill
          className="object-cover"
          sizes="500px"
        />
      </div>
      <div className="relative overflow-hidden col-start-1 row-start-2">
        <Image
          src={unit.p5.src}
          alt={unit.p5.alt}
          fill
          className="object-cover"
          sizes="250px"
        />
      </div>
      <div className="relative overflow-hidden col-start-2 row-start-2">
        <Image
          src={unit.p4.src}
          alt={unit.p4.alt}
          fill
          className="object-cover"
          sizes="250px"
        />
      </div>
    </div>
  );
}
function MiddleHalf({ unit }: { unit: SlideUnit }) {
  return (
    <div className="grid grid-cols-[250px_250px] grid-rows-[240px_240px] gap-2 shrink-0">
      <div className="relative overflow-hidden col-span-2 row-start-1">
        <Image
          src={unit.p9.src}
          alt={unit.p9.alt}
          fill
          className="object-cover"
          sizes="500px"
        />
      </div>
      <div className="relative overflow-hidden col-start-1 row-start-2">
        <Image
          src={unit.p8.src}
          alt={unit.p8.alt}
          fill
          className="object-cover"
          sizes="250px"
        />
      </div>
      <div className="relative overflow-hidden col-start-2 row-start-2">
        <Image
          src={unit.p7.src}
          alt={unit.p7.alt}
          fill
          className="object-cover"
          sizes="250px"
        />
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
        <div className="mt-4 mx-auto w-full max-w-[346px] h-[2px] bg-[#C9A961]" />
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-4 w-[3144px] animate-gallery-marquee hover:[animation-play-state:paused]">
          {allSlides.flatMap((unit, i) => [
            <LeftHalf key={`l${i}`} unit={unit} />,
            <MiddleHalf key={`m${i}`} unit={unit} />,
            <RightHalf key={`r${i}`} unit={unit} />,
          ])}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 px-6 md:px-0">
        <p className="text-black text-[16px] leading-relaxed font-light  text-center">
          Та ирсэн мөчөөс эхлэн хүрээлэн буй орчны зохицол, материалын тансаг
          байдал, нарийн ширийн зүйл бүрт илэрсэн гар урлалын гайхалтай чанарт
          сэтгэл татагдах болно.
        </p>
      </div>
    </section>
  );
}

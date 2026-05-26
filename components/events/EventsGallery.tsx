import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["eventsPage"]["gallery"];
};

const galleryImages = [
  { src: "/event/gallery1.jpg", alt: "Crystal Ballroom setup" },
  { src: "/event/gallery2.jpg", alt: "Royal Hall decoration" },
  { src: "/event/gallery3.jpg", alt: "Wedding reception" },
  { src: "/event/gallery4.jpg", alt: "Conference setup" },
  { src: "/event/gallery5.jpg", alt: "Gala dinner" },
  { src: "/event/gallery6.jpg", alt: "Banquet hall" },
];

export default function EventsGallery({ dict }: Props) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <p className="text-[10px] font-normal tracking-[0.25em] uppercase text-gold mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-gold inline-block" />
          {dict.label}
        </p>

        <div className="grid grid-cols-2 gap-3 md:auto-rows-[280px] mb-3">
          <div className="relative overflow-hidden group col-span-2 h-[260px] md:col-span-1 md:row-span-2 md:h-full">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="relative overflow-hidden group col-span-1 h-[170px] md:h-full">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 50vw"
            />
          </div>

          <div className="relative overflow-hidden group col-span-1 h-[170px] md:h-full">
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 h-[160px] md:h-[220px]">
          {galleryImages.slice(3).map((img, i) => (
            <div key={i} className="relative overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

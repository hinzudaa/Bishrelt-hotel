import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["karaokePage"]["gallery"];
};

const galleryImages = [
  { src: "/karaoke/gallery1.jpg", alt: "Karaoke lounge interior" },
  { src: "/karaoke/gallery2.jpg", alt: "VIP karaoke room" },
  { src: "/karaoke/gallery3.jpg", alt: "Private room setup" },
  { src: "/karaoke/gallery4.jpg", alt: "Stage lighting" },
  { src: "/karaoke/gallery5.jpg", alt: "Bar area" },
  { src: "/karaoke/gallery6.jpg", alt: "Group entertainment" },
];

export default function KaraokeGallery({ dict }: Props) {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-gold inline-block" />
          {dict.label}
        </p>

        <div className="md:hidden mb-3">
          <div className="relative w-full h-[260px] overflow-hidden mb-3">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.slice(1).map((img, i) => (
              <div key={i} className="relative h-[140px] overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-3 auto-rows-[280px] mb-3">
            <div className="relative overflow-hidden group row-span-2">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute bottom-0 right-1 p-6 opacity-100 transition-opacity">
                <span className="text-white text-[10px] tracking-[0.2em] uppercase border cursor-pointer border-white/60 px-5 py-2.5">
                  {dict.viewAll}
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="50vw"
              />
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 h-[220px]">
            {galleryImages.slice(3).map((img, i) => (
              <div key={i} className="relative overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

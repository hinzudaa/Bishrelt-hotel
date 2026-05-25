import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["restaurantPage"]["gallery"];
};

const galleryImages = [
  { src: "/restaurant/image.jpg", alt: "Embassy Restaurant main hall" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Fine dining setup" },
  { src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80", alt: "Chef preparation" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "Signature dishes" },
  { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Restaurant interior" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Wine cellar" },
];

export default function RestaurantGallery({ dict }: Props) {
  return (
    <section className="py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-gold inline-block" />
          {dict.label}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:auto-rows-[200px]">
          <div className="relative overflow-hidden group col-span-2 h-[550px] md:col-span-1 md:row-span-2 md:h-full">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative overflow-hidden group col-span-1 h-[150px] md:col-span-2 md:h-full">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 67vw"
            />
          </div>

          <div className="relative overflow-hidden group col-span-1 h-[150px] md:col-span-2 md:h-full">
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 67vw"
            />
          </div>

          {galleryImages.slice(3).map((img, i, arr) => (
            <div
              key={i}
              className={`relative overflow-hidden group h-[150px] md:h-full ${
                i === arr.length - 1 && arr.length % 2 !== 0
                  ? "col-span-2 md:col-span-1"
                  : "col-span-1"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

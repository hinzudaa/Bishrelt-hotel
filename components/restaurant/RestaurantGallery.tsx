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

        <div className="md:hidden">
          <div className="relative w-full h-[260px] overflow-hidden mb-3">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-gold mt-6 mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gold inline-block" />
            {dict.label}
          </p>
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
          <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-10 flex items-center gap-3">
            <span className="w-8 h-px bg-gold inline-block" />
            {dict.label}
          </p>

          <div className="grid grid-cols-2 gap-3 auto-rows-[280px] mb-3">
            <div className="relative overflow-hidden group row-span-2">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="50vw"
              />
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

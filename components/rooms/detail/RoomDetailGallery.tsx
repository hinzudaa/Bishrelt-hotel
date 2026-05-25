import Image from "next/image";
import type { Room } from "@/types/data";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  room: Room;
  dict: Dictionary["roomDetail"];
};

export default function RoomDetailGallery({ room, dict }: Props) {
  const images = [room.image, ...room.galleryImages].slice(0, 7);

  return (
    <section className="bg-[#f0ebe0] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-gold inline-block" />
          {dict.galleryLabel}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {images[0] && (
              <div className="row-span-2 relative h-full min-h-[420px] overflow-hidden group">
                <Image
                  src={images[0]}
                  alt={`${room.name} gallery 1`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            )}
            {images[1] && (
              <div className="relative h-[200px] overflow-hidden group">
                <Image
                  src={images[1]}
                  alt={`${room.name} gallery 2`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            )}
            {images[2] && (
              <div className="relative h-[200px] overflow-hidden group">
                <Image
                  src={images[2]}
                  alt={`${room.name} gallery 3`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            )}
            {images[3] && (
              <div className="relative h-[200px] overflow-hidden group">
                <Image
                  src={images[3]}
                  alt={`${room.name} gallery 4`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            )}
            {images[4] && (
              <div className="relative h-[200px] overflow-hidden group">
                <Image
                  src={images[4]}
                  alt={`${room.name} gallery 5`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

const rooms = [
  {
    name: "Deluxe King Room",
    description:
      "Deluxe King Room нь тав тух, орчин үеийн шийдлийг төгс хослуулсан өрөө бөгөөд аялагч, бизнесийн зочдод зориулсан хамгийн тохиромжтой сонголт юм. Уужим талбай, зөөлөн гэрэлтүүлэг, минимал тансаг интерьер нь таныг тайвшруулж, амралтыг илүү үнэ цэнтэй болгоно. King size ор нь дээд зэргийн матрас, зөөлөн даавуугаар бүрдсэн тул гүн нойр авч, бүрэн амрах боломжийг бүрдүүлнэ.",
    features: ["King-Size Bed", "City View", "Private Jacuzzi", "Flat-Screen TV", "Mini Bar", "Free High-Speed WiFi"],
    price: "₮250,000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
  },
  {
    name: "Junior Suite",
    description:
      "Junior Suite нь тусдаа зочны өрөө болон нойрны өрөөтэй, тансаг зэрэглэлийн тохилог байрлалтай. Хотын панорама дүр зураасыг эдлэн жаргана уу. Өргөн уудам орон зай нь танд бүрэн тайван, амгалан амралт авах боломж олгоно.",
    features: ["King-Size Bed", "City View", "Luxury Bathroom", "Flat-Screen TV", "Mini Bar", "Free High-Speed WiFi"],
    price: "₮380,000",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80",
  },
  {
    name: "Executive Suite",
    description:
      "Executive Suite нь бизнесийн зочдод зориулагдсан тусгай хурлын өрөөтэй, хувийн тогооч үйлчилгээтэй тансаг зэрэглэлийн сюит. Хотын панорама харагдах уудам цонхтой, орчин үеийн тоног төхөөрөмжөөр тоноглогдсон.",
    features: ["King-Size Bed", "Panorama View", "Private Jacuzzi", "Home Cinema", "Full Kitchen", "Free High-Speed WiFi"],
    price: "₮550,000",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
  },
  {
    name: "Presidential Suite",
    description:
      "Манай хамгийн тансаг Presidential Suite нь гүйцэтгэх захирлуудад зориулагдсан. Тусдаа хурлын өрөө, хувийн тогооч үйлчилгээтэй, хотын дээд давхрын тансаг орон зайд байрлана.",
    features: ["King-Size Bed", "Panorama View", "Private Jacuzzi", "Home Cinema", "Private Kitchen", "Butler Service"],
    price: "₮850,000",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
  },
];

export default function Rooms() {
  const [current, setCurrent] = useState(0);
  const room = rooms[current];

  return (
    <section id="rooms" className="bg-hotel-cream">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative h-[500px] md:h-[620px] overflow-hidden">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover transition-all duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="bg-hotel-cream px-12 py-14 md:h-[620px] flex flex-col justify-between">
          <div>
            {/* Section label */}
            <p className="text-gold text-xs tracking-[0.2em] uppercase border-l-2 border-gold pl-3 mb-5">
              Rooms &amp; Suits
            </p>
            <h2
              className="text-hotel-dark text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
            >
              {room.name}
            </h2>
            <p className="text-hotel-charcoal/65 text-sm leading-relaxed mb-8">
              {room.description}
            </p>

            {/* Features */}
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
              {room.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-hotel-charcoal/70 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Price */}
            <p
              className="text-gold text-2xl font-semibold mb-7"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {room.price}
            </p>

            <button className="border border-hotel-dark text-hotel-dark hover:bg-hotel-dark hover:text-white text-xs tracking-[0.2em] uppercase px-8 py-3 transition-colors flex items-center gap-3">
              Дэлгэрэнгүй унших
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-hotel-charcoal/15">
            <button
              onClick={() => setCurrent((c) => (c - 1 + rooms.length) % rooms.length)}
              className="flex items-center gap-2 text-hotel-charcoal/50 hover:text-gold text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Өмнөх
            </button>

            <div className="flex gap-2">
              {rooms.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-0.5 transition-all ${
                    i === current
                      ? "w-6 bg-gold"
                      : "w-3 bg-hotel-charcoal/25 hover:bg-hotel-charcoal/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrent((c) => (c + 1) % rooms.length)}
              className="flex items-center gap-2 text-hotel-charcoal/50 hover:text-gold text-sm transition-colors"
            >
              Дараах
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

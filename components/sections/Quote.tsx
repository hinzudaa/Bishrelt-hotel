"use client";

import { useState } from "react";

const quotes = [
  {
    text: "Орчин нь цэвэрхэн, ор нь тухтай, үйлчилгээ нь найрсаг байсан. Өглөөний цай дажгүй, ер нь тав тухтай, дахин ирэхэд асуудалгүй газар байна.",
    author: "Б.Бат-Ерөөлт",
    source: "Restaurant",
  },
  {
    text: "Bishrelt Hotel-ийн үйлчилгээ үнэхээр гайхалтай байсан. Өрөөний тохилог байдал, тогооч нарын гайхалтай хоол, ажилчдын халуун дотно хандлага бүгд төгс байлаа.",
    author: "Д.Оюунбаатар",
    source: "Rooms & Suits",
  },
  {
    text: "Хурлын танхим маш сайхан тоноглогдсон байсан. Техник тоноглол бүрэн, ажилтнууд мэргэжлийн түвшинд туслаж байлаа. Дараагийн удаа ч энд ирнэ.",
    author: "Г.Болд-Эрдэнэ",
    source: "Event Halls",
  },
  {
    text: "Karaoke & Lounge нь миний хамгийн дуртай зугаалах газар болсон. Дуунд сан асар том, VIP өрөөнүүд маш тухтай, үйлчилгээ шуурхай.",
    author: "Н.Сарантуяа",
    source: "Karaoke & Lounge",
  },
  {
    text: "Embassy Restaurant-д идсэн хоол амттай, танилцуулга сайхан байсан. Орчны зохицол, гэрэлтүүлэг бүгд нийлж тансаг орчин бүтээжээ.",
    author: "Э.Мөнхбат",
    source: "Restaurant",
  },
];

export default function Quote() {
  const [current, setCurrent] = useState(0);
  const q = quotes[current];

  return (
    <section className="bg-hotel-cream py-24 px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Source label */}
        <p className="text-gold text-xs tracking-[0.35em] uppercase mb-10 flex items-center justify-center gap-3">
          <span className="w-6 h-px bg-gold inline-block" />
          {q.source}
          <span className="w-6 h-px bg-gold inline-block" />
        </p>

        {/* Quote */}
        <blockquote
          className="text-hotel-dark text-lg md:text-xl leading-relaxed mb-8"
          style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
        >
          {q.text}
        </blockquote>

        {/* Author */}
        <cite className="text-hotel-charcoal/60 text-sm not-italic tracking-wider">
          {q.author}
        </cite>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current
                  ? "w-5 h-1.5 bg-gold"
                  : "w-1.5 h-1.5 bg-hotel-charcoal/25 hover:bg-hotel-charcoal/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

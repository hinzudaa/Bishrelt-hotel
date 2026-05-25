"use client";

import { useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type QuotesDict = Dictionary["quotes"];

export default function Quote({ dict }: { dict: QuotesDict }) {
  const [current, setCurrent] = useState(0);
  const q = dict[current];

  return (
    <section className="bg-[#F0EBE0] py-24">
      <div className="max-w-[754px] mx-auto text-center px-8">
        <p className="text-[#C9A961] text-[16px] tracking-[0.35em] uppercase mb-10 flex items-center justify-center gap-3 font-normal font-roboto-slab">
          <span className="w-6 h-px bg-[#C9A961] inline-block" />
          {q.source}
          <span className="w-6 h-px bg-gold inline-block" />
        </p>

        <blockquote className="text-black text-lg md:text-[24px] leading-relaxed mb-8 font-cormorant italic font-semibold">
          {q.text}
        </blockquote>

        <cite className="text-black text-[24px] tracking-wider font-cormorant font-semibold">
          {q.author}
        </cite>

        <div className="flex items-center justify-center gap-2 mt-8">
          {dict.map((_, i) => (
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

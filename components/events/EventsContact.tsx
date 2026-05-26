"use client";

import { useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["eventsPage"]["contact"];
};

export default function EventsContact({ dict }: Props) {
  const [guests, setGuests] = useState(50);

  return (
    <section id="contact" className="py-14 md:py-25">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-normal tracking-[0.25em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold inline-block" />
              {dict.label}
            </p>
            <div className="flex flex-col max-w-2xl gap-6 mb-4">
              <h2 className="font-cormorant italic font-semibold text-black text-[36px] md:text-[40px] leading-tight">
                {dict.heading}
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-3">{dict.desc1}</p>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p className="text-gray-500 text-[15px] leading-relaxed border-l-4 pl-3 border-gold">{dict.desc2}</p>
                <p className="text-gray-500 text-[12px] leading-relaxed border-l-4 pl-3 border-gold">{dict.desc2_1}</p>
              </div>
              <div>
                <p className="text-gray-500 text-[15px] leading-relaxed border-l-4 pl-3 border-gold">{dict.desc3}</p>
                <p className="text-gray-500 text-[12px] leading-relaxed border-l-4 pl-3 border-gold">{dict.desc2_1}</p>
              </div>
              <div>
                <p className="text-gray-500 text-[15px] leading-relaxed border-l-4 pl-3 border-gold">{dict.desc4}</p>
                <p className="text-gray-500 text-[12px] leading-relaxed border-l-4 pl-3 border-gold">{dict.desc2_1}</p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-1 bg-white p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
                  {dict.eventType}
                </label>
                <select className="w-full border border-gray-200 bg-white px-3 py-2.5 text-[13px] text-hotel-charcoal focus:outline-none focus:border-hotel-charcoal">
                  <option>Wedding / Хурим</option>
                  <option>Corporate / Корпорацийн</option>
                  <option>Gala / Гала</option>
                  <option>Birthday / Төрсөн өдөр</option>
                  <option>Conference / Хурал</option>
                  <option>Other / Бусад</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
                    {dict.date}
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 bg-white px-3 py-2.5 text-[13px] text-hotel-charcoal focus:outline-none focus:border-hotel-charcoal"
                  />
                </div>

                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
                    {dict.guests}
                  </label>
                  <div className="flex items-center border border-gray-200 bg-white">
                    <button
                      onClick={() => setGuests(Math.max(10, guests - 10))}
                      className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-lg"
                    >
                      −
                    </button>
                    <span className="flex-1 text-center text-[13px] text-hotel-charcoal">{guests}</span>
                    <button
                      onClick={() => setGuests(Math.min(500, guests + 10))}
                      className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
                  {dict.name}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 bg-white px-3 py-2.5 text-[13px] text-hotel-charcoal focus:outline-none focus:border-hotel-charcoal"
                />
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
                  {dict.phone}
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-200 bg-white px-3 py-2.5 text-[13px] text-hotel-charcoal focus:outline-none focus:border-hotel-charcoal"
                />
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
                  {dict.message}
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-200 bg-white px-3 py-2.5 text-[13px] text-hotel-charcoal focus:outline-none focus:border-hotel-charcoal resize-none"
                />
              </div>

              <button className="w-full bg-gold text-black text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 mt-2">
                {dict.submitButton}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

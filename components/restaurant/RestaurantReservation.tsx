"use client";

import { useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["restaurantPage"]["reservation"];
};

export default function RestaurantReservation({ dict }: Props) {
  const [guests, setGuests] = useState(2);

  return (
    <section id="reservation" className="bg-[#f0ebe0] py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold inline-block" />
              {dict.label}
            </p>
            <h2 className="font-cormorant font-semibold text-hotel-charcoal text-[36px] md:text-[42px] leading-tight mb-1">
              {dict.heading}
            </h2>
            <p className="font-cormorant italic text-gold text-[28px] mb-6">
              {dict.headingGold}
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-3">{dict.desc1}</p>
            <p className="text-gray-500 text-[15px] leading-relaxed">{dict.desc2}</p>
          </div>

          <div className="lg:col-span-1 bg-white p-8">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
                    {dict.date}
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 px-3 py-2.5 text-[13px] text-hotel-charcoal focus:outline-none focus:border-hotel-charcoal"
                  />
                </div>
                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
                    {dict.time}
                  </label>
                  <select className="w-full border border-gray-200 px-3 py-2.5 text-[13px] text-hotel-charcoal focus:outline-none focus:border-hotel-charcoal bg-white">
                    <option>07:00</option>
                    <option>08:00</option>
                    <option>09:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
                  {dict.guests}
                </label>
                <div className="flex items-center border border-gray-200">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-lg"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center text-[13px] text-hotel-charcoal">{guests}</span>
                  <button
                    onClick={() => setGuests(Math.min(20, guests + 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
                  {dict.name}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 px-3 py-2.5 text-[13px] text-hotel-charcoal focus:outline-none focus:border-hotel-charcoal"
                />
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
                  {dict.phone}
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-200 px-3 py-2.5 text-[13px] text-hotel-charcoal focus:outline-none focus:border-hotel-charcoal"
                />
              </div>

              <button className="w-full bg-gold text-black text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 mt-2">
                {dict.bookButton}
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

"use client";

import { useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  price: string;
  roomName: string;
  dict: Dictionary["roomDetail"];
};

export default function BookingWidget({ price, roomName, dict }: Props) {
  const [guests, setGuests] = useState(1);

  return (
    <div className="bg-white border border-gray-200 p-8 sticky top-24">
      <p className="font-roboto-slab text-[32px] text-gold font-normal mb-1">
        {price}
      </p>
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
            {dict.checkIn}
          </label>
          <input
            type="date"
            className="w-full border border-gray-200 px-3 py-2.5 text-[13px] text-hotel-charcoal focus:outline-none focus:border-hotel-charcoal"
          />
        </div>
        <div>
          <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
            {dict.checkOut}
          </label>
          <input
            type="date"
            className="w-full border border-gray-200 px-3 py-2.5 text-[13px] text-hotel-charcoal focus:outline-none focus:border-hotel-charcoal"
          />
        </div>
        <div>
          <label className="block text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-1.5">
            {dict.roomType}
          </label>
          <div className="border border-gray-200 px-3 py-2.5 text-[13px] text-hotel-charcoal">
            {roomName}
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
            <span className="flex-1 text-center text-[13px] text-hotel-charcoal">
              {guests}
            </span>
            <button
              onClick={() => setGuests(Math.min(6, guests + 1))}
              className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button className="w-full bg-gold text-black text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2">
        {dict.bookNow}
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      <p className="text-gray-400 text-[10px] text-center mt-4 leading-relaxed">
        {dict.bookingNote}
      </p>
    </div>
  );
}

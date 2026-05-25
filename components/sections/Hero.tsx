"use client";

import { useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type HeroDict = Dictionary["hero"];

const roomTypes = [
  "Deluxe Suite",
  "Deluxe King Room",
  "Deluxe Twin Room",
  "Junior Suite",
  "Executive Suite",
  "Presidential Suite",
];

export default function Hero({ dict }: { dict: HeroDict }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [room, setRoom] = useState(roomTypes[0]);
  const [guests, setGuests] = useState("1");

  return (
    <section id="home" className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover object-top"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-linear-to-b from-hotel-dark/60 via-hotel-dark/30 to-hotel-dark/70" />

      <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col px-6 md:px-0">
        <div className="flex-1 flex flex-col justify-center pt-20">
          <h1 className="text-white font-cormorant italic text-[42px] md:text-[72px] font-bold leading-tight md:leading-20 tracking-tight md:tracking-[-1.8px]">
            <span className="text-gold">{dict.line1Gold}</span>
            {dict.line1Normal}
            <br />
            {dict.line2Normal}
            <span className="text-gold">{dict.line2Gold}</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-md leading-relaxed mt-6">
            {dict.description}
          </p>
        </div>

        <div id="booking" className="pb-10">
          <div className="bg-[#00000080] px-2 py-6">
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex flex-col gap-1.5 flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-white/15">
                <label className="text-gold text-[9px] tracking-[0.35em] uppercase">
                  {dict.checkIn}
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-white text-sm py-1 focus:outline-none placeholder:text-white/30 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5 flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-white/15">
                <label className="text-gold text-[9px] tracking-[0.35em] uppercase">
                  {dict.checkOut}
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-white text-sm py-1 focus:outline-none placeholder:text-white/30 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5 flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-white/15">
                <label className="text-gold text-[9px] tracking-[0.35em] uppercase">
                  {dict.room}
                </label>
                <select
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="bg-transparent text-white text-sm py-1 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  {roomTypes.map((r) => (
                    <option key={r} value={r} className="bg-hotel-dark text-white">
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5 flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-white/15">
                <label className="text-gold text-[9px] tracking-[0.35em] uppercase">
                  {dict.guests}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent text-white text-sm py-1 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  {["1", "2", "3", "4", "5", "6"].map((n) => (
                    <option key={n} value={n} className="bg-hotel-dark text-white">
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <button className="bg-[#C9A961] cursor-pointer hover:bg-[#d0ab54] text-white text-xs tracking-[0.25em] uppercase px-10 py-5 transition-colors shrink-0 flex items-center gap-3">
                {dict.bookRoom}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

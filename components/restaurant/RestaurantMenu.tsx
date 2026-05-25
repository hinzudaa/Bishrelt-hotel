"use client";

import { useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary["restaurantPage"]["menu"];
};

export default function RestaurantMenu({ dict }: Props) {
  const tabs = Object.keys(dict.items) as Array<keyof typeof dict.items>;
  const [activeTab, setActiveTab] = useState<keyof typeof dict.items>(tabs[0]);

  return (
    <section id="menu" className="bg-[#f0ebe0] py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-14">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-gold inline-block" />
              {dict.label}
            </p>
            <div className="flex flex-row gap-4 justify-center items-center">
            <h2 className="font-cormorant italic font-semibold text-black text-[40px] leading-tight">
              {dict.heading}
            </h2>
            <p className="font-cormorant  italic font-semibold text-gold text-[40px] leading-tight">
              {dict.headingGold}
            </p>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-[10px] tracking-[0.2em] uppercase whitespace-nowrap border transition-all ${
                  activeTab === tab
                    ? "bg-gold border-gold text-black"
                    : "border-gray-300 text-gray-500 hover:border-gold/50 hover:text-hotel-charcoal"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-0">
          {dict.items[activeTab].map((item, i, arr) => {
            const isLastRow = i >= arr.length - 2;
            return (
            <div
              key={i}
              className={`flex items-start justify-between gap-6 py-6 border-b border-gray-300 last:border-b-0 ${
                isLastRow ? "md:border-b-0" : ""
              } ${
                i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:border-l md:border-gray-300"
              }`}
            >
              <div className="flex-1">
                <h4 className="font-cormorant font-normal text-gray-900 text-[16px] mb-1">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
              <span className="font-roboto-slab text-gold text-[15px] shrink-0 pt-0.5">
                {item.price}
              </span>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

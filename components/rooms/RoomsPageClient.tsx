"use client";

import { useState } from "react";
import { roomsData, CATEGORIES, type Category } from "@/types/data";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import RoomsHero from "@/components/rooms/RoomsHero";
import RoomsGrid from "@/components/rooms/RoomsGrid";
import RoomsCTA from "@/components/rooms/RoomsCTA";

type RoomsPageDict = Dictionary["roomsPage"];

type Props = {
  lang: string;
  dict: RoomsPageDict;
};

export default function RoomsPageClient({ lang, dict }: Props) {
  const [activeTab, setActiveTab] = useState<Category>("ALL");
  const [activePage, setActivePage] = useState(1);

  const filtered =
    activeTab === "ALL"
      ? roomsData
      : roomsData.filter((r) => r.type === activeTab);

  return (
    <>
      <RoomsHero
        activeTab={activeTab}
        onTabChange={setActiveTab}
        activePage={activePage}
        onPageChange={setActivePage}
        dict={dict.hero}
        categories={CATEGORIES}
        categoryLabels={dict.categories}
        filterType={dict.filterType}
        filterPrice={dict.filterPrice}
        filterGuests={dict.filterGuests}
      />
      <RoomsGrid
        rooms={filtered}
        lang={lang}
        gridDict={dict.grid}
        cardDict={dict.card}
      />
      <RoomsCTA dict={dict.cta} />
    </>
  );
}

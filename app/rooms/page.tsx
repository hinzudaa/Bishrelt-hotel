"use client";

import { useState } from "react";
import { roomsData, type Category } from "@/components/rooms/data";
import RoomsHero from "@/components/rooms/RoomsHero";
import RoomsGrid from "@/components/rooms/RoomsGrid";
import RoomsCTA from "@/components/rooms/RoomsCTA";

export default function RoomsPage() {
  const [activeTab, setActiveTab] = useState<Category>("БҮГД");
  const [activePage, setActivePage] = useState(1);

  const filtered =
    activeTab === "БҮГД" ? roomsData : roomsData.filter((r) => r.type === activeTab);

  return (
    <>
      <RoomsHero
        activeTab={activeTab}
        onTabChange={setActiveTab}
        activePage={activePage}
        onPageChange={setActivePage}
      />
      <RoomsGrid rooms={filtered} />
      <RoomsCTA />
    </>
  );
}

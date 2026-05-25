import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import Rooms from "@/components/sections/Rooms";
import Restaurant from "@/components/sections/Restaurant";
import EventHalls from "@/components/sections/EventHalls";
import KaraokeLounge from "@/components/sections/KaraokeLounge";
import Quote from "@/components/sections/Quote";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Gallery />
        <Rooms />
        <Restaurant />
        <EventHalls />
        <KaraokeLounge />
        <Quote />
      </main>
    </>
  );
}

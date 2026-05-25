import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import Rooms from "@/components/sections/Rooms";
import Restaurant from "@/components/sections/Restaurant";
import EventHalls from "@/components/sections/EventHalls";
import KaraokeLounge from "@/components/sections/KaraokeLounge";
import Quote from "@/components/sections/Quote";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Hero dict={dict.hero} />
      <Gallery dict={dict.gallery} />
      <Rooms dict={dict.homeRooms} />
      <Restaurant dict={dict.restaurant} />
      <EventHalls dict={dict.events} />
      <KaraokeLounge dict={dict.karaoke} />
      <Quote dict={dict.quotes} />
    </>
  );
}

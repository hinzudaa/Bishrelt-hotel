import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import EventsHero from "@/components/events/EventsHero";
import EventsStats from "@/components/events/EventsStats";
import EventsHalls from "@/components/events/EventsHalls";
import EventsGallery from "@/components/events/EventsGallery";
import EventsContact from "@/components/events/EventsContact";

type Props = { params: Promise<{ lang: string }> };

export default async function EventHallsPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const d = dict.eventsPage;

  return (
    <>
      <EventsHero dict={d.hero} lang={lang} />
      <EventsStats dict={d.stats} />
      <EventsHalls dict={d.halls} />
      <EventsGallery dict={d.gallery} />
      <EventsContact dict={d.contact} />
    </>
  );
}

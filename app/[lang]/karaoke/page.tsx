import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import KaraokeHero from "@/components/karaoke/KaraokeHero";
import KaraokeFeatures from "@/components/karaoke/KaraokeFeatures";
import KaraokeGallery from "@/components/karaoke/KaraokeGallery";
import KaraokeRooms from "@/components/karaoke/KaraokeRooms";

type Props = { params: Promise<{ lang: string }> };

export default async function KaraokePage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const d = dict.karaokePage;

  return (
    <>
      <KaraokeHero dict={d.hero} lang={lang} />
      <KaraokeFeatures dict={d.features} />
      <KaraokeGallery dict={d.gallery} />
      <KaraokeRooms dict={d.rooms} />
    </>
  );
}

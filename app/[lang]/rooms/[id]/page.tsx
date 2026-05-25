import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../../dictionaries";
import { roomsData } from "@/types/data";
import RoomDetailHero from "@/components/rooms/detail/RoomDetailHero";
import RoomDetailAbout from "@/components/rooms/detail/RoomDetailAbout";
import RoomDetailAmenities from "@/components/rooms/detail/RoomDetailAmenities";
import RoomDetailGallery from "@/components/rooms/detail/RoomDetailGallery";
import RoomDetailSimilar from "@/components/rooms/detail/RoomDetailSimilar";

export async function generateStaticParams() {
  const langs = ["en", "mn"];
  return langs.flatMap((lang) =>
    roomsData.map((room) => ({ lang, id: String(room.id) }))
  );
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  if (!hasLocale(lang)) notFound();

  const room = roomsData.find((r) => r.id === Number(id));
  if (!room) notFound();

  const dict = await getDictionary(lang as Locale);
  const detail = dict.roomDetail;

  const description = lang === "en" ? room.descriptionEn : room.description;
  const detailParagraphs = lang === "en" ? room.detailEn : room.detailMn;

  const similarRooms = roomsData
    .filter((r) => r.id !== room.id && r.type === room.type)
    .slice(0, 2)
    .concat(
      roomsData
        .filter((r) => r.id !== room.id && r.type !== room.type)
        .slice(0, Math.max(0, 2 - roomsData.filter((r) => r.id !== room.id && r.type === room.type).length))
    )
    .slice(0, 2);

  return (
    <>
      <RoomDetailHero room={room} lang={lang} dict={detail} />
      <RoomDetailAbout
        room={room}
        description={description}
        paragraphs={detailParagraphs}
        dict={detail}
      />
      <RoomDetailAmenities room={room} dict={detail} />
      <RoomDetailGallery room={room} dict={detail} />
      <RoomDetailSimilar rooms={similarRooms} lang={lang} dict={detail} />
    </>
  );
}

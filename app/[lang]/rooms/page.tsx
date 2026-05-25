import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import RoomsPageClient from "@/components/rooms/RoomsPageClient";

export default async function RoomsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return <RoomsPageClient lang={lang} dict={dict.roomsPage} />;
}

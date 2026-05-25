import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import RestaurantHero from "@/components/restaurant/RestaurantHero";
import RestaurantAbout from "@/components/restaurant/RestaurantAbout";
import RestaurantFeatures from "@/components/restaurant/RestaurantFeatures";
import RestaurantMenu from "@/components/restaurant/RestaurantMenu";
import RestaurantGallery from "@/components/restaurant/RestaurantGallery";
import RestaurantReservation from "@/components/restaurant/RestaurantReservation";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function RestaurantPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const d = dict.restaurantPage;

  return (
    <>
      <RestaurantHero dict={d.hero} lang={lang} />
      <RestaurantAbout dict={d.about} />
      <RestaurantFeatures dict={d.features} />
      <RestaurantMenu dict={d.menu} />
      <RestaurantGallery dict={d.gallery} />
      <RestaurantReservation dict={d.reservation} />
    </>
  );
}

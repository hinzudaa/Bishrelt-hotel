import type enDict from "./dictionaries/en.json";

export type Locale = "en" | "mn";
export type Dictionary = typeof enDict;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () =>
    import("./dictionaries/en.json").then((m) => m.default as Dictionary),
  mn: () =>
    import("./dictionaries/mn.json").then((m) => m.default as Dictionary),
};

export const hasLocale = (locale: string): locale is Locale =>
  locale === "en" || locale === "mn";

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();

export const locales = ["en", "ja"] as const;

export type Locale = (typeof locales)[number];
export type LocalizedString = Record<Locale, string>;

export const defaultLocale: Locale = "en";

export function resolveLocale(language?: string | null): Locale {
  const normalized = language?.toLowerCase() || "";
  return normalized.startsWith("ja") ? "ja" : "en";
}

export function pickLocalized(
  value: string | LocalizedString,
  locale: Locale,
): string {
  if (typeof value === "string") {
    return value;
  }

  return value[locale] || value[defaultLocale];
}

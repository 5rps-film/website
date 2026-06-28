import { Locale, LocalizedString, pickLocalized } from "@/lib/i18n";

const tagText: Record<string, LocalizedString> = {
  launch: { en: "launch", ja: "公開" },
  instagram: { en: "instagram", ja: "Instagram" },
  x: { en: "x", ja: "X" },
  twitter: { en: "twitter", ja: "Twitter" },
  linkedin: { en: "linkedin", ja: "LinkedIn" },
};

export function localizeTag(tag: string, locale: Locale): string {
  return tagText[tag] ? pickLocalized(tagText[tag], locale) : tag;
}

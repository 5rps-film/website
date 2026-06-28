import type { Authors } from "contentlayer/generated";
import { CoreContent } from "pliny/utils/contentlayer";
import { Locale, LocalizedString, pickLocalized } from "@/lib/i18n";

const authorText: Record<
  string,
  { occupation?: LocalizedString; body?: LocalizedString }
> = {
  s: {
    occupation: {
      en: "Indie Filmmaker / ML Engineer",
      ja: "インディー映画制作者 / MLエンジニア",
    },
  },
  shinobi: {
    occupation: {
      en: "Production/Staff Assistance",
      ja: "制作・スタッフ協力",
    },
  },
  marketing: {
    occupation: {
      en: "Engineering Student / Artist",
      ja: "工学系学生 / アーティスト",
    },
  },
  yihong: {
    occupation: {
      en: "In-betweening Assistance",
      ja: "動画協力",
    },
  },
  dondon: {
    occupation: {
      en: "In-betweening Assistance",
      ja: "動画協力",
    },
  },
};

export function localizeAuthor<T extends CoreContent<Authors>>(
  author: T,
  locale: Locale,
): T {
  const localized = authorText[author.slug];

  if (!localized) {
    return author;
  }

  return {
    ...author,
    occupation: localized.occupation
      ? pickLocalized(localized.occupation, locale)
      : author.occupation,
  };
}

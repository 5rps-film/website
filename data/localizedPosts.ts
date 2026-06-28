import { Locale, LocalizedString, pickLocalized } from "@/lib/i18n";

type PostLike = {
  slug: string;
  title: string;
  summary?: string;
  [key: string]: any;
};

const postText: Record<
  string,
  { title: LocalizedString; summary: LocalizedString }
> = {
  "20250101-instagram-release": {
    title: {
      en: "Instagram Launch",
      ja: "Instagram公開",
    },
    summary: {
      en: "The 5 Requests Per Second Instagram page is now live.",
      ja: "『秒速5リクエスト』のInstagramページを公開しました。",
    },
  },
  "20250902-first-clip-x-linkedin": {
    title: {
      en: "First Clip and X/LinkedIn",
      ja: "初映像とX/LinkedIn公開",
    },
    summary: {
      en: "The first teaser clip is live, and our X and LinkedIn pages are now open.",
      ja: "初めてのティザー映像を公開し、XとLinkedInページも開設しました。",
    },
  },
  "20251211-trailer": {
    title: {
      en: "Trailer Release",
      ja: "予告編公開",
    },
    summary: {
      en: "The trailer is now live on all platforms.",
      ja: "予告編を各プラットフォームで公開しました。",
    },
  },
};

export function localizePost<T extends PostLike>(post: T, locale: Locale): T {
  const localized = postText[post.slug];

  if (!localized) {
    return post;
  }

  return {
    ...post,
    title: pickLocalized(localized.title, locale),
    summary: pickLocalized(localized.summary, locale),
  };
}

export function localizePosts<T extends PostLike>(
  posts: T[],
  locale: Locale,
): T[] {
  return posts.map((post) => localizePost(post, locale));
}

"use client";

import { useLocale } from "@/components/LocaleProvider";

interface ArticleShareButtonsProps {
  title: string;
  url: string;
}

const platforms = [
  {
    key: "X",
    href: (title: string, url: string) => {
      const params = new URLSearchParams({ text: title, url });
      return `https://x.com/intent/tweet?${params.toString()}`;
    },
  },
  {
    key: "LinkedIn",
    href: (_title: string, url: string) => {
      const params = new URLSearchParams({ url });
      return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`;
    },
  },
  {
    key: "Facebook",
    href: (_title: string, url: string) => {
      const params = new URLSearchParams({ u: url });
      return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
    },
  },
  {
    key: "Threads",
    href: (title: string, url: string) => {
      const params = new URLSearchParams({ text: `${title}\n${url}` });
      return `https://www.threads.com/intent/post?${params.toString()}`;
    },
  },
] as const;

export default function ArticleShareButtons({
  title,
  url,
}: ArticleShareButtonsProps) {
  const { locale, t } = useLocale();

  return (
    <section className="post-share" aria-labelledby="post-share-heading">
      <h2 id="post-share-heading">{t("shareArticle")}</h2>
      <div className="post-share-list">
        {platforms.map((platform) => (
          <a
            className="post-share-link"
            href={platform.href(title, url)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              locale === "ja"
                ? `${platform.key}でシェア（新しいタブで開きます）`
                : `Share on ${platform.key} (opens in a new tab)`
            }
            key={platform.key}
          >
            <span>{platform.key}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

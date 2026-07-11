"use client";

import { ReactNode } from "react";
import { CoreContent } from "pliny/utils/contentlayer";
import type { Blog, Authors } from "contentlayer/generated";
import Link from "@/components/Link";
import Image from "@/components/Image";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import { useLocale } from "@/components/LocaleProvider";
import { localizePost } from "@/data/localizedPosts";
import { localizeAuthor } from "@/data/localizedAuthors";

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

interface LayoutProps {
  content: CoreContent<Blog>;
  authorDetails: CoreContent<Authors>[];
  next?: { path: string; title: string; slug?: string };
  prev?: { path: string; title: string; slug?: string };
  children: ReactNode;
}

export default function PostLayout({
  content,
  authorDetails,
  next,
  prev,
  children,
}: LayoutProps) {
  const { locale, t } = useLocale();
  const localizedContent = localizePost(content, locale);
  const localizedNext = next
    ? localizePost(next as typeof next & { slug: string }, locale)
    : next;
  const localizedPrev = prev
    ? localizePost(prev as typeof prev & { slug: string }, locale)
    : prev;
  const { path, date, title, tags } = localizedContent;
  const basePath = path.split("/")[0];
  const dateLocale = locale === "ja" ? "ja-JP" : siteMetadata.locale;

  return (
    <>
      <ScrollTopAndComment />
      <article className="post-page">
        <header className="post-header">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString(dateLocale, postDateTemplate)}
          </time>
          <h1>{title}</h1>
        </header>

        <div className="post-layout">
          <aside className="post-meta">
            <section className="post-authors" aria-label={t("authors")}>
              {authorDetails.map((author) => {
                const localizedAuthor = localizeAuthor(author, locale);
                return (
                  <div className="post-author" key={localizedAuthor.name}>
                    {localizedAuthor.avatar && (
                      <Image
                        src={localizedAuthor.avatar}
                        width={48}
                        height={48}
                        alt={t("avatar")}
                      />
                    )}
                    <div>
                      <strong>{localizedAuthor.name}</strong>
                      {localizedAuthor.instagram && (
                        <Link href={localizedAuthor.instagram}>
                          {localizedAuthor.instagram.replace(
                            "https://instagram.com/",
                            "@",
                          )}
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </section>

            {tags && tags.length > 0 && (
              <section className="post-tags">
                <h2>{t("tags")}</h2>
                <div>
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </section>
            )}

            {(localizedNext || localizedPrev) && (
              <nav className="post-pagination" aria-label="Article pagination">
                {localizedPrev?.path && (
                  <div>
                    <span>{t("previousArticle")}</span>
                    <Link href={`/${localizedPrev.path}`}>
                      {localizedPrev.title}
                    </Link>
                  </div>
                )}
                {localizedNext?.path && (
                  <div>
                    <span>{t("nextArticle")}</span>
                    <Link href={`/${localizedNext.path}`}>
                      {localizedNext.title}
                    </Link>
                  </div>
                )}
              </nav>
            )}

            <Link className="post-back" href={`/${basePath}`}>
              &larr; {t("backToNews")}
            </Link>
          </aside>

          <div className="post-body prose max-w-none">{children}</div>
        </div>
      </article>
    </>
  );
}

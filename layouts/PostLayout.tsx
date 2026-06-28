"use client";

import { ReactNode } from "react";
import { CoreContent } from "pliny/utils/contentlayer";
import type { Blog, Authors } from "contentlayer/generated";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
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
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">{t("publishedOn")}</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(
                        dateLocale,
                        postDateTemplate,
                      )}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">{t("authors")}</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => {
                    const localizedAuthor = localizeAuthor(author, locale);
                    return (
                      <li
                        className="flex items-center space-x-2"
                        key={localizedAuthor.name}
                      >
                        {localizedAuthor.avatar && (
                          <Image
                            src={localizedAuthor.avatar}
                            width={38}
                            height={38}
                            alt={t("avatar")}
                            className="h-10 w-10 rounded-full"
                          />
                        )}
                        <dl className="whitespace-nowrap text-sm font-medium leading-5">
                          <dt className="sr-only">{t("name")}</dt>
                          <dd className="text-gray-900 dark:text-gray-100">
                            {localizedAuthor.name}
                          </dd>
                          <dt className="sr-only">{t("twitter")}</dt>
                          <dd>
                            {localizedAuthor.instagram && (
                              <Link
                                href={localizedAuthor.instagram}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              >
                                {localizedAuthor.instagram.replace(
                                  "https://instagram.com/",
                                  "@",
                                )}
                              </Link>
                            )}
                          </dd>
                        </dl>
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                {children}
              </div>
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {t("tags")}
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(localizedNext || localizedPrev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {localizedPrev && localizedPrev.path && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          {t("previousArticle")}
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${localizedPrev.path}`}>
                            {localizedPrev.title}
                          </Link>
                        </div>
                      </div>
                    )}
                    {localizedNext && localizedNext.path && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          {t("nextArticle")}
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${localizedNext.path}`}>
                            {localizedNext.title}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={t("backToNews")}
                >
                  &larr; {t("backToNews")}
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}

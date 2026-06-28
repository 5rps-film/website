"use client";

import { ReactNode } from "react";
import { formatDate } from "pliny/utils/formatDate";
import { CoreContent } from "pliny/utils/contentlayer";
import type { Blog } from "contentlayer/generated";
import Comments from "@/components/Comments";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "@/data/siteMetadata";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import { useLocale } from "@/components/LocaleProvider";
import { localizePost } from "@/data/localizedPosts";

interface LayoutProps {
  content: CoreContent<Blog>;
  children: ReactNode;
  next?: { path: string; title: string; slug?: string };
  prev?: { path: string; title: string; slug?: string };
}

export default function PostLayout({
  content,
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
  const { slug, date, title } = localizedContent;
  const dateLocale = locale === "ja" ? "ja-JP" : siteMetadata.locale;

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">{t("publishedOn")}</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, dateLocale)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                {children}
              </div>
            </div>
            {siteMetadata.comments && (
              <div
                className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                id="comment"
              >
                <Comments slug={slug} />
              </div>
            )}
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {localizedPrev && localizedPrev.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${localizedPrev.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`${t("previousPost")}: ${localizedPrev.title}`}
                    >
                      &larr; {localizedPrev.title}
                    </Link>
                  </div>
                )}
                {localizedNext && localizedNext.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${localizedNext.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`${t("nextPost")}: ${localizedNext.title}`}
                    >
                      {localizedNext.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}

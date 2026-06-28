/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import { usePathname } from "next/navigation";
import { slug } from "github-slugger";
import { formatDate } from "pliny/utils/formatDate";
import { CoreContent } from "pliny/utils/contentlayer";
import type { Blog } from "contentlayer/generated";
import Link from "@/components/Link";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import tagData from "app/tag-data.json";
import { useLocale } from "@/components/LocaleProvider";
import { localizePosts } from "@/data/localizedPosts";
import strings from "@/data/strings";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[];
  title: string;
  titleKey?: keyof typeof strings;
  initialDisplayPosts?: CoreContent<Blog>[];
  pagination?: PaginationProps;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split("/")[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;
  const { t } = useLocale();

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            {t("previous")}
          </button>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1
                ? `/${basePath}/`
                : `/${basePath}/page/${currentPage - 1}`
            }
            rel="prev"
          >
            {t("previous")}
          </Link>
        )}
        <span>
          {currentPage} {t("pageOf")} {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            {t("next")}
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            {t("next")}
          </Link>
        )}
      </nav>
    </div>
  );
}

export default function ListLayoutWithTags({
  posts,
  title,
  titleKey,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname();
  const { locale, t } = useLocale();
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);
  const localizedPosts = localizePosts(posts, locale);
  const localizedInitialPosts = localizePosts(initialDisplayPosts, locale);
  const dateLocale = locale === "ja" ? "ja-JP" : siteMetadata.locale;

  const displayPosts =
    localizedInitialPosts.length > 0 ? localizedInitialPosts : localizedPosts;

  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {titleKey ? t(titleKey) : title}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              {pathname.startsWith("/news") ? (
                <h3 className="font-bold uppercase text-primary-500">
                  {t("allPosts")}
                </h3>
              ) : (
                <Link
                  href={`/news`}
                  className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                >
                  {t("allPosts")}
                </Link>
              )}
              <ul>
                {sortedTags.map((tag) => {
                  return (
                    <li key={tag} className="my-3">
                      {pathname.split("/tags/")[1] === slug(tag) ? (
                        <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                          {`${tag} (${tagCounts[tag]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/tags/${slug(tag)}`}
                          className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                          aria-label={`${t("viewPostsTagged")} ${tag}`}
                        >
                          {`${tag} (${tagCounts[tag]})`}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <ul>
              {!displayPosts.length && t("noPosts")}
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags } = post;
                return (
                  <li key={path} className="py-5">
                    <article className="flex flex-col space-y-2 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">{t("publishedOn")}</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>
                            {formatDate(date, dateLocale)}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/${path}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

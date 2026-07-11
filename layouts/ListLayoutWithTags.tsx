"use client";

import { usePathname } from "next/navigation";
import { formatDate } from "pliny/utils/formatDate";
import type { CoreContent } from "pliny/utils/contentlayer";
import type { Blog } from "contentlayer/generated";
import Link from "@/components/Link";
import siteMetadata from "@/data/siteMetadata";
import { useLocale } from "@/components/LocaleProvider";
import { localizePosts } from "@/data/localizedPosts";
import strings from "@/data/strings";

export default function ListLayoutWithTags({ posts, titleKey, initialDisplayPosts = [], pagination }: { posts: CoreContent<Blog>[]; title?: string; titleKey?: keyof typeof strings; initialDisplayPosts?: CoreContent<Blog>[]; pagination?: { totalPages: number; currentPage: number } }) {
  const { locale, t } = useLocale();
  const pathname = usePathname();
  const display = localizePosts(initialDisplayPosts.length ? initialDisplayPosts : posts, locale);
  const dateLocale = locale === "ja" ? "ja-JP" : siteMetadata.locale;
  return <><section className="page-intro"><div className="page-intro-inner"><div className="section-kicker">05 / dispatches</div><h1 className="section-title">{titleKey ? t(titleKey) : t("news")}</h1></div></section><div className="page-content"><div className="news-list">{display.map((post) => <Link className="news-row" href={`/${post.path}`} key={post.path}><time className="news-date" dateTime={post.date}>{formatDate(post.date, dateLocale)}</time><span><span className="news-title">{post.title}</span><br/><small className="text-[var(--graphite)]">{post.summary}</small></span><span className="news-arrow">↗</span></Link>)}</div>{pagination && pagination.totalPages > 1 && <nav className="mt-10 flex justify-between text-sm" aria-label="Pagination">{pagination.currentPage > 1 ? <Link href={pagination.currentPage === 2 ? pathname.replace(/\/page\/\d+$/, "") : `${pathname}/page/${pagination.currentPage - 1}`}>{t("previous")}</Link> : <span />}{pagination.currentPage < pagination.totalPages ? <Link href={`${pathname}/page/${pagination.currentPage + 1}`}>{t("next")}</Link> : <span />}</nav>}</div></>;
}

import ListLayout from "@/layouts/ListLayoutWithTags";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer";
import { allBlogs } from "contentlayer/generated";
import { genPageMetadata } from "app/seo";
import type { Metadata } from "next";

const POSTS_PER_PAGE = 5;

export const generateStaticParams = async () => {
  const publishedPosts = allBlogs.filter((post) => !post.draft);
  const totalPages = Math.ceil(publishedPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

export function generateMetadata({
  params,
}: {
  params: { page: string };
}): Metadata {
  const pageNumber = Number.parseInt(params.page, 10);
  const isFirstPage = pageNumber === 1;

  return genPageMetadata({
    title: isFirstPage ? "News" : `News – Page ${pageNumber}`,
    description:
      "Production notes, releases, and official updates from the animated feature film 5 Requests Per Second / 秒速5リクエスト.",
    path: isFirstPage ? "/news" : `/news/page/${pageNumber}`,
    ...(isFirstPage ? { robots: { index: false, follow: true } } : {}),
  });
}

export default function Page({ params }: { params: { page: string } }) {
  const posts = allCoreContent(
    sortPosts(allBlogs.filter((post) => !post.draft)),
  );
  const pageNumber = parseInt(params.page as string);
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber,
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
      titleKey="allPosts"
    />
  );
}

import ListLayout from "@/layouts/ListLayoutWithTags";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer";
import { allBlogs } from "contentlayer/generated";
import { genPageMetadata } from "app/seo";

const POSTS_PER_PAGE = 5;

export const metadata = genPageMetadata({
  title: "News",
  description:
    "Production notes, releases, and official updates from the animated feature film 5 Requests Per Second / 秒速5リクエスト.",
  path: "/news",
});

export default function BlogPage() {
  const posts = allCoreContent(
    sortPosts(allBlogs.filter((post) => !post.draft)),
  );
  const pageNumber = 1;
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

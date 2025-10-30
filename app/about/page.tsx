import { Authors, allAuthors } from "contentlayer/generated";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import AuthorLayout from "@/layouts/AuthorLayout";
import { coreContent } from "pliny/utils/contentlayer";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: "About" });

export default function Page() {
  const author = allAuthors.find((p) => p.slug === "s") as Authors;
  const authorContent = coreContent(author);

  const assistingStudio = allAuthors.find(
    (p) => p.slug === "shinobi",
  ) as Authors;
  const assistingStudioContent = coreContent(assistingStudio);

  const marketing = allAuthors.find((p) => p.slug === "marketing") as Authors;
  const marketingContent = coreContent(marketing);

  const dougaStudio = allAuthors.find((p) => p.slug === "yihong") as Authors;
  const dougaStudioContent = coreContent(dougaStudio);

  const assistingDouga = allAuthors.find((p) => p.slug === "dondon") as Authors;
  const assistingDougaContent = coreContent(assistingDouga);

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <AuthorLayout content={dougaStudioContent}>
          <MDXLayoutRenderer code={dougaStudio.body.code} />
        </AuthorLayout>
        <AuthorLayout content={assistingStudioContent}>
          <MDXLayoutRenderer code={assistingStudio.body.code} />
        </AuthorLayout>
        <AuthorLayout content={assistingDougaContent}>
          <MDXLayoutRenderer code={assistingDouga.body.code} />
        </AuthorLayout>
        <AuthorLayout content={marketingContent}>
          <MDXLayoutRenderer code={marketing.body.code} />
        </AuthorLayout>
        <AuthorLayout content={authorContent}>
          <MDXLayoutRenderer code={author.body.code} />
        </AuthorLayout>
      </div>
    </>
  );
}

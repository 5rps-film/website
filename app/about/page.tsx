import { Authors, allAuthors } from "contentlayer/generated";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import AuthorLayout from "@/layouts/AuthorLayout";
import { coreContent } from "pliny/utils/contentlayer";
import { genPageMetadata } from "app/seo";
import LocalizedHeading from "@/components/LocalizedHeading";
import { components } from "@/components/MDXComponents";

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
          <LocalizedHeading labelKey="about" />
        </div>
        <AuthorLayout content={dougaStudioContent}>
          <MDXLayoutRenderer
            code={dougaStudio.body.code}
            components={components}
          />
        </AuthorLayout>
        <AuthorLayout content={assistingStudioContent}>
          <MDXLayoutRenderer
            code={assistingStudio.body.code}
            components={components}
          />
        </AuthorLayout>
        <AuthorLayout content={assistingDougaContent}>
          <MDXLayoutRenderer
            code={assistingDouga.body.code}
            components={components}
          />
        </AuthorLayout>
        <AuthorLayout content={marketingContent}>
          <MDXLayoutRenderer
            code={marketing.body.code}
            components={components}
          />
        </AuthorLayout>
        <AuthorLayout content={authorContent}>
          <MDXLayoutRenderer code={author.body.code} components={components} />
        </AuthorLayout>
      </div>
    </>
  );
}

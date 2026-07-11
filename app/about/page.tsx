import { Authors, allAuthors } from "contentlayer/generated";
import { genPageMetadata } from "app/seo";
import AboutContent from "@/components/AboutContent";

export const metadata = genPageMetadata({ title: "About" });
export default function About() {
  const authors = ["yihong", "shinobi", "dondon", "marketing", "s"]
    .map((slug) => allAuthors.find((author) => author.slug === slug) as Authors)
    .filter(Boolean);

  return <AboutContent authors={authors} />;
}

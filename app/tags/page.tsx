import tagData from "app/tag-data.json";
import { genPageMetadata } from "app/seo";
import TagsPageContent from "@/components/TagsPageContent";

export const metadata = genPageMetadata({
  title: "Tags",
  description: "News and updates from 5 Requests Per Second",
});

export default async function Page() {
  const tagCounts = tagData as Record<string, number>;
  return <TagsPageContent tagCounts={tagCounts} />;
}

import mediaData from "@/data/mediaData";
import Card from "@/components/Card";
import { genPageMetadata } from "app/seo";
import LocalizedHeading from "@/components/LocalizedHeading";

export const metadata = genPageMetadata({ title: "Media" });

export default function Media() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <LocalizedHeading labelKey="media" />
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {mediaData.map((d) => (
              <Card
                key={d.href}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

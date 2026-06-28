import characterData from "@/data/characterData";
import CharacterCard from "@/components/CharacterCard";
import StorySynopsis from "@/components/StorySynopsis";
import { genPageMetadata } from "app/seo";
import LocalizedHeading from "@/components/LocalizedHeading";

export const metadata = genPageMetadata({ title: "Story" });

export default function Story() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <LocalizedHeading labelKey="synopsis" />
        </div>
        <div className="container py-12">
          <StorySynopsis />
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <LocalizedHeading labelKey="characters" />
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {characterData.map((d) => (
              <CharacterCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                position={d.position}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

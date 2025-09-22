import characterData from "@/data/characterData";
import CharacterCard from "@/components/CharacterCard";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: "Media" });

export default function Media() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Synopsis
          </h1>
        </div>
        <div className="container py-12">
          5 Requests Per Second is a film about a US-born Japanese engineer who, after his startup collapses, escapes to Tokyo and partners with a rebellious local outsider to sell AI-driven illusions to old-school corporations.
          <br />
          <br />
          But as their high-stakes con spirals out of control, he’s forced to confront the identity he’s long ignored.
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Characters
          </h1>
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

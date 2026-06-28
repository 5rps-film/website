"use client";

import Image from "./Image";
import { useLocale } from "@/components/LocaleProvider";
import { LocalizedString, pickLocalized } from "@/lib/i18n";

const CharacterCard = ({
  title,
  description,
  imgSrc,
  position,
}: {
  title: string;
  description: string | LocalizedString;
  imgSrc: string;
  position: string | LocalizedString;
}) => {
  const { locale } = useLocale();

  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div
        className={`${
          imgSrc && "h-full"
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {title}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            {pickLocalized(description, locale)}
          </p>
          <p className="text-base font-medium leading-6 text-indigo-300">
            {pickLocalized(position, locale)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;

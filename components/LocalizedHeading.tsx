"use client";

import { useLocale } from "@/components/LocaleProvider";
import strings from "@/data/strings";

export default function LocalizedHeading({
  labelKey,
}: {
  labelKey: keyof typeof strings;
}) {
  const { t } = useLocale();

  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
      {t(labelKey)}
    </h1>
  );
}

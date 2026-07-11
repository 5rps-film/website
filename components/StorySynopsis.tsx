"use client";

import { useLocale } from "@/components/LocaleProvider";
import JapaneseLineBreak from "@/components/JapaneseLineBreak";

export default function StorySynopsis() {
  const { t } = useLocale();

  return (
    <>
      {t("synopsisBody")
        .split("\n\n")
        .map((paragraph) => (
          <p key={paragraph} className="mb-6 last:mb-0">
            <JapaneseLineBreak>{paragraph}</JapaneseLineBreak>
          </p>
        ))}
    </>
  );
}

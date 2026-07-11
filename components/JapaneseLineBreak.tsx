"use client";

import { ElementType, ReactNode, useMemo } from "react";
import { Parser } from "@budoux/parser";
import { model as jaModel } from "@budoux/ja-model";
import { useLocale } from "@/components/LocaleProvider";

const parser = new Parser(jaModel);
const ZWSP = "\u200B";

export function applyJapaneseLineBreaks(text: string) {
  return parser.parse(text).join(ZWSP);
}

export default function JapaneseLineBreak({
  as,
  children,
  className,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}) {
  const { locale } = useLocale();
  const Tag = as || "span";
  const text = typeof children === "string" ? children : String(children ?? "");
  const phraseText = useMemo(
    () => (locale === "ja" ? applyJapaneseLineBreaks(text) : text),
    [text, locale],
  );
  const classes =
    locale === "ja"
      ? ["ja-phrase-break", className].filter(Boolean).join(" ")
      : className;

  return <Tag className={classes}>{phraseText}</Tag>;
}

"use client";

import { ReactNode } from "react";
import { Locale } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function LocalizedContent({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const current = useLocale().locale;

  if (locale !== current) {
    return null;
  }

  return <>{children}</>;
}

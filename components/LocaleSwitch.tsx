"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function LocaleSwitch() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className="flex rounded border border-gray-300 text-xs font-semibold uppercase leading-none dark:border-gray-700"
      aria-label={t("languageSelector")}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-2 py-1 ${
          locale === "en"
            ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-950"
            : "text-gray-700 hover:text-primary-500 dark:text-gray-300"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("ja")}
        aria-pressed={locale === "ja"}
        className={`px-2 py-1 ${
          locale === "ja"
            ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-950"
            : "text-gray-700 hover:text-primary-500 dark:text-gray-300"
        }`}
      >
        JA
      </button>
    </div>
  );
}

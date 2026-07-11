"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function LocaleSwitch() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className="locale-switch"
      aria-label={t("languageSelector")}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`locale-option ${locale === "en" ? "is-selected" : ""}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("ja")}
        aria-pressed={locale === "ja"}
        className={`locale-option ${locale === "ja" ? "is-selected" : ""}`}
      >
        JA
      </button>
    </div>
  );
}

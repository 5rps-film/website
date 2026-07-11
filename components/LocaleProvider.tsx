"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  defaultLocale,
  Locale,
  pickLocalized,
  resolveLocale,
} from "@/lib/i18n";
import strings from "@/data/strings";

const STORAGE_KEY = "5rps-locale";
const EN_TITLE = strings.siteTitle.en;
const JA_TITLE = strings.siteTitle.ja;

function syncDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale === "ja" ? "ja" : "en";
  const localizedTitle = pickLocalized(strings.siteTitle, locale);
  document.title = document.title
    .replaceAll(EN_TITLE, localizedTitle)
    .replaceAll(JA_TITLE, localizedTitle);
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof typeof strings) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key) => pickLocalized(strings[key], defaultLocale),
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initialLocale =
      stored === "ja" || stored === "en"
        ? stored
        : resolveLocale(window.navigator.language);

    setLocaleState(initialLocale);
    syncDocumentLocale(initialLocale);
    setResolved(true);
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    syncDocumentLocale(nextLocale);
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: keyof typeof strings) => pickLocalized(strings[key], locale),
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>
      <div className={`locale-root ${resolved ? "is-ready" : ""}`}>
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

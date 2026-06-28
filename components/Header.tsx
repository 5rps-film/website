"use client";

import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Link from "./Link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import SearchButton from "./SearchButton";
import LocaleSwitch from "./LocaleSwitch";
import { useLocale } from "@/components/LocaleProvider";

import { useTheme } from "next-themes";

const THEME_DARK = "dark";

const Header = () => {
  const { theme } = useTheme();
  const { t } = useLocale();

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={t("siteTitle")}>
          <div className="flex items-center justify-between">
            {typeof siteMetadata.headerTitle === "string" ? (
              <div className="hidden text-2xl font-semibold sm:block">
                {t("siteTitle")}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {t(link.labelKey as Parameters<typeof t>[0])}
            </Link>
          ))}
        <LocaleSwitch />
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;

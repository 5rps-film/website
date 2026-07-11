"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "./Link";
import MobileNav from "./MobileNav";
import LocaleSwitch from "./LocaleSwitch";
import { useLocale } from "@/components/LocaleProvider";
import JapaneseLineBreak from "@/components/JapaneseLineBreak";

const links = [
  ["/story", "story"],
  ["/media", "media"],
  ["/news", "news"],
  ["/about", "about"],
] as const;

export default function Header() {
  const { t } = useLocale();
  const pathname = usePathname();
  const overlaysHero = pathname === "/";
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    if (!overlaysHero) {
      setSolid(false);
      return;
    }

    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlaysHero]);

  return (
    <header
      className={`site-header ${overlaysHero ? "is-overlay" : "is-page-header"} ${solid ? "is-solid" : ""}`}
    >
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label={t("siteTitle")}>
          <span className="mark-title">{t("siteTitle")}</span>
        </Link>
        <nav className="header-nav" aria-label="Primary navigation">
          {links.map(([href, key]) => (
            <Link key={href} href={href}>
              <JapaneseLineBreak>{t(key)}</JapaneseLineBreak>
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <div className="desktop-locale">
            <LocaleSwitch />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

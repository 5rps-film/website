"use client";

import { useLocale } from "@/components/LocaleProvider";
import { Discord, Instagram } from "@/components/social-icons/icons";
import Link from "@/components/Link";
import siteMetadata from "@/data/siteMetadata";

export default function Footer() {
  const { locale, t } = useLocale();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <p>
            {locale === "ja"
              ? "制作中の長編アニメーション"
              : "An animated feature in progress"}
          </p>
          <nav
            className="footer-nav"
            aria-label={
              locale === "ja" ? "フッターナビゲーション" : "Footer navigation"
            }
          >
            {[
              ["/story", "story"],
              ["/media", "media"],
              ["/about", "about"],
            ].map(([href, key]) => (
              <Link key={href} href={href}>
                {t(key as "story" | "media" | "about")}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
        </div>
        <p className="footer-title" data-reveal>
          5RPS<span style={{ color: "var(--request-red)" }}>.</span>
        </p>
        <div className="footer-meta" data-reveal>
          <span>{t("siteTitle")}</span>
          <div
            className="footer-socials"
            aria-label={locale === "ja" ? "ソーシャルメディア" : "Social media"}
          >
            <a
              href={siteMetadata.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                locale === "ja"
                  ? "Instagram（新しいタブで開く）"
                  : "Instagram (opens in a new tab)"
              }
            >
              <Instagram aria-hidden="true" />
              <span>Instagram</span>
            </a>
            <a
              href={siteMetadata.discord}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                locale === "ja"
                  ? "Discord（新しいタブで開く）"
                  : "Discord (opens in a new tab)"
              }
            >
              <Discord aria-hidden="true" />
              <span>Discord</span>
            </a>
          </div>
          <span>© {new Date().getFullYear()} 5RPS</span>
        </div>
      </div>
    </footer>
  );
}

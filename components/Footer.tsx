"use client";

import { useLocale } from "@/components/LocaleProvider";
import Link from "@/components/Link";
import siteMetadata from "@/data/siteMetadata";
import mediaData from "@/data/mediaData";

export default function Footer() {
  const { locale, t } = useLocale();
  const newTab =
    locale === "ja" ? "（新しいタブで開く）" : "(opens in a new tab)";
  return (
    <footer className="footer" data-header-tone="light">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-film">
            <p>{t("siteTitle")}</p>
            <p>
              {locale === "ja"
                ? "制作中の長編アニメーション"
                : "An animated feature in progress"}
            </p>
          </div>
          <nav
            className="footer-nav"
            aria-label={
              locale === "ja" ? "フッターナビゲーション" : "Footer navigation"
            }
          >
            {[
              ["/", "home"],
              ["/story", "story"],
              ["/media", "media"],
              ["/about", "about"],
            ].map(([href, key]) => (
              <Link key={href} href={href}>
                {t(key as "home" | "story" | "media" | "about")}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
          <div
            className="footer-socials"
            aria-label={locale === "ja" ? "ソーシャルメディア" : "Social media"}
          >
            {mediaData.map((item) => (
              <a
                href={item.href}
                key={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title[locale]} ${newTab}`}
              >
                {item.title[locale]}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
            <a
              href={siteMetadata.discord}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Discord ${newTab}`}
            >
              Discord<span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="footer-contact">
            <a href={`mailto:${siteMetadata.email}`}>
              {locale === "ja" ? "お問い合わせ" : "Contact"}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={`https://maru-ani.jp/${locale}/journal?filter=5rps`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${locale === "ja" ? "制作の記録" : "Production journal"} ${newTab}`}
            >
              {locale === "ja" ? "制作の記録" : "Production journal"}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <p className="footer-title" data-motion="wordmark">
          5RPS
        </p>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} 5RPS</span>
          <span>
            {locale === "ja" ? "秒速5リクエスト" : "5 Requests Per Second"}
          </span>
        </div>
      </div>
    </footer>
  );
}

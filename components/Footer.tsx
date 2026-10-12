"use client";

import { useLocale } from "@/components/LocaleProvider";
import { Discord, Instagram } from "@/components/social-icons/icons";
import siteMetadata from "@/data/siteMetadata";

export default function Footer() {
  const { locale, t } = useLocale();

  return (
    <footer className="footer">
      <div className="footer-inner">
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

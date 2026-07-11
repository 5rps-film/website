"use client";

import { useLocale } from "@/components/LocaleProvider";
import { Discord, Instagram } from "@/components/social-icons/icons";
import siteMetadata from "@/data/siteMetadata";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-title">
          5RPS<span style={{ color: "var(--request-red)" }}>.</span>
        </p>
        <div className="footer-meta">
          <span>{t("siteTitle")}</span>
          <div className="footer-socials" aria-label="Social media">
            <a
              href={siteMetadata.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram aria-hidden="true" />
              <span>Instagram</span>
            </a>
            <a
              href={siteMetadata.discord}
              target="_blank"
              rel="noopener noreferrer"
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

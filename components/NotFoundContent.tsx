"use client";

import Link from "@/components/Link";
import { useLocale } from "@/components/LocaleProvider";
import "./interior-pages.css";

export default function NotFoundContent() {
  const { t } = useLocale();

  return (
    <div className="interior-page not-found-page">
      <section className="page-content not-found">
        <h1 className="section-title">404</h1>
        <div className="not-found-copy">
          <h2>{t("notFoundTitle")}</h2>
          <p>{t("notFoundBody")}</p>
          <Link href="/" className="film-action">
            <span>{t("backToHome")}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

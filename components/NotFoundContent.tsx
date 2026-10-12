"use client";

import Link from "@/components/Link";
import { useLocale } from "@/components/LocaleProvider";

export default function NotFoundContent() {
  const { t } = useLocale();

  return (
    <section className="page-content not-found">
      <h1 className="section-title">404</h1>
      <div className="not-found-copy">
        <h2>{t("notFoundTitle")}</h2>
        <p>{t("notFoundBody")}</p>
        <Link href="/" className="film-action">
          {t("backToHome")}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import TrailerLink from "@/components/TrailerLink";
import mediaData from "@/data/mediaData";
import { useLocale } from "@/components/LocaleProvider";
import { pickLocalized } from "@/lib/i18n";

export default function Media() {
  const { locale, t } = useLocale();

  return (
    <>
      <section className="page-intro">
        <div className="page-intro-inner">
          <div className="section-kicker">01 / {t("media")}</div>
          <h1 className="section-title">{t("media")}</h1>
        </div>
      </section>
      <div className="page-content">
        <div className="media-feature">
          <TrailerLink />
          <div>
            <div className="section-kicker">Trailer 01</div>
            <h2 className="section-title">
              {locale === "ja" ? "予告編を公開中。" : "The trailer is live."}
            </h2>
            <p className="editorial-copy">
              {locale === "ja"
                ? "5人のリクエストがチームを駆け抜ける。"
                : "Follow the requests as they move through the team."}
            </p>
          </div>
        </div>
        <figure className="poster-lock">
          <figcaption>
            <span className="section-kicker">02 / official key visual</span>
            <span>{locale === "ja" ? "公式ポスター" : "Official poster"}</span>
          </figcaption>
          <Image
            src="/static/images/header-regenerated.png"
            alt={
              locale === "ja"
                ? "映画『秒速5リクエスト』公式ポスター"
                : "Official poster for 5 Requests Per Second"
            }
            width={1450}
            height={1088}
            sizes="(max-width: 800px) 100vw, 1200px"
          />
        </figure>
        <div className="media-links">
          {mediaData.map((item) => (
            <a
              className="media-link"
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{pickLocalized(item.title, locale)}</span>
              <span>↗</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import TrailerLink from "@/components/TrailerLink";
import mediaData from "@/data/mediaData";
import { useLocale } from "@/components/LocaleProvider";
import { pickLocalized } from "@/lib/i18n";
import JapaneseLineBreak from "@/components/JapaneseLineBreak";

const keyVisuals = [
  {
    src: "/static/images/header-regenerated.png",
    title: { en: "Official poster", ja: "公式ポスター" },
    alt: {
      en: "Official poster for 5 Requests Per Second",
      ja: "映画『秒速5リクエスト』公式ポスター",
    },
  },
  {
    src: "/static/images/key-visual-office-pull.png",
    title: {
      en: "Office presentation",
      ja: "オフィスプレゼンテーション",
    },
    alt: {
      en: "Elizabeth casually pulling Kakeru away after an office speech",
      ja: "スピーチ後のオフィスでエリザベスに連れ出されるカケル",
    },
  },
  {
    src: "/static/images/key-visual-meeting-room.png",
    title: { en: "Meeting room", ja: "ミーティングルーム" },
    alt: {
      en: "Elizabeth and Kakeru facing one another in a night meeting room",
      ja: "夜のミーティングルームで向き合うエリザベスとカケル",
    },
  },
  {
    src: "/static/images/key-visual-hearing-room.png",
    title: { en: "Hearing room", ja: "ヒアリングルーム" },
    alt: {
      en: "Elizabeth and Kakeru seated at a formal hearing table",
      ja: "正式なヒアリングの席に座るエリザベスとカケル",
    },
  },
];

export default function Media() {
  const { locale, t } = useLocale();

  return (
    <>
      <section className="page-intro">
        <div className="page-intro-inner">
          <h1 className="section-title" data-reveal>
            <JapaneseLineBreak>{t("media")}</JapaneseLineBreak>
          </h1>
        </div>
      </section>
      <div className="page-content">
        <div className="media-feature" data-reveal>
          <TrailerLink />
          <div>
            <h2 className="section-title" data-reveal>
              <JapaneseLineBreak>
                {locale === "ja" ? "予告編を公開中。" : "The trailer is live."}
              </JapaneseLineBreak>
            </h2>
            <p className="editorial-copy">
              <JapaneseLineBreak>
                {locale === "ja"
                  ? "5人のリクエストがチームを駆け抜ける。"
                  : "Follow the requests as they move through the team."}
              </JapaneseLineBreak>
            </p>
          </div>
        </div>
        <section
          className="official-visuals"
          aria-labelledby="key-visuals"
          data-reveal
        >
          <div className="official-visuals-heading">
            <h2 id="key-visuals" className="section-title">
              <JapaneseLineBreak>
                {locale === "ja"
                  ? "公式キービジュアル"
                  : "Official key visuals"}
              </JapaneseLineBreak>
            </h2>
          </div>
          <div className="official-visual-grid" data-reveal>
            {keyVisuals.map((visual, index) => (
              <figure className="official-visual" key={visual.src}>
                <Image
                  src={visual.src}
                  alt={pickLocalized(visual.alt, locale)}
                  width={index === 0 ? 1450 : 1680}
                  height={index === 0 ? 1088 : 945}
                  sizes={
                    index === 0
                      ? "(max-width: 800px) 100vw, 1200px"
                      : "(max-width: 800px) 100vw, 50vw"
                  }
                />
                <figcaption>
                  <JapaneseLineBreak>
                    {pickLocalized(visual.title, locale)}
                  </JapaneseLineBreak>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <div className="media-links" data-reveal>
          {mediaData.map((item) => (
            <a
              className="media-link"
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <JapaneseLineBreak as="span">
                {pickLocalized(item.title, locale)}
              </JapaneseLineBreak>
              <span>↗</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

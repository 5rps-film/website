"use client";

import Image from "next/image";
import TrailerLink from "@/components/TrailerLink";
import mediaData from "@/data/mediaData";
import { useLocale } from "@/components/LocaleProvider";
import { pickLocalized } from "@/lib/i18n";
import JapaneseLineBreak from "@/components/JapaneseLineBreak";
import "./media.css";

const keyVisuals = [
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
    <div className="media-page">
      <section className="page-intro">
        <div className="page-intro-inner">
          <h1 className="section-title" data-reveal>
            <JapaneseLineBreak>{t("media")}</JapaneseLineBreak>
          </h1>
        </div>
      </section>
      <div className="page-content">
        <div className="media-feature">
          <div data-reveal="image">
            <TrailerLink />
          </div>
          <div data-reveal>
            <h2 className="section-title">
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
        <section className="official-visuals" aria-labelledby="key-visuals">
          <div className="official-visuals-heading">
            <h2 id="key-visuals" className="section-title">
              <JapaneseLineBreak>
                {locale === "ja"
                  ? "公式キービジュアル"
                  : "Official key visuals"}
              </JapaneseLineBreak>
            </h2>
          </div>
          <div className="official-visual-grid">
            <figure
              className="official-visual media-poster"
              data-reveal="image"
            >
              <div className="film-frame">
                <picture>
                  <source
                    media="(max-width: 800px)"
                    srcSet="/static/images/startup-poster-portrait-480.webp 480w, /static/images/startup-poster-portrait-768.webp 768w, /static/images/startup-poster-portrait-1024.webp 1024w"
                    sizes="(max-width: 800px) 100vw, 55vw"
                    width={1024}
                    height={1536}
                  />
                  <img
                    src="/static/images/startup-poster-landscape-1200.webp"
                    srcSet="/static/images/startup-poster-landscape-768.webp 768w, /static/images/startup-poster-landscape-1200.webp 1200w, /static/images/startup-poster-landscape-1664.webp 1664w"
                    sizes="(max-width: 800px) 100vw, 55vw"
                    width={1664}
                    height={936}
                    alt={
                      locale === "ja"
                        ? "オフィスを歩くカケル、リズ、ヴィジャイ、颯太を描いた映画『秒速5リクエスト』の公式ポスター"
                        : "Official poster for 5 Requests Per Second, showing Kakeru, Liz, Vijay and Sota walking through the office"
                    }
                  />
                </picture>
              </div>
              <figcaption>
                {locale === "ja" ? "公式ポスター" : "Official poster"}
              </figcaption>
            </figure>
            <div className="media-still-rail">
              {keyVisuals.map((visual) => (
                <figure
                  className="official-visual"
                  key={visual.src}
                  data-reveal="image"
                >
                  <div className="film-frame">
                    <Image
                      src={visual.src}
                      alt={pickLocalized(visual.alt, locale)}
                      width={1672}
                      height={941}
                      sizes="(max-width: 800px) 100vw, 40vw"
                    />
                  </div>
                  <figcaption>
                    <JapaneseLineBreak>
                      {pickLocalized(visual.title, locale)}
                    </JapaneseLineBreak>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <div className="media-links" data-reveal>
          {mediaData.map((item) => (
            <a
              className="media-link"
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${pickLocalized(item.title, locale)} ${locale === "ja" ? "（新しいタブ）" : "(new tab)"}`}
            >
              <JapaneseLineBreak as="span">
                {pickLocalized(item.title, locale)}
              </JapaneseLineBreak>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

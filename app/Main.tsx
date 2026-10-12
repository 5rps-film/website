"use client";

import Image from "next/image";
import Link from "@/components/Link";
import { useLocale } from "@/components/LocaleProvider";
import characterData from "@/data/characterData";
import siteMetadata from "@/data/siteMetadata";
import TrailerLink from "@/components/TrailerLink";
import JapaneseLineBreak from "@/components/JapaneseLineBreak";
import CharacterName from "@/components/CharacterName";

export default function Main() {
  const { locale, t } = useLocale();
  return (
    <>
      <section className="film-opening" aria-labelledby="film-title">
        <Image
          className="opening-image"
          src="/static/images/key-visual-meeting-room.png"
          fill
          priority
          sizes="100vw"
          alt=""
        />
        <div className="opening-content">
          <div className="opening-identity">
            <p
              className="opening-translation"
              lang={locale === "ja" ? "en" : "ja"}
            >
              {locale === "ja" ? "5 Requests Per Second" : "秒速5リクエスト"}
            </p>
            <p className="opening-status">
              {locale === "ja"
                ? "制作中の長編アニメーション"
                : "An animated feature in progress"}
            </p>
          </div>
          <h1
            className={`opening-title opening-title-${locale}`}
            id="film-title"
            key={locale}
          >
            {(locale === "ja"
              ? ["秒速", "5リクエスト"]
              : ["5 Requests", "Per", "Second"]
            ).map((line) => (
              <span className="title-mask" key={line}>
                <span>{line}</span>
              </span>
            ))}
          </h1>
          <div className="opening-bottom">
            <p className="opening-statement">
              <JapaneseLineBreak>
                {locale === "ja"
                  ? "言葉は、誰のものか。"
                  : "Who gets to own a sentence"}
              </JapaneseLineBreak>
            </p>
            <div className="opening-actions">
              <a className="film-action" href="#trailer">
                {locale === "ja" ? "予告編を見る" : "Watch trailer"}
                <span aria-hidden="true">↘</span>
              </a>
              <Link className="film-action" href="/story">
                {t("story")}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section film-trailer"
        id="trailer"
        aria-labelledby="trailer-heading"
      >
        <div className="section-inner trailer-composition">
          <div className="trailer-copy" data-reveal>
            <h2 className="section-title" id="trailer-heading">
              {locale === "ja" ? "予告編" : "Trailer"}
            </h2>
            <p>
              <JapaneseLineBreak>
                {locale === "ja"
                  ? "予告編と制作の記録。"
                  : "The trailer, and the record of making it."}
              </JapaneseLineBreak>
            </p>
            <Link className="film-action" href="/media">
              {t("media")}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="trailer-stage" data-reveal="image">
            <TrailerLink />
          </div>
        </div>
      </section>

      <section
        className="section film-story"
        aria-labelledby="synopsis-heading"
      >
        <div className="section-inner">
          <h2
            className="section-title story-statement"
            id="synopsis-heading"
            data-reveal
          >
            <JapaneseLineBreak>
              {locale === "ja"
                ? "言葉は、誰のものか。"
                : "Who gets to own a sentence"}
            </JapaneseLineBreak>
          </h2>
          <div className="story-composition">
            <figure className="story-wide-image" data-reveal="image">
              <Image
                src="/static/images/key-visual-office-pull.png"
                width={1680}
                height={945}
                sizes="(max-width: 800px) 100vw, 55vw"
                alt={
                  locale === "ja"
                    ? "スピーチ後のオフィスでエリザベスに連れ出されるカケル"
                    : "Elizabeth casually pulling Kakeru away after an office speech"
                }
              />
            </figure>
            <div className="story-copy" data-reveal>
              {t("synopsisBody")
                .split("\n\n")
                .map((paragraph) => (
                  <p key={paragraph}>
                    <JapaneseLineBreak>{paragraph}</JapaneseLineBreak>
                  </p>
                ))}
              <Link className="film-action" href="/story">
                {t("learnMore")}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section film-characters"
        id="characters"
        aria-labelledby="characters-heading"
      >
        <div className="section-inner">
          <div className="section-heading" data-reveal>
            <h2 className="section-title" id="characters-heading">
              <JapaneseLineBreak>{t("characters")}</JapaneseLineBreak>
            </h2>
            <Link className="film-action" href="/story#characters">
              {t("story")}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="ensemble-grid">
            {characterData.slice(0, 4).map((character) => (
              <Link
                className="ensemble-card"
                href="/story#characters"
                key={character.title}
                data-reveal
              >
                <div className="ensemble-image">
                  <Image
                    src={character.imgSrc}
                    alt={character.name[locale]}
                    width={1200}
                    height={1310}
                    sizes="(max-width: 600px) 100vw, 44vw"
                    style={{ objectPosition: character.focal }}
                  />
                  <span className="ensemble-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div className="ensemble-caption">
                  <div className="ensemble-name">
                    <h3>
                      <CharacterName character={character} locale={locale} />
                    </h3>
                    <p className="ensemble-position">
                      <JapaneseLineBreak>
                        {character.position[locale]}
                      </JapaneseLineBreak>
                    </p>
                  </div>
                  <p className="ensemble-description">
                    <JapaneseLineBreak>
                      {character.description[locale]}
                    </JapaneseLineBreak>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section film-production"
        aria-labelledby="production-heading"
      >
        <div className="section-inner production-composition">
          <div className="production-copy" data-reveal>
            <h2 className="section-title" id="production-heading">
              <JapaneseLineBreak>
                {locale === "ja" ? "制作について" : "Behind the film"}
              </JapaneseLineBreak>
            </h2>
            <p>
              <JapaneseLineBreak>
                {locale === "ja"
                  ? "『秒速5リクエスト』は現在制作中の長編アニメーションです。作品を支える制作スタッフとプロジェクトの記録を紹介します。"
                  : "5 Requests Per Second is an animated feature in progress. Discover the production credits and project notes behind the work."}
              </JapaneseLineBreak>
            </p>
            <Link className="film-action" href="/about">
              {t("about")}
              <span aria-hidden="true">↗</span>
            </Link>
            <a
              className="production-social film-action"
              href={`https://maru-ani.jp/${locale}/journal?filter=5rps`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                locale === "ja"
                  ? "制作の記録（新しいタブ）"
                  : "Production journal (new tab)"
              }
            >
              {locale === "ja" ? "制作の記録" : "Production journal"}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="production-social film-action"
              href={siteMetadata.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("followInstagram")} ${locale === "ja" ? "（新しいタブ）" : "(new tab)"}`}
            >
              {t("followInstagram")}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="production-image" data-reveal="image">
            <Image
              src="/static/images/key-visual-hearing-room.png"
              width={1680}
              height={945}
              sizes="(max-width: 800px) 100vw, 55vw"
              alt={
                locale === "ja"
                  ? "正式なヒアリングの席に座るエリザベスとカケル"
                  : "Elizabeth and Kakeru seated at a formal hearing table"
              }
            />
          </figure>
        </div>
      </section>
    </>
  );
}

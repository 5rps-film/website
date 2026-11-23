"use client";

import Image from "next/image";
import "./home.css";
import type { Authors } from "contentlayer/generated";
import type { CoreContent } from "pliny/utils/contentlayer";
import Link from "@/components/Link";
import { useLocale } from "@/components/LocaleProvider";
import characterData from "@/data/characterData";
import { localizeAuthor } from "@/data/localizedAuthors";
import siteMetadata from "@/data/siteMetadata";
import TrailerLink from "@/components/TrailerLink";
import JapaneseLineBreak from "@/components/JapaneseLineBreak";
import CharacterName from "@/components/CharacterName";

export default function Main({
  contributors,
}: {
  contributors: CoreContent<Authors>[];
}) {
  const { locale, t } = useLocale();
  const synopsis = t("synopsisBody").split("\n\n");
  const journal = `https://maru-ani.jp/${locale}/journal?filter=5rps`;
  const newTab =
    locale === "ja" ? "（新しいタブで開く）" : "(opens in a new tab)";
  const productionSummary =
    locale === "ja"
      ? "制作中の長編アニメーション"
      : "An animated feature in progress";
  return (
    <div className="film-journey">
      <section
        className="poster-opening"
        aria-labelledby="film-title"
        data-header-tone="dark"
      >
        <h1 className="sr-only" id="film-title">
          {t("siteTitle")}
        </h1>
        <picture className="opening-poster">
          <source
            media="(orientation: landscape) and (max-height: 500px)"
            srcSet="/static/images/startup-poster-landscape-compact.webp 1200w, /static/images/startup-poster-landscape-compact-2400.webp 2400w"
            sizes="min(100vw, 178vh)"
            width={1200}
            height={675}
          />
          <source
            media="(max-aspect-ratio: 1/1)"
            srcSet="/static/images/startup-poster-portrait-480.webp 480w, /static/images/startup-poster-portrait-768.webp 768w, /static/images/startup-poster-portrait-1024.webp 1024w, /static/images/startup-poster-portrait-2048.webp 2048w"
            sizes="(max-aspect-ratio: 2/3) 100vw, 67vh"
            width={1024}
            height={1536}
          />
          <img
            src="/static/images/startup-poster-landscape-1664.webp"
            srcSet="/static/images/startup-poster-landscape-768.webp 768w, /static/images/startup-poster-landscape-1200.webp 1200w, /static/images/startup-poster-landscape-1664.webp 1664w, /static/images/startup-poster-landscape-3328.webp 3328w"
            sizes="(min-aspect-ratio: 16/9) 178vh, 100vw"
            width={1664}
            height={936}
            fetchPriority="high"
            alt={
              locale === "ja"
                ? "会議室を出てオフィスを歩く4人。『秒速5リクエスト』監督・脚本：秋山 翔、アニメーション制作：丸の内アニメーションラボ。"
                : "The four engineers leave their meeting room. 5 Requests Per Second. Directed and written by Sho Akiyama. Animation by Marunouchi Animation Labs."
            }
          />
        </picture>
        <div className="poster-controls">
          <div className="poster-controls-inner">
            <p className="film-production-note">
              <span className="film-format">
                {locale === "ja"
                  ? "長編アニメーション映画"
                  : "Animated feature"}
              </span>
              <span className="film-status">
                {locale === "ja" ? "制作中" : "In production"}
              </span>
            </p>
            <a className="poster-trailer-action" href="#trailer">
              {locale === "ja" ? "予告編を見る" : "Watch trailer"}
            </a>
            <nav
              className="poster-sections"
              aria-label={locale === "ja" ? "作品情報" : "Explore the film"}
            >
              <a href="#story-world">{t("story")}</a>
              <a href="#characters">{t("characters")}</a>
              <a href="#production">{t("about")}</a>
            </nav>
          </div>
        </div>
      </section>

      <section
        className="section journey-trailer"
        id="trailer"
        aria-labelledby="trailer-heading"
        data-header-tone="dark"
        data-scroll-scene="trailer"
      >
        <div className="section-inner">
          <div className="journey-heading" data-motion="type">
            <h2 className="journey-display" id="trailer-heading">
              {locale === "ja" ? (
                <span className="compound">予告編</span>
              ) : (
                <>
                  <span>Watch</span>
                  <span>the trailer</span>
                </>
              )}
            </h2>
            <Link className="film-action" href="/media">
              {t("media")}
            </Link>
          </div>
          <div className="cinema-stage">
            <TrailerLink />
          </div>
        </div>
      </section>

      <section
        className="section journey-world"
        id="story-world"
        aria-labelledby="world-heading"
        data-header-tone="dark"
      >
        <div className="section-inner">
          <div className="world-intro">
            <h2 className="section-title" id="world-heading" data-motion="type">
              <span className="compound">{t("story")}</span>
            </h2>
            <p className="world-premise" data-reveal>
              <JapaneseLineBreak>{synopsis[0]}</JapaneseLineBreak>
            </p>
          </div>
          <div className="world-images" data-scroll-scene="stills">
            <figure
              className="world-image world-image-primary"
              data-reveal="image"
            >
              <Link
                className="film-frame"
                href="/media"
                aria-label={
                  locale === "ja"
                    ? "オフィスプレゼンテーション・メディア"
                    : "Office presentation, view media"
                }
              >
                <Image
                  src="/static/images/key-visual-office-pull.png"
                  width={1680}
                  height={945}
                  sizes="(max-width: 800px) 100vw, 60vw"
                  alt={
                    locale === "ja"
                      ? "スピーチ後のオフィスでエリザベスに連れ出されるカケル"
                      : "Elizabeth casually pulling Kakeru away after an office speech"
                  }
                />
              </Link>
              <figcaption>
                {locale === "ja"
                  ? "オフィスプレゼンテーション"
                  : "Office presentation"}
              </figcaption>
            </figure>
            <figure
              className="world-image world-image-secondary"
              data-reveal="image"
            >
              <Link
                className="film-frame"
                href="/media"
                aria-label={
                  locale === "ja"
                    ? "ヒアリングルーム・メディア"
                    : "Hearing room, view media"
                }
              >
                <Image
                  src="/static/images/key-visual-hearing-room.png"
                  width={1680}
                  height={945}
                  sizes="(max-width: 800px) 100vw, 40vw"
                  alt={
                    locale === "ja"
                      ? "正式なヒアリングの席に座るエリザベスとカケル"
                      : "Elizabeth and Kakeru seated at a formal hearing table"
                  }
                />
              </Link>
              <figcaption>
                {locale === "ja" ? "ヒアリングルーム" : "Hearing room"}
              </figcaption>
            </figure>
          </div>
          <div className="world-consequence">
            <p data-reveal>
              <JapaneseLineBreak>{synopsis[1]}</JapaneseLineBreak>
            </p>
            <Link className="film-action" href="/story">
              {t("learnMore")}
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section journey-characters"
        id="characters"
        aria-labelledby="characters-heading"
        data-header-tone="dark"
      >
        <div className="section-inner">
          <h2
            className="section-title"
            id="characters-heading"
            data-motion="type"
          >
            <span className="compound">{t("characters")}</span>
          </h2>
          <div className="character-editorial-list">
            {characterData.map((character) => (
              <article
                className="character-editorial-row"
                key={character.title}
                data-motion="character"
              >
                <Link
                  className="character-editorial-image"
                  href={`/story#${character.title.toLowerCase().replaceAll(" ", "-")}`}
                  aria-label={`${t("story")}: ${character.name[locale]}`}
                >
                  <Image
                    src={character.imgSrc}
                    alt={character.name[locale]}
                    width={1680}
                    height={945}
                    sizes="(max-width: 800px) 100vw, 30vw"
                  />
                </Link>
                <div className="character-editorial-copy">
                  <h3>
                    <CharacterName character={character} locale={locale} />
                  </h3>
                  <p>
                    <JapaneseLineBreak>
                      {character.description[locale]}
                    </JapaneseLineBreak>
                  </p>
                </div>
                <div className="character-editorial-detail">
                  <p>
                    <JapaneseLineBreak>
                      {character.position[locale]}
                    </JapaneseLineBreak>
                  </p>
                  <Link
                    className="film-action"
                    href={`/story#${character.title.toLowerCase().replaceAll(" ", "-")}`}
                  >
                    {t("story")}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section journey-production"
        id="production"
        aria-labelledby="production-heading"
        data-header-tone="light"
      >
        <div className="section-inner">
          <div className="production-intro">
            <h2
              className="section-title"
              id="production-heading"
              data-motion="type"
            >
              <JapaneseLineBreak>
                {locale === "ja" ? "制作陣" : "Behind the film"}
              </JapaneseLineBreak>
            </h2>
            <div data-reveal>
              <p>{productionSummary}</p>
              <p>
                <JapaneseLineBreak>
                  {locale === "ja"
                    ? "作品を支える制作スタッフとプロジェクトの記録を紹介します。"
                    : "Discover the production credits and project notes behind the work."}
                </JapaneseLineBreak>
              </p>
              <Link className="film-action" href="/about">
                {t("about")}
              </Link>
            </div>
          </div>
          <div className="production-contributors" data-motion="contributors">
            {contributors.map((author) => {
              const contributor = localizeAuthor(author, locale);
              return (
                <article className="production-contributor" key={author.slug}>
                  {contributor.avatar && (
                    <Image
                      src={contributor.avatar}
                      alt=""
                      width={96}
                      height={96}
                      sizes="96px"
                    />
                  )}
                  <h3>{contributor.name}</h3>
                  <p>
                    <JapaneseLineBreak>
                      {contributor.occupation || ""}
                    </JapaneseLineBreak>
                  </p>
                </article>
              );
            })}
            <a
              className="production-journal-card"
              href={journal}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${locale === "ja" ? "制作の記録" : "Production journal"} — Marunouchi Animation Labs ${newTab}`}
            >
              <Image
                className="studio-mark studio-mark-card"
                src="/static/images/maru-ani-mark.svg"
                alt=""
                width={64}
                height={64}
              />
              <div>
                <h3>
                  <JapaneseLineBreak>
                    {locale === "ja" ? "制作の記録" : "Production journal"}
                  </JapaneseLineBreak>
                </h3>
                <p>Marunouchi Animation Labs</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section
        className="section journey-follow"
        aria-labelledby="follow-heading"
        data-header-tone="dark"
      >
        <div className="section-inner">
          <a
            className="closing-invitation"
            href={siteMetadata.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t("followInstagram")} ${newTab}`}
            data-motion="closing"
          >
            <h2 className="closing-type" id="follow-heading">
              {(locale === "ja"
                ? ["制作の進行を", "フォロー"]
                : ["Follow", "the film"]
              ).map((line) => (
                <span className="closing-mask" key={line}>
                  <span>{line}</span>
                </span>
              ))}
            </h2>
            <span className="closing-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <div className="follow-pathways">
            <p>{t("followInstagram")}</p>
            <a
              className="film-action"
              href={siteMetadata.discord}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Discord ${newTab}`}
            >
              Discord
            </a>
            <a
              className="film-action"
              href={journal}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${locale === "ja" ? "制作の記録" : "Production journal"} — Marunouchi Animation Labs ${newTab}`}
            >
              <Image
                className="studio-mark"
                src="/static/images/maru-ani-mark.svg"
                alt=""
                width={24}
                height={24}
              />
              {locale === "ja" ? "制作の記録" : "Production journal"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

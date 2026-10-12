"use client";

import Image from "next/image";
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
  const status =
    locale === "ja"
      ? "制作中の長編アニメーション"
      : "An animated feature in progress";

  return (
    <div className="film-journey">
      <section
        className="film-opening"
        aria-labelledby="film-title"
        data-header-tone="dark"
        data-scroll-scene="hero"
      >
        <div className="opening-image-frame">
          <Image
            className="opening-image"
            src="/static/images/key-visual-meeting-room.png"
            fill
            priority
            sizes="100vw"
            alt=""
          />
        </div>
        <div className="opening-content">
          <p
            className="opening-translation"
            lang={locale === "ja" ? "en" : "ja"}
          >
            {locale === "ja" ? "5 Requests Per Second" : "秒速5リクエスト"}
          </p>
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
            <p className="opening-status">{status}</p>
            <a className="film-action" href="#trailer">
              {locale === "ja" ? "予告編を見る" : "Watch trailer"}
              <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
      </section>

      <nav
        className="journey-rail"
        aria-label={
          locale === "ja" ? "このページのコンテンツ" : "Explore the film"
        }
        data-header-tone="dark"
      >
        <div className="section-inner journey-rail-inner">
          <a href="#trailer">
            {locale === "ja" ? "予告編" : "Trailer"}
            <span aria-hidden="true">↘</span>
          </a>
          <a href="#story-world">
            {t("story")}
            <span aria-hidden="true">↘</span>
          </a>
          <a href="#characters">
            {t("characters")}
            <span aria-hidden="true">↘</span>
          </a>
          <a href="#production">
            {t("about")}
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </nav>

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
              <span aria-hidden="true">↗</span>
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
                <span aria-hidden="true">↗</span>
              </figcaption>
            </figure>
            <figure
              className="world-image world-image-secondary"
              data-reveal="image"
            >
              <Link
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
                <span aria-hidden="true">↗</span>
              </figcaption>
            </figure>
          </div>
          <div className="world-consequence">
            <p data-reveal>
              <JapaneseLineBreak>{synopsis[1]}</JapaneseLineBreak>
            </p>
            <Link className="film-action" href="/story">
              {t("learnMore")}
              <span aria-hidden="true">↗</span>
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
                    <span aria-hidden="true">↗</span>
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
              <p>{status}</p>
              <p>
                <JapaneseLineBreak>
                  {locale === "ja"
                    ? "作品を支える制作スタッフとプロジェクトの記録を紹介します。"
                    : "Discover the production credits and project notes behind the work."}
                </JapaneseLineBreak>
              </p>
              <Link className="film-action" href="/about">
                {t("about")}
                <span aria-hidden="true">↗</span>
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
              aria-label={`${locale === "ja" ? "制作の記録" : "Production journal"} ${newTab}`}
            >
              <h3>
                <JapaneseLineBreak>
                  {locale === "ja" ? "制作の記録" : "Production journal"}
                </JapaneseLineBreak>
              </h3>
              <p>Marunouchi Animation Labs</p>
              <span aria-hidden="true">↗</span>
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
              Discord<span aria-hidden="true">↗</span>
            </a>
            <a
              className="film-action"
              href={journal}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${locale === "ja" ? "制作の記録" : "Production journal"} ${newTab}`}
            >
              {locale === "ja" ? "制作の記録" : "Production journal"}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

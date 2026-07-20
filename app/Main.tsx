"use client";

import Image from "next/image";
import Link from "@/components/Link";
import { formatDate } from "pliny/utils/formatDate";
import { useLocale } from "@/components/LocaleProvider";
import siteMetadata from "@/data/siteMetadata";
import { localizePosts } from "@/data/localizedPosts";
import characterData from "@/data/characterData";
import TrailerLink from "@/components/TrailerLink";
import JapaneseLineBreak from "@/components/JapaneseLineBreak";
import CharacterName from "@/components/CharacterName";

export default function Main({ posts }) {
  const { locale, t } = useLocale();
  const news = localizePosts(posts, locale).slice(0, 3);
  const dateLocale = locale === "ja" ? "ja-JP" : siteMetadata.locale;
  return (
    <>
      <section className="hero" aria-labelledby="film-title">
        <div className="hero-content">
          <div className="hero-copy">
            <div className="eyebrow">Animated feature · 長編アニメーション</div>
            <h1 className="hero-title" id="film-title">
              <span className="hero-title-main">
                <span className="title-group">秒速</span>
                <span className="title-group">5リクエスト</span>
              </span>
              <small>5 Requests Per Second</small>
            </h1>
            <p className="hero-premise">
              <JapaneseLineBreak>
                {t("synopsisBody").split("\n\n")[0]}
              </JapaneseLineBreak>
            </p>
            <div className="hero-actions">
              <a className="text-action" href="#trailer">
                <span className="action-box">▶</span>
                {locale === "ja" ? "予告編を見る" : "Watch trailer"}
              </a>
              <Link className="text-action" href="/story">
                <span className="action-box">↘</span>
                {t("story")}
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-rail" aria-hidden="true">
          <div className="request-rail">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
      <section className="section statement">
        <div className="section-inner">
          <div className="section-kicker">01 / request received</div>
          <div className="statement-copy">
            <h2 className="section-title">
              <JapaneseLineBreak>
                {locale === "ja"
                  ? "言葉は、誰のものか。"
                  : "Who gets to own a sentence"}
              </JapaneseLineBreak>
            </h2>
            <div className="statement-synopsis">
              {t("synopsisBody")
                .split("\n\n")
                .map((paragraph) => (
                  <p key={paragraph}>
                    <JapaneseLineBreak>{paragraph}</JapaneseLineBreak>
                  </p>
                ))}
            </div>
            <Link className="text-action" href="/story">
              <span className="action-box">↗</span>
              {t("learnMore")}
            </Link>
          </div>
        </div>
      </section>
      <section className="section split-section">
        <div className="section-inner split-grid">
          <div>
            <div className="section-kicker">02 / the story</div>
            <h2 className="section-title">
              <JapaneseLineBreak>{t("synopsis")}</JapaneseLineBreak>
            </h2>
            <p>
              <JapaneseLineBreak>{t("synopsisBody")}</JapaneseLineBreak>
            </p>
            <Link className="link-row" href="/story">
              {t("story")} <span>↗</span>
            </Link>
          </div>
          <figure className="art-frame">
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
        </div>
      </section>
      <section className="section characters-section" id="characters">
        <div className="section-inner">
          <div className="section-kicker">03 / the ensemble</div>
          <h2 className="section-title">
            <span className="compound">{t("characters")}</span>
          </h2>
          <div className="character-grid">
            {characterData.slice(0, 4).map((character, index) => (
              <Link
                className="character-panel"
                href="/story#characters"
                key={character.title}
              >
                <span className="character-index">0{index + 1}</span>
                <Image
                  src={character.imgSrc}
                  alt={character.name[locale]}
                  width={1200}
                  height={1310}
                  sizes="(max-width: 800px) 50vw, 25vw"
                  style={{ objectPosition: character.focal }}
                />
                <div className="character-panel-content">
                  <h3>
                    <CharacterName character={character} locale={locale} />
                  </h3>
                  <p>
                    <span className="compound">
                      <JapaneseLineBreak>
                        {character.position[locale]}
                      </JapaneseLineBreak>
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section trailer-section" id="trailer">
        <div className="section-inner trailer-wrap">
          <TrailerLink />
          <div>
            <div className="section-kicker">04 / trailer 01</div>
            <h2 className="section-title">
              <JapaneseLineBreak>{t("media")}</JapaneseLineBreak>
            </h2>
            <p>
              <JapaneseLineBreak>
                {locale === "ja"
                  ? "予告編と制作の記録。"
                  : "The trailer, and the record of making it."}
              </JapaneseLineBreak>
            </p>
            <Link className="text-action" href="/media">
              <span className="action-box">↗</span>
              {locale === "ja" ? "メディアページ" : "View media"}
            </Link>
          </div>
        </div>
      </section>
      <section className="section news-section">
        <div className="section-inner">
          <div className="section-kicker">05 / dispatches</div>
          <h2 className="section-title">
            <JapaneseLineBreak>{t("news")}</JapaneseLineBreak>
          </h2>
          <div className="news-list">
            {news.map((post) => (
              <Link
                className="news-row"
                href={`/news/${post.slug}`}
                key={post.slug}
              >
                <time className="news-date" dateTime={post.date}>
                  {formatDate(post.date, dateLocale)}
                </time>
                <JapaneseLineBreak className="news-title">
                  {post.title}
                </JapaneseLineBreak>
                <span className="news-arrow">↗</span>
              </Link>
            ))}
          </div>
          <Link className="text-action" href="/news">
            <span className="action-box">↗</span>
            {t("allPostsLink")}
          </Link>
        </div>
      </section>
    </>
  );
}

"use client";
import Image from "next/image";
import characterData from "@/data/characterData";
import StorySynopsis from "@/components/StorySynopsis";
import { useLocale } from "@/components/LocaleProvider";
import { pickLocalized } from "@/lib/i18n";

export default function Story() {
  const { locale, t } = useLocale();
  return (
    <>
      <section className="page-intro">
        <div className="page-intro-inner">
          <div className="section-kicker">01 / {t("story")}</div>
          <h1 className="section-title">
            <span className="compound">{t("story")}</span>
          </h1>
        </div>
      </section>
      <div className="page-content">
        <div className="editorial-copy">
          <StorySynopsis />
        </div>
        <div
          id="characters"
          className="section-kicker"
          style={{ marginTop: 100 }}
        >
          02 / <span className="compound">{t("characters")}</span>
        </div>
        <div className="story-character-list">
          {characterData.slice(0, 4).map((character) => (
            <article className="story-character" key={character.title}>
              <Image
                src={character.imgSrc}
                alt={character.title}
                width={982}
                height={500}
              />
              <div>
                <h2>{character.title}</h2>
                <p>{pickLocalized(character.description, locale)}</p>
                <p style={{ color: "var(--wine)" }}>
                  <span className="compound">
                    {pickLocalized(character.position, locale)}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

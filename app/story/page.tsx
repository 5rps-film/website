"use client";
import Image from "next/image";
import characterData from "@/data/characterData";
import StorySynopsis from "@/components/StorySynopsis";
import { useLocale } from "@/components/LocaleProvider";
import { pickLocalized } from "@/lib/i18n";
import JapaneseLineBreak from "@/components/JapaneseLineBreak";
import CharacterName from "@/components/CharacterName";

export default function Story() {
  const { locale, t } = useLocale();
  return (
    <>
      <section className="page-intro">
        <div className="page-intro-inner">
          <div className="section-kicker">01 / {t("story")}</div>
          <h1 className="section-title">
            <span className="compound">
              <JapaneseLineBreak>{t("story")}</JapaneseLineBreak>
            </span>
          </h1>
        </div>
      </section>
      <div className="page-content">
        <figure className="story-lead-visual">
          <Image
            src="/static/images/key-visual-hearing-room.png"
            alt={
              locale === "ja"
                ? "正式なヒアリングの席に座るリズとカケル"
                : "Elizabeth and Kakeru seated at a formal hearing table"
            }
            width={1680}
            height={945}
            sizes="(max-width: 800px) 100vw, 1240px"
            priority
          />
          <figcaption>
            {locale === "ja" ? "キービジュアル 03" : "Key visual 03"}
          </figcaption>
        </figure>
        <div className="editorial-copy">
          <StorySynopsis />
        </div>
        <div
          id="characters"
          className="section-kicker"
          style={{ marginTop: 100 }}
        >
          02 /{" "}
          <span className="compound">
            <JapaneseLineBreak>{t("characters")}</JapaneseLineBreak>
          </span>
        </div>
        <div className="story-character-list">
          {characterData.slice(0, 4).map((character) => (
            <article className="story-character" key={character.title}>
              <Image
                src={character.imgSrc}
                alt={pickLocalized(character.name, locale)}
                width={982}
                height={500}
              />
              <div>
                <h2>
                  <CharacterName character={character} locale={locale} />
                </h2>
                <p>
                  <JapaneseLineBreak>
                    {pickLocalized(character.description, locale)}
                  </JapaneseLineBreak>
                </p>
                <p style={{ color: "var(--wine)" }}>
                  <span className="compound">
                    <JapaneseLineBreak>
                      {pickLocalized(character.position, locale)}
                    </JapaneseLineBreak>
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

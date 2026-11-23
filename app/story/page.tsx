"use client";
import Image from "next/image";
import characterData from "@/data/characterData";
import StorySynopsis from "@/components/StorySynopsis";
import { useLocale } from "@/components/LocaleProvider";
import { pickLocalized } from "@/lib/i18n";
import JapaneseLineBreak from "@/components/JapaneseLineBreak";
import CharacterName from "@/components/CharacterName";
import "@/components/interior-pages.css";

export default function Story() {
  const { locale, t } = useLocale();
  return (
    <div className="interior-page story-page">
      <section className="page-intro">
        <div className="page-intro-inner">
          <h1 className="section-title" data-reveal>
            <span className="compound">
              <JapaneseLineBreak>{t("story")}</JapaneseLineBreak>
            </span>
          </h1>
        </div>
      </section>
      <div className="page-content">
        <figure className="story-lead-visual film-frame" data-reveal>
          <Image
            src="/static/images/key-visual-hearing-room.png"
            alt={
              locale === "ja"
                ? "正式なヒアリングの席に座るリズとカケル"
                : "Elizabeth and Kakeru seated at a formal hearing table"
            }
            width={1672}
            height={941}
            sizes="(max-width: 800px) 100vw, 1240px"
            priority
          />
        </figure>
        <div className="editorial-copy" data-reveal>
          <StorySynopsis />
        </div>
        <h2 id="characters" className="section-title" data-reveal>
          <span className="compound">
            <JapaneseLineBreak>{t("characters")}</JapaneseLineBreak>
          </span>
        </h2>
        <div className="story-character-list">
          {characterData.slice(0, 4).map((character, index) => (
            <article
              className="story-character"
              id={character.title.toLowerCase().replaceAll(" ", "-")}
              key={character.title}
              data-reveal
            >
              <Image
                src={character.imgSrc}
                alt={pickLocalized(character.name, locale)}
                width={[1672, 1757, 1758, 1758][index]}
                height={[941, 895, 895, 895][index]}
                sizes="(max-width: 600px) 100vw, 30vw"
                style={{ objectPosition: "center 30%" }}
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
    </div>
  );
}

import type { Character } from "@/data/characterData";
import type { Locale } from "@/lib/i18n";

interface CharacterNameProps {
  character: Pick<Character, "name" | "nameRuby">;
  locale: Locale;
}

export default function CharacterName({
  character,
  locale,
}: CharacterNameProps) {
  if (locale !== "ja" || !character.nameRuby) {
    return character.name[locale];
  }

  return character.nameRuby.map(({ text, reading }, index) => (
    <span className="character-name-group" key={text}>
      {index > 0 ? " " : null}
      <ruby>
        {text}
        <rt>{reading}</rt>
      </ruby>
    </span>
  ));
}

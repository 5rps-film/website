import { LocalizedString } from "@/lib/i18n";

interface Character {
  title: string;
  description: LocalizedString;
  imgSrc: string;
  focal: string;
  position: LocalizedString;
}

const projectsData: Character[] = [
  {
    title: "Kakeru Haruyama",
    description: {
      en: `A morally ambiguous engineer-turned-founder, shaped by past missteps in Silicon Valley and pushed into fraud by bankruptcy upon arriving in Tokyo.`,
      ja: `シリコンバレーでの過去の失敗を背負い、東京到着後の破産をきっかけに詐欺へ踏み込んでいく、倫理的に危ういエンジニア出身の創業者。`,
    },
    position: { en: "Startup Founder", ja: "スタートアップ創業者" },
    imgSrc: "/static/characters/kakeru-regenerated.png",
    focal: "20% 24%",
  },
  {
    title: "Elizabeth Rohm",
    description: {
      en: `A sharp, no-nonsense engineer who joins as CTO at a questionable startup. She makes the move after becoming frustrated with her micromanaging boss and the lack of real challenges at her main job, even though she is known as a "celebrity engineer" in Tokyo's tech scene.`,
      ja: `東京のテック界で「セレブリティエンジニア」として知られながら、細かく管理する上司と手応えのない本業に苛立ち、怪しげなスタートアップへCTOとして加わる切れ味鋭いエンジニア。`,
    },
    position: { en: "CTO", ja: "CTO" },
    imgSrc: "/static/characters/liz-regenerated.png",
    focal: "20% 24%",
  },
  {
    title: "Vijay Agarwal",
    description: {
      en: `A brilliant but anxious engineer, childhood friend and former teammate of Kakeru in their San Francisco startup, who fled with him to Japan.`,
      ja: `カケルの幼なじみで、サンフランシスコ時代の元チームメイト。優秀だが不安を抱え、彼とともに日本へ逃げてきたエンジニア。`,
    },
    position: { en: "Tech Lead", ja: "テックリード" },
    imgSrc: "/static/characters/vijay-regenerated.png",
    focal: "20% 24%",
  },
  {
    title: "Sota Kanzaki",
    description: {
      en: `A sincere Japanese master's student and gifted software engineer in formation, working part-time while he turns difficult systems into practical fixes.`,
      ja: `誠実な日本人大学院生。アルバイトとして働きながら、難しいシステムを現実的な修正へ落とし込んでいく、将来有望なソフトウェアエンジニア。`,
    },
    position: { en: "Software Engineer", ja: "ソフトウェアエンジニア" },
    imgSrc: "/static/characters/sota-regenerated.png",
    focal: "20% 24%",
  },
];

export default projectsData;

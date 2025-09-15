interface Character {
  title: string;
  description: string;
  imgSrc: string;
  position: string;
}

const projectsData: Character[] = [
  {
    title: "Kakeru Haruyama",
    description: `A morally ambiguous engineer-turned-founder, shaped by past missteps in Silicon Valley and pushed into fraud by bankruptcy upon arriving in Tokyo.`,
    position: "Startup Founder",
    imgSrc: "/static/characters/kakeru.jpg",
  },
  {
    title: "Elizabeth Rohm",
    description: `A sharp, no-nonsense engineer, frustrated by her micromanaging boss and the lack of real challenge, despite being a "celebrity engineer" in Tokyo’s tech scene`,
    position: "CTO",
    imgSrc: "/static/characters/liz.jpg",
  },
  {
    title: "Vijay Agarwal",
    description: `A brilliant but anxious engineer, childhood friend and former teammate of Kakeru in their San Francisco startup, who fled with him to Japan`,
    position: "Tech Lead",
    imgSrc: "/static/characters/vijay.jpg",
  },
  {
    title: "Yusuf Avcı",
    description: `A high school exchange student and coding prodigy, juggling part-time work to make ends meet
`,
    position: "Full-stack Engineer",
    imgSrc: "/static/characters/yusuf.jpg",
  },
];

export default projectsData;

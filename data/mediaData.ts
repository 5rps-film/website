import { LocalizedString } from "@/lib/i18n";

interface Project {
  title: LocalizedString;
  description: LocalizedString;
  href?: string;
  imgSrc?: string;
}

const projectsData: Project[] = [
  {
    title: { en: "Official Instagram Page", ja: "公式Instagram" },
    description: {
      en: `Our main content is on Instagram.`,
      ja: `メインの制作更新はInstagramで公開しています。`,
    },
    imgSrc: "/static/images/instagram.jpg",
    href: "https://instagram.com/5requestspersecond",
  },
  {
    title: { en: "Official X Page", ja: "公式X" },
    description: {
      en: `We are also on X.`,
      ja: `Xでも最新情報を発信しています。`,
    },
    imgSrc: "/static/images/x.jpg",
    href: "https://x.com/5rps_film",
  },
  {
    title: { en: "Official LinkedIn Page", ja: "公式LinkedIn" },
    description: {
      en: `We are also on LinkedIn.`,
      ja: `LinkedInにも公式ページがあります。`,
    },
    imgSrc: "/static/images/linkedin-regenerated.png",
    href: "https://www.linkedin.com/company/5rps-film",
  },
];

export default projectsData;

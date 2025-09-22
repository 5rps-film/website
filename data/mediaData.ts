interface Project {
  title: string;
  description: string;
  href?: string;
  imgSrc?: string;
}

const projectsData: Project[] = [
  {
    title: "Official Instagram Page",
    description: `Our main content is on Instagram!`,
    imgSrc: "/static/images/instagram.jpg",
    href: "https://instagram.com/5requestspersecond",
  },
  {
    title: "Official X Page",
    description: `We are also on X!`,
    imgSrc: "/static/images/x.jpg",
    href: "https://x.com/5rps_film",
  },
  {
    title: "Official LinkedIn Page",
    description: `We are also on LinkedIn!`,
    imgSrc: "/static/images/linkedin.jpg",
    href: "https://www.linkedin.com/company/5rps-film",
  },
];

export default projectsData;

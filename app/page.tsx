import { allAuthors } from "contentlayer/generated";
import { coreContent } from "pliny/utils/contentlayer";
import Main from "./Main";

export default function Page() {
  const contributors = ["s", "marketing", "shinobi", "yihong", "dondon"]
    .flatMap((slug) => allAuthors.filter((author) => author.slug === slug))
    .map(coreContent);
  return <Main contributors={contributors} />;
}

import type { ReactNode } from "react";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({
  title: "Story",
  description:
    "Read the story and meet the central characters of the animated feature film 5 Requests Per Second / 秒速5リクエスト.",
  path: "/story",
  image: "/static/images/key-visual-hearing-room.png",
});

export default function StoryLayout({ children }: { children: ReactNode }) {
  return children;
}

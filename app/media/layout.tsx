import type { ReactNode } from "react";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({
  title: "Media",
  description:
    "Watch the official trailer and view key visuals for the animated feature film 5 Requests Per Second / 秒速5リクエスト.",
  path: "/media",
  image: "/static/images/header-regenerated.png",
});

export default function MediaLayout({ children }: { children: ReactNode }) {
  return children;
}

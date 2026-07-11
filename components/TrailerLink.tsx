"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";

const YOUTUBE_URL = "https://www.youtube.com/watch?v=RHOlJCpDuPM";

export default function TrailerLink() {
  const { locale } = useLocale();
  const label =
    locale === "ja"
      ? "YouTubeで予告編を見る（新しいタブで開きます）"
      : "Watch the trailer on YouTube (opens in a new tab)";

  return (
    <a
      className="trailer-thumb"
      href={YOUTUBE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Image
        src="/static/images/header-regenerated.png"
        alt=""
        width={1450}
        height={1088}
        sizes="(max-width: 800px) 100vw, 65vw"
      />
      <span className="play-mark" aria-hidden="true">
        ▶
      </span>
      <span className="trailer-new-tab">{label} ↗</span>
    </a>
  );
}

"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";

export default function TrailerLink() {
  const { locale } = useLocale();
  const label =
    locale === "ja"
      ? "YouTubeで予告編を見る（新しいタブ）"
      : "Watch on YouTube (new tab)";

  return (
    <a
      className="trailer-thumb"
      href="https://www.youtube.com/watch?v=RHOlJCpDuPM"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Image
        src="/static/images/key-visual-meeting-room.png"
        alt=""
        width={1680}
        height={945}
        sizes="(max-width: 800px) 100vw, 65vw"
      />
      <span className="play-mark" aria-hidden="true">
        ▶
      </span>
      <span className="trailer-new-tab">{label}</span>
    </a>
  );
}

"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import YouTubeModal from "@/components/YouTubeModal";

export default function TrailerLink() {
  const { locale } = useLocale();
  const label =
    locale === "ja" ? "YouTubeで予告編を再生" : "Play the trailer on YouTube";

  return (
    <YouTubeModal className="trailer-thumb" triggerKind="thumbnail">
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
    </YouTubeModal>
  );
}

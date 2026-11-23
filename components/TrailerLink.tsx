"use client";

import Image from "next/image";
import styles from "./TrailerLink.module.css";
import { useLocale } from "@/components/LocaleProvider";

export default function TrailerLink() {
  const { locale } = useLocale();
  const action = locale === "ja" ? "予告編を再生" : "Play trailer";
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
      aria-label={`${action} — ${label}`}
    >
      <span className="trailer-picture film-frame">
        <Image
          src="/static/images/key-visual-meeting-room.png"
          alt=""
          width={1672}
          height={941}
          sizes="(max-width: 800px) 100vw, 70vw"
        />
        <span className={styles.play} aria-hidden="true">
          <span className={styles.disc} />
          <span className={styles.label}>{action}</span>
        </span>
      </span>
      <span className="trailer-new-tab">
        {label}
        <span aria-hidden="true"> ↗</span>
      </span>
    </a>
  );
}

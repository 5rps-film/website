"use client";

import { ReactNode, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "@/components/LocaleProvider";

const TRAILER_ID = "RHOlJCpDuPM";
const TRAILER_EMBED_URL = `https://www.youtube.com/embed/${TRAILER_ID}?si=xXZQ1s91GQCj7GM-&autoplay=1`;

type YouTubeModalProps = {
  children: ReactNode;
  className?: string;
  triggerKind?: "thumbnail" | "text";
};

export function isTrailerYouTubeUrl(href: string): boolean {
  try {
    const url = new URL(href);
    return (
      (url.hostname === "www.youtube.com" &&
        url.pathname === "/watch" &&
        url.searchParams.get("v") === TRAILER_ID) ||
      ((url.hostname === "youtu.be" || url.hostname === "www.youtu.be") &&
        url.pathname.slice(1) === TRAILER_ID)
    );
  } catch {
    return false;
  }
}

export default function YouTubeModal({
  children,
  className,
  triggerKind = "text",
}: YouTubeModalProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const { locale } = useLocale();

  const playLabel =
    locale === "ja"
      ? "YouTubeで『秒速5リクエスト』の予告編を再生"
      : "Play the 5 Requests Per Second trailer on YouTube";
  const dialogTitle =
    locale === "ja"
      ? "『秒速5リクエスト』予告編"
      : "5 Requests Per Second trailer";
  const closeLabel = locale === "ja" ? "予告編を閉じる" : "Close trailer";

  useEffect(() => {
    if (!open) return;

    const background = [
      document.querySelector("header"),
      document.querySelector("main"),
      document.querySelector("footer"),
    ].filter(
      (element): element is HTMLElement => element instanceof HTMLElement,
    );
    const previousOverflow = document.body.style.overflow;

    background.forEach((element) => {
      element.inert = true;
    });
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      background.forEach((element) => {
        element.inert = false;
      });
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        className={
          triggerKind === "thumbnail"
            ? `${className || ""} youtube-modal-thumbnail-trigger`.trim()
            : `${className || ""} youtube-modal-text-trigger`.trim()
        }
        type="button"
        aria-label={playLabel}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      {open &&
        createPortal(
          <div
            className="youtube-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <div
              ref={dialogRef}
              className="youtube-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
            >
              <div className="youtube-modal-header">
                <h2 id={titleId}>{dialogTitle}</h2>
                <button
                  ref={closeRef}
                  className="youtube-modal-close"
                  type="button"
                  aria-label={closeLabel}
                  onClick={() => setOpen(false)}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="youtube-modal-player">
                <iframe
                  src={TRAILER_EMBED_URL}
                  title={dialogTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "./Link";
import LocaleSwitch from "./LocaleSwitch";
import { useLocale } from "@/components/LocaleProvider";

const links = [
  ["/", "home"],
  ["/story", "story"],
  ["/media", "media"],
  ["/news", "news"],
  ["/about", "about"],
] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    if (!open) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const background = [
      document.querySelector("main"),
      document.querySelector("footer"),
    ].filter(
      (element): element is HTMLElement => element instanceof HTMLElement,
    );

    background.forEach((element) => {
      element.inert = true;
    });
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      background.forEach((element) => {
        element.inert = false;
      });
      (previousFocus || openerRef.current)?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={openerRef}
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={t("toggleMenu")}
        onClick={() => setOpen(!open)}
      >
        {open ? "×" : "☰"}
      </button>
      {open && (
        <div
          ref={dialogRef}
          id="mobile-menu"
          className="mobile-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label={t("toggleMenu")}
        >
          <button
            ref={closeRef}
            className="mobile-menu-close"
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t("toggleMenu")}
          >
            ×
          </button>
          <div className="mobile-menu-title">{t("siteTitle")}</div>
          <nav className="mobile-menu-nav" aria-label="Mobile navigation">
            {links.map(([href, key], index) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                {t(key)}
              </Link>
            ))}
          </nav>
          <div className="mobile-locale">
            <span>{t("languageSelector")}</span>
            <LocaleSwitch />
          </div>
        </div>
      )}
    </>
  );
}

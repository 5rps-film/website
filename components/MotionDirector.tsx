"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";

// Every element has its final, readable state before motion is enabled.
export default function MotionDirector() {
  const pathname = usePathname();
  const { locale } = useLocale();

  useEffect(() => {
    const root = document.documentElement;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const seen = new WeakSet<Element>();
    const tones = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main [data-header-tone], footer[data-header-tone]",
      ),
    );
    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-scene]"),
    );
    let frame = 0;

    const play = (
      element: Element | null,
      keyframes: Keyframe[],
      duration = 750,
      delay = 0,
    ) => {
      if (!element || preference.matches) return;
      const animation = element.animate(keyframes, {
        duration,
        delay,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      });
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    };
    const rise = (element: Element | null, delay = 0) =>
      play(
        element,
        [
          { opacity: 0, transform: "translateY(22px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        700,
        delay,
      );
    const reveal = (element: HTMLElement) => {
      const kind = element.dataset.motion;
      if (kind === "character") {
        play(
          element.querySelector(".character-editorial-image"),
          [{ clipPath: "inset(0 24% 0 0)" }, { clipPath: "inset(0 0 0 0)" }],
          950,
        );
        rise(element.querySelector(".character-editorial-copy"), 80);
        rise(element.querySelector(".character-editorial-detail"), 180);
      } else if (kind === "contributors") {
        Array.from(element.children).forEach((child, index) =>
          rise(child, index * 55),
        );
      } else if (kind === "closing") {
        element
          .querySelectorAll(".closing-mask > span")
          .forEach((line, index) =>
            play(
              line,
              [
                { transform: "translateY(110%)" },
                { transform: "translateY(0)" },
              ],
              1100,
              index * 120,
            ),
          );
        rise(element.querySelector(".closing-arrow"), 200);
      } else if (kind === "type" || kind === "wordmark") {
        play(
          element.querySelector("h2") || element,
          [
            { clipPath: "inset(0 0 100% 0)", transform: "translateY(18px)" },
            { clipPath: "inset(0 0 0 0)", transform: "translateY(0)" },
          ],
          kind === "wordmark" ? 1100 : 900,
        );
      } else if (element.dataset.reveal === "image") {
        play(
          element,
          [{ clipPath: "inset(6% 3% 6% 3%)" }, { clipPath: "inset(0 0 0 0)" }],
          900,
        );
      } else {
        rise(element);
      }
    };

    let observer: IntersectionObserver | undefined;
    observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (
                  !entry.isIntersecting ||
                  preference.matches ||
                  seen.has(entry.target)
                )
                  return;
                seen.add(entry.target);
                observer?.unobserve(entry.target);
                reveal(entry.target as HTMLElement);
              });
            },
            { threshold: 0.12 },
          )
        : undefined;

    const observe = () => {
      if (preference.matches || !observer) return;
      document
        .querySelectorAll<HTMLElement>("[data-motion], [data-reveal]")
        .forEach((element) => {
          if (
            !seen.has(element) &&
            !element.parentElement?.closest("[data-motion], [data-reveal]")
          )
            observer.observe(element);
        });
    };
    const clamp = (value: number, min = 0, max = 1) =>
      Math.min(max, Math.max(min, value));
    const update = () => {
      frame = 0;
      const height = window.innerHeight;
      let tone = pathname === "/" ? "dark" : "light";
      for (const section of tones) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 90 && rect.bottom > 90)
          tone = section.dataset.headerTone || tone;
      }
      root.dataset.headerTone = tone;
      if (preference.matches) return;
      scenes.forEach((scene) => {
        const kind = scene.dataset.scrollScene;
        const target =
          kind === "trailer"
            ? scene.querySelector(".cinema-stage") || scene
            : scene;
        const rect = target.getBoundingClientRect();
        if (rect.bottom < -height || rect.top > height * 2) return;
        if (kind === "hero") {
          scene.style.setProperty(
            "--scene-progress",
            String(clamp(-rect.top / height)),
          );
        } else if (kind === "trailer") {
          scene.style.setProperty(
            "--scene-progress",
            String(clamp((height - rect.top) / (height * 0.8))),
          );
        } else if (kind === "stills") {
          const offset =
            clamp((rect.top + rect.height / 2 - height / 2) / height, -1, 1) *
            18;
          scene.style.setProperty("--scene-offset", String(offset));
        }
      });
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const syncPreference = () => {
      root.classList.toggle("motion-active", !preference.matches);
      if (preference.matches) {
        observer?.disconnect();
        animations.forEach((animation) => animation.cancel());
        animations.clear();
        scenes.forEach((scene) => {
          scene.style.removeProperty("--scene-progress");
          scene.style.removeProperty("--scene-offset");
        });
      } else observe();
      requestUpdate();
    };

    syncPreference();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    preference.addEventListener("change", syncPreference);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      preference.removeEventListener("change", syncPreference);
      if (frame) window.cancelAnimationFrame(frame);
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      root.classList.remove("motion-active");
      delete root.dataset.headerTone;
      scenes.forEach((scene) => {
        scene.style.removeProperty("--scene-progress");
        scene.style.removeProperty("--scene-offset");
      });
    };
  }, [pathname, locale]);

  return null;
}

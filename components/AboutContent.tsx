"use client";

import type { Authors } from "contentlayer/generated";
import Image from "next/image";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import { coreContent } from "pliny/utils/contentlayer";
import { useLocale } from "@/components/LocaleProvider";
import { components } from "@/components/MDXComponents";
import { localizeAuthor } from "@/data/localizedAuthors";

export default function AboutContent({ authors }: { authors: Authors[] }) {
  const { locale } = useLocale();
  const heading = locale === "ja" ? "制作について" : "About";
  const introduction =
    locale === "ja"
      ? "『秒速5リクエスト』は現在制作中の長編アニメーションです。このページでは、作品を支える制作スタッフとプロジェクトの記録を紹介します。"
      : "5 Requests Per Second is an animated feature in progress. This page keeps the production credits and project notes close to the work.";

  const renderOccupation = (occupation: string) =>
    occupation.split(" / ").map((part, index) => (
      <span key={part}>
        {index > 0 && " / "}
        <span className="compound">{part}</span>
      </span>
    ));

  return (
    <>
      <section className="page-intro">
        <div className="page-intro-inner">
          <div className="section-kicker">01 / production</div>
          <h1 className="section-title">{heading}</h1>
        </div>
      </section>
      <div className="page-content">
        <p className="editorial-copy">{introduction}</p>
        <div className="credits-grid">
          {authors.map((author) => {
            const content = localizeAuthor(coreContent(author), locale);

            return (
              <article className="credit-block" key={author.slug}>
                <div className="credit-heading">
                  {content.avatar && (
                    <Image
                      className="credit-avatar"
                      src={content.avatar}
                      alt=""
                      width={160}
                      height={160}
                      sizes="(max-width: 480px) 72px, 96px"
                    />
                  )}
                  <div>
                    <h2>{content.name}</h2>
                    {content.occupation && (
                      <p>{renderOccupation(content.occupation)}</p>
                    )}
                  </div>
                </div>
                <div className="prose mt-5 max-w-none">
                  <MDXLayoutRenderer
                    code={author.body.code}
                    components={components}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;
  path?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export function genPageMetadata({
  title,
  description,
  image,
  path = "/",
  ...rest
}: PageSEOProps): Metadata {
  const pageDescription = description || siteMetadata.description;
  const canonical = new URL(path, `${siteMetadata.siteUrl}/`).toString();
  const socialImage = new URL(
    image || siteMetadata.socialBanner,
    `${siteMetadata.siteUrl}/`,
  ).toString();

  return {
    title,
    description: pageDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: pageDescription,
      url: canonical,
      siteName: siteMetadata.title,
      images: [socialImage],
      locale: "en_US",
      alternateLocale: ["ja_JP"],
      type: "website",
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      description: pageDescription,
      card: "summary_large_image",
      images: [socialImage],
    },
    ...rest,
  };
}

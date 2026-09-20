import { MetadataRoute } from "next";
import siteMetadata from "@/data/siteMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  const routes = ["", "story", "media", "about"].map(
    (route) => ({
      url: `${siteUrl}/${route}`,
    }),
  );

  return routes;
}

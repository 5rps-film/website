import "css/tailwind.css";
import "pliny/search/algolia.css";

import { Space_Grotesk } from "next/font/google";
import { Analytics, AnalyticsConfig } from "pliny/analytics";
import { SearchProvider, SearchConfig } from "pliny/search";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import Footer from "@/components/Footer";
import siteMetadata from "@/data/siteMetadata";
import { ThemeProviders } from "./theme-providers";
import { Metadata } from "next";
import { LocaleProvider } from "@/components/LocaleProvider";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    type: "website",
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteMetadata.siteUrl}/#organization`,
      name: siteMetadata.title,
      url: siteMetadata.siteUrl,
      logo: new URL(siteMetadata.siteLogo, siteMetadata.siteUrl).toString(),
      sameAs: [siteMetadata.instagram, siteMetadata.discord],
    },
    {
      "@type": "WebSite",
      "@id": `${siteMetadata.siteUrl}/#website`,
      name: siteMetadata.title,
      alternateName: "秒速5リクエスト",
      url: siteMetadata.siteUrl,
      description: siteMetadata.description,
      inLanguage: ["en", "ja"],
      publisher: { "@id": `${siteMetadata.siteUrl}/#organization` },
    },
    {
      "@type": "Movie",
      "@id": `${siteMetadata.siteUrl}/#film`,
      name: siteMetadata.title,
      alternateName: "秒速5リクエスト",
      url: siteMetadata.siteUrl,
      description: siteMetadata.description,
      image: new URL(
        siteMetadata.socialBanner,
        siteMetadata.siteUrl,
      ).toString(),
      inLanguage: ["en", "ja"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProviders>
          <LocaleProvider>
            <Analytics
              analyticsConfig={siteMetadata.analytics as AnalyticsConfig}
            />
            <SectionContainer>
              <div className="site-shell font-sans">
                <SearchProvider
                  searchConfig={siteMetadata.search as SearchConfig}
                >
                  <Header />
                  <main>{children}</main>
                </SearchProvider>
                <Footer />
              </div>
            </SectionContainer>
          </LocaleProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}

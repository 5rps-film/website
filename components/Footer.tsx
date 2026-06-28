"use client";

import Link from "./Link";
import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/components/social-icons";
import { useLocale } from "@/components/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="discord" href={siteMetadata.discord} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{t("siteTitle")}</Link>
        </div>
      </div>
    </footer>
  );
}

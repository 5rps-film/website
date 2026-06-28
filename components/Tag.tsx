"use client";

import Link from "next/link";
import { slug } from "github-slugger";
import { useLocale } from "@/components/LocaleProvider";
import { localizeTag } from "@/data/localizedTags";

interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  const { locale } = useLocale();
  const label = localizeTag(text, locale);

  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {label.split(" ").join("-")}
    </Link>
  );
};

export default Tag;

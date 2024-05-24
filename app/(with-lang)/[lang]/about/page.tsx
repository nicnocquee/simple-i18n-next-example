import {
  SupportedLanguage,
  aboutCarWithCount,
  aboutDescription,
  aboutNestedKey,
  aboutTitle,
  english,
  german,
} from "@/locales/.generated/server";
import Link from "next/link";

export default function AboutPage({
  params: { lang },
}: Readonly<{ params: { lang: SupportedLanguage } }>) {
  return (
    <div>
      <h1>{aboutTitle(lang)}</h1>
      <p>{aboutDescription(lang)}</p>
      <p>{aboutCarWithCount(lang, 1)}</p>
      <p>{aboutCarWithCount(lang, 10)}</p>
      <p>{aboutNestedKey(lang)}</p>
      <div>
        <Link className="underline font-bold" href={`/en/about`}>
          {english(lang)}
        </Link>
        <Link className="underline font-bold" href={`/de/about`}>
          {german(lang)}
        </Link>
      </div>
    </div>
  );
}

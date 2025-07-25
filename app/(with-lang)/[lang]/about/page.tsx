import {
  aboutCarWithCount,
  aboutDescription,
  aboutNestedKey,
  aboutTitle,
  english,
  german,
} from "@/locales/.generated/strings";
import { SupportedLanguage } from "@/locales/.generated/types";
import Link from "next/link";

export default async function AboutPage({
  params,
}: Readonly<{ params: Promise<{ lang: SupportedLanguage }> }>) {
  const { lang } = await params;
  return (
    <div>
      <h1>{aboutTitle(lang)}</h1>
      <p>{aboutDescription(lang)}</p>
      <p>{aboutCarWithCount(lang, 1)}</p>
      <p>{aboutCarWithCount(lang, 10)}</p>
      <p>{aboutNestedKey(lang)}</p>
      <div>
        <Link
          prefetch={false}
          className="underline font-bold"
          href={`/en/about`}
        >
          {english(lang)}
        </Link>
        <Link
          prefetch={false}
          className="underline font-bold"
          href={`/de/about`}
        >
          {german(lang)}
        </Link>
      </div>
    </div>
  );
}

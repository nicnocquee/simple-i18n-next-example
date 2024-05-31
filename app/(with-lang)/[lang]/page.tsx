import { Index } from "@/locales/.generated/locales-markdown";
import {
  bookWithCount,
  english,
  german,
  goToClient,
  greeting,
  info,
  movieWithOrdinalCount,
  title,
  clientTitle,
  clientGreeting,
  clientBye,
} from "@/locales/.generated/server";
import Link from "next/link";

import {
  SupportedLanguage, // this is the type
  defaultLanguage, // this is the default language
  supportedLanguages, // this is the array of supported languages
} from "@/locales/.generated/types";

export const generateStaticParams = () => {
  return supportedLanguages.map((lang) => ({ lang }));
};

export const dynamicParams = false;

export default function Home({
  params: { lang = defaultLanguage },
}: Readonly<{ params: { lang: SupportedLanguage } }>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{title(lang)}</h1>
      <p>{greeting(lang, { name: "John" })}</p>
      <p>{info(lang)}</p>
      <div>
        <p>{movieWithOrdinalCount(lang, 1)}</p>
        <p>{movieWithOrdinalCount(lang, 2)}</p>
        <p>{movieWithOrdinalCount(lang, 3)}</p>
        <p>{movieWithOrdinalCount(lang, 4)}</p>
        <p>{movieWithOrdinalCount(lang, 5)}</p>
      </div>
      <div>
        <p>{bookWithCount(lang, 1)}</p>
        <p>{bookWithCount(lang, 2)}</p>
        <p>{bookWithCount(lang, 3)}</p>
        <p>{bookWithCount(lang, 4)}</p>
        <p>{bookWithCount(lang, 5)}</p>
      </div>
      <div>
        <p>Nested keys:</p>
        <p>{clientTitle(lang)}</p>
        <p>{clientGreeting(lang, { name: "John" })}</p>
        <p>{clientBye(lang, { name: "John" })}</p>
      </div>
      <Index lang={lang} />
      <Link
        prefetch={false}
        className="underline font-bold"
        href={`/${lang}/client`}
      >
        {goToClient(lang)}
      </Link>
      <div className="space-x-4">
        <Link prefetch={false} className="underline font-bold" href={`/en`}>
          {english(lang)}
        </Link>
        <Link prefetch={false} className="underline font-bold" href={`/de`}>
          {german(lang)}
        </Link>
        <Link
          prefetch={false}
          className="underline font-bold"
          href={`/${lang}/about`}
        >
          {`About page`}
        </Link>
      </div>
    </main>
  );
}

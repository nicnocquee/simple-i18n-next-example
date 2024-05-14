import { Index } from "@/locales/.generated/locales-markdown";
import {
  SupportedLanguage,
  english,
  german,
  goToClient,
  greeting,
  info,
  title,
} from "@/locales/.generated/server";
import Link from "next/link";

export const generateStaticParams = () => {
  return ["en", "de"].map((lang) => ({ lang }));
};

export const dynamicParams = false;

export default function Home({
  params: { lang },
}: Readonly<{ params: { lang: SupportedLanguage } }>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{title(lang)}</h1>
      <p>{greeting(lang, { name: "John" })}</p>
      <p>{info(lang)}</p>
      <Index lang={lang} />
      <Link className="underline font-bold" href={`/${lang}/client`}>
        {goToClient(lang)}
      </Link>
      <div className="space-x-4">
        <Link className="underline font-bold" href={`/en`}>
          {english(lang)}
        </Link>
        <Link className="underline font-bold" href={`/de`}>
          {german(lang)}
        </Link>
      </div>
    </main>
  );
}

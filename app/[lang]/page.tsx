import {
  SupportedLanguage,
  english,
  german,
  greeting,
  hello,
} from "@/locales/.generated/server";
import Link from "next/link";

export default function Home({
  params: { lang },
}: Readonly<{ params: { lang: SupportedLanguage } }>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{hello(lang)}</p>
      <p>{greeting(lang, { name: "John" })}</p>
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

import { About } from "@/locales/.generated/locales-markdown";
import {
  SupportedLanguage,
  supportedLanguages,
} from "@/locales/.generated/server";
import Link from "next/link";

export default function AboutMarkdownWithUserIdPage({
  params: { lang, userId },
}: {
  params: { userId: string; lang: SupportedLanguage };
}) {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="prose lg:prose-xl mx-auto py-8">
        <About
          lang={lang}
          userId={decodeURIComponent(userId)}
          demoLink={`/${lang}/about-markdown/42`}
        />
        <div className="flex flex-row space-x-4">
          {supportedLanguages.map((l) => {
            return (
              <Link
                className="underline"
                href={`/${l}/about-markdown/${userId}`}
                key={l}
              >
                {l === "en" ? "English" : "Deutsch"}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

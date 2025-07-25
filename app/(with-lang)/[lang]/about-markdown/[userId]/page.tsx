import { About } from "@/locales/.generated/locales-markdown";
import {
  SupportedLanguage,
  supportedLanguages,
} from "@/locales/.generated/types";

import Link from "next/link";

export default async function AboutMarkdownWithUserIdPage({
  params,
}: {
  params: Promise<{ userId: string; lang: SupportedLanguage }>;
}) {
  const { lang, userId } = await params;
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
                prefetch={false}
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

import { defaultLanguage, SupportedLanguage } from "@/locales/.generated/types";
import AboutMarkdownWithUserIdPage from "./[userId]/page";

export default async function AboutMarkdownPage({
  params,
}: {
  params: Promise<{ lang: SupportedLanguage }>;
}) {
  const { lang = defaultLanguage } = await params;
  return (
    <AboutMarkdownWithUserIdPage
      params={Promise.resolve({ lang, userId: "No userId" })}
    />
  );
}

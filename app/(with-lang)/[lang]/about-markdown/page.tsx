import { SupportedLanguage } from "@/locales/.generated/server";
import AboutMarkdownWithUserIdPage from "./[userId]/page";

export default function AboutMarkdownPage({
  params: { lang },
}: {
  params: { lang: SupportedLanguage };
}) {
  return <AboutMarkdownWithUserIdPage params={{ lang, userId: "No userId" }} />;
}

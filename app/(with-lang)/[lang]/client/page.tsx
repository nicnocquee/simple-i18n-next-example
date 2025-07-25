import {
  SupportedLanguage,
  defaultLanguage,
  supportedLanguages,
} from "@/locales/.generated/types";
import ClientComponent from "./client";
import ClientComponentWithPropsServer from "./client-with-props-server";
import { hello } from "@/locales/.generated/strings";

export const generateStaticParams = () => {
  return supportedLanguages.map((lang) => ({ lang }));
};

export const dynamicParams = false;

export default async function ClientPage({
  params,
}: Readonly<{ params: Promise<{ lang: SupportedLanguage }> }>) {
  const { lang = defaultLanguage } = await params;
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-start p-4 border border-gray-400">
        <h1>With strings from server</h1>
        <ClientComponentWithPropsServer
          lang={lang}
          strings={{
            hello: hello(lang),
          }}
        />
      </div>
      <ClientComponent />
    </div>
  );
}

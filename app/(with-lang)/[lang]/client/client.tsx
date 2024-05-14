"use client";

import { useStrings } from "@/locales/.generated/client/hooks";
import {
  SupportedLanguage,
  interpolateTemplate,
} from "@/locales/.generated/server";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { matchPattern } from "url-matcher";

export default function ClientComponent() {
  const lang = useSelectedLanguageFromPathname();
  const strings = useStrings(["bye", "home", "english", "german"], lang);
  if (!strings) return null;
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{interpolateTemplate(strings.bye, { name: "John" })}</h1>
      <Link href={`/`}>{strings.home}</Link>
      <div className="space-x-4">
        <Link className="underline font-bold" href={`/en/client`}>
          {strings.english}
        </Link>
        <Link className="underline font-bold" href={`/de/client`}>
          {strings.german}
        </Link>
      </div>
    </div>
  );
}

const useSelectedLanguageFromPathname = () => {
  const pathname = usePathname();

  const lang = useMemo(() => {
    const matches = matchPattern("/:lang", pathname);
    return matches?.paramValues[0] as SupportedLanguage;
  }, [pathname]);

  return lang;
};

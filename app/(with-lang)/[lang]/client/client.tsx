"use client";

import { useStrings } from "@/locales/.generated/client/hooks";
import { SupportedLanguage } from "@/locales/.generated/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { matchPattern } from "url-matcher";

export default function ClientComponent() {
  const lang = useSelectedLanguageFromPathname();
  const [strings, plurals, stringsWithArgs] = useStrings(
    [
      "bye",
      "home",
      "english",
      "german",
      "bookWithCount",
      "movieWithOrdinalCount",
      "clientTitle",
      "clientGreeting",
    ],
    lang
  );
  if (!strings) return null;
  if (!plurals) return null;
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{stringsWithArgs?.bye({ name: "John" })}</h1>
      <Link prefetch={false} href={`/`}>
        {strings.home}
      </Link>
      <div>
        <p>{plurals.bookWithCount(1)}</p>
        <p>{plurals.bookWithCount(2)}</p>
        <p>{plurals.bookWithCount(3)}</p>
        <p>{plurals.bookWithCount(4)}</p>
        <p>{plurals.bookWithCount(5)}</p>
      </div>

      <div>
        <p>{plurals.movieWithOrdinalCount(1)}</p>
        <p>{plurals.movieWithOrdinalCount(2)}</p>
        <p>{plurals.movieWithOrdinalCount(3)}</p>
        <p>{plurals.movieWithOrdinalCount(4)}</p>
        <p>{plurals.movieWithOrdinalCount(5)}</p>
      </div>
      <div>
        <p>{strings.clientTitle}</p>
        <p>{stringsWithArgs?.clientGreeting({ name: "John" })}</p>
      </div>
      <div className="space-x-4">
        <Link
          prefetch={false}
          className="underline font-bold"
          href={`/en/client`}
        >
          {strings.english}
        </Link>
        <Link
          prefetch={false}
          className="underline font-bold"
          href={`/de/client`}
        >
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

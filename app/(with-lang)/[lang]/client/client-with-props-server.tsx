"use client";

import { useStrings } from "@/locales/.generated/client/hooks";
import CarCount from "./car-count";
import { useState } from "react";
import { StringKeys, SupportedLanguage } from "@/locales/.generated/types";
type Identity<T> = T extends object ? { [K in keyof T]: T[K] } : T;

export default function ClientComponentWithPropsServer({
  lang,
  strings,
}: {
  lang: SupportedLanguage;
  strings: Identity<Pick<Record<StringKeys, string>, "hello">>;
}) {
  const [count, setCount] = useState(0);
  const [clientStrings] = useStrings(["bye"]);
  if (!clientStrings) return null;
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <p>{strings.hello}</p>
      <label htmlFor="count">Count</label>
      <input
        type="number"
        id="count"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      {count > 0 && <CarCount count={count} lang={lang} />}
    </div>
  );
}

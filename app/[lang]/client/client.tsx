"use client";

import { useStrings } from "@/locales/.generated/client/hooks";
import { interpolateTemplate } from "@/locales/.generated/server";
import Link from "next/link";

export default function ClientComponent() {
  const strings = useStrings(["bye", "home"]);
  if (!strings) return null;
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{interpolateTemplate(strings.bye, { name: "John" })}</h1>
      <Link href={`/`}>{strings.home}</Link>
    </div>
  );
}

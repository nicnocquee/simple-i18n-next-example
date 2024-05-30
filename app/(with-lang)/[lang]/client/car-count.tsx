import { useStrings } from "@/locales/.generated/client/hooks";
import { SupportedLanguage } from "@/locales/.generated/types";
export default function CarCount({
  count,
  lang,
}: {
  count: number;
  lang: SupportedLanguage;
}) {
  const [, plurals] = useStrings(["aboutCarWithCount"], lang);
  if (!plurals) return null;
  return <p>{plurals.aboutCarWithCount(count)}</p>;
}

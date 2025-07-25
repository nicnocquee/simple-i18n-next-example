import Home from "@/app/(with-lang)/[lang]/page";

export default async function MainPage() {
  return <Home params={Promise.resolve({ lang: "en" })} />;
}

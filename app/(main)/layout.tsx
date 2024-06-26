import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import rtl from "rtl-detect";
import { SupportedLanguage } from "@/locales/.generated/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: {
    lang: SupportedLanguage;
  };
}>) {
  return (
    <html lang={lang} dir={rtl.getLangDir(lang)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

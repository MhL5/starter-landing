import { validateAndSetLocale } from "@/features/i18n/utils/validateLocale";
import Providers from "@/providers/Providers";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import localFont from "next/font/local";

const notoSans = localFont({
  src: "../../assets/fonts/Noto_Sans/NotoSans-VariableFont_wdth,wght.ttf",
  variable: "--font-sans",
});

const geistMono = localFont({
  src: "../../assets/fonts/Geist_Mono/GeistMono-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
});

const notoSansArabic = localFont({
  src: "../../assets/fonts/Noto_Sans_Arabic/NotoSansArabic-VariableFont_wdth,wght.ttf",
  variable: "--font-arabic",
});

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const validatedLocale = validateAndSetLocale(locale);

  const t = await getTranslations({
    locale: validatedLocale,
    namespace: "app./.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function Layout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const validatedLocale = validateAndSetLocale(locale);

  const isArabic = validatedLocale === "ar";

  return (
    <html
      dir={isArabic ? "rtl" : "ltr"}
      lang={validatedLocale}
      className={isArabic ? notoSansArabic.variable : notoSans.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${isArabic ? notoSansArabic.variable : geistMono.variable} min-w-87.5 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

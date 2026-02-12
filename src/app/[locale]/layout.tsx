import { routing } from "@/features/i18n/routing";
import { validateAndSetLocale } from "@/features/i18n/utils/validateLocale";
import Providers from "@/providers/Providers";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import localFont from "next/font/local";

const notoSansArabic = localFont({
  src: "../../assets/fonts/Noto_Sans_Arabic/NotoSansArabic-VariableFont_wdth,wght.ttf",
  variable: "--font-arabic",
});
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmSans",
  display: "swap",
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

export const revalidate = 259200; // 3 days

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
      className={
        isArabic
          ? notoSansArabic.variable
          : `${bebas.variable} ${dmSans.variable}`
      }
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${isArabic ? notoSansArabic.variable : dmSans.variable} min-w-87.5 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

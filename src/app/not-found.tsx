import { FallbackPage } from "@/components/FallbackPages";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations({
    locale: "en",
    namespace: "components.FallbackPages",
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <FallbackPage
            variant="not-found"
            messages={{
              contactSupport: t("contactSupport"),
              goBack: t("goBack"),
              home: t("home"),
              needHelp: t("needHelp"),
              description: t("notFound.description"),
              title: t("notFound.title"),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

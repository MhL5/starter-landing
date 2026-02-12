import { validateAndSetLocale } from "@/features/i18n/utils/validateLocale";

import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";

export default async function Layout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  validateAndSetLocale(locale);

  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="min-h-[calc(100svh-var(--site-header-height))]"
      >
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

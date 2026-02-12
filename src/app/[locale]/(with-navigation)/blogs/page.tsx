import { validateAndSetLocale } from "@/features/i18n/utils/validateLocale";

import { BlogsSection } from "./_components/BlogsSection";

export default async function Page({ params }: PageProps<"/[locale]/blogs">) {
  const { locale } = await params;
  validateAndSetLocale(locale);

  return <BlogsSection className="mx-auto w-full max-w-7xl px-5 py-16" />;
}

import { validateAndSetLocale } from "@/features/i18n/utils/validateLocale";

import { BlogSection } from "./_components/BlogSection";

export default async function Page({
  params,
}: PageProps<"/[locale]/blogs/[blogSlug]">) {
  const { locale } = await params;
  validateAndSetLocale(locale);

  return <BlogSection className="px-5 py-16" />;
}

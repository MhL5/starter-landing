"use client";

import { FallbackPage } from "@/components/FallbackPages";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("components.FallbackPages");

  return (
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
  );
}

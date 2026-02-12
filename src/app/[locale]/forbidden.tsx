"use client";

import { FallbackPage } from "@/components/FallbackPages";
import { useTranslations } from "next-intl";

export default function Forbidden() {
  const t = useTranslations("components.FallbackPages");
  return (
    <FallbackPage
      messages={{
        contactSupport: t("contactSupport"),
        goBack: t("goBack"),
        home: t("home"),
        needHelp: t("needHelp"),
        description: t("forbidden.description"),
        title: t("forbidden.title"),
      }}
      variant="forbidden"
    />
  );
}

"use client";

import { FallbackPage } from "@/components/FallbackPages";
import { useTranslations } from "next-intl";

export default function Unauthorized() {
  const t = useTranslations("components.FallbackPages");

  return (
    <FallbackPage
      messages={{
        contactSupport: t("contactSupport"),
        goBack: t("goBack"),
        home: t("home"),
        needHelp: t("needHelp"),
        description: t("unauthorized.description"),
        title: t("unauthorized.title"),
        signIn: t("unauthorized.signIn"),
      }}
      variant="unauthorized"
      loginPagePathname="/login"
    />
  );
}

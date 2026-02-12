"use client";

import { FallbackPage } from "@/components/FallbackPages";
import { useTranslations } from "next-intl";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Page({ reset }: ErrorProps) {
  const t = useTranslations("components.FallbackPages");

  return (
    <FallbackPage
      reset={reset}
      variant="error"
      messages={{
        contactSupport: t("contactSupport"),
        goBack: t("goBack"),
        home: t("home"),
        needHelp: t("needHelp"),
        description: t("error.description"),
        title: t("error.title"),
        tryAgain: t("error.tryAgain"),
      }}
    />
  );
}

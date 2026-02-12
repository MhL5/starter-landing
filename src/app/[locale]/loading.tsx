"use client";

import { FallbackPage } from "@/components/FallbackPages";
import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("components.FallbackPages.loading");

  return (
    <FallbackPage
      variant="loading"
      messages={{ "aria-label": t("ariaLabel") }}
    />
  );
}

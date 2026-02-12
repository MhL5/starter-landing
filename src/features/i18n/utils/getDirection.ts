import type { Locale } from "next-intl";

export const getDirection = (locale: Locale) =>
  locale === "ar" ? "rtl" : "ltr";

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [
    "fr",
    "de",
    "en",
    "es",
    "hi",
    "it",
    "ja",
    "ms",
    "pt",
    "ru",
    "tr",
    "zh",
    "ar",
  ],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "as-needed",
});

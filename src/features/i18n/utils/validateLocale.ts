import { type Locale, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "../routing";

/**
 * validate and set the locale for the request
 * Should be called in the layout or a page
 */
export function validateAndSetLocale(locale: string): Locale {
  if (!hasLocale(routing.locales, locale)) return notFound();

  setRequestLocale(locale);

  return locale as Locale;
}

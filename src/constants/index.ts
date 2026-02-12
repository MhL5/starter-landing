import { clientEnv } from "@/env/clientEnv";

export function CONTACT_SUPPORT_LINK(text?: string) {
  const mailtoUrl = `mailto:${clientEnv.NEXT_PUBLIC_SUPPORT_EMAIL}${text ? `?body=${encodeURIComponent(text)}` : ""}`;
  return mailtoUrl;
}

export const APP_NAME = "Panel Starter";

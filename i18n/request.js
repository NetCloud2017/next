import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "@/config.js";

export default getRequestConfig(async ({ locale }) => {
  // if (!locales.includes(locale)) notFound();
  return {
    locale: defaultLocale,
    messages: (await import(`../messages/${locale || defaultLocale }.json`)).default,
  };
});

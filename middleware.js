import { match } from "@formatjs/intl-localematcher";

import Negotiator from "negotiator";

import { locales, defaultLocale } from "@/config.js";

function getLocale(request) {
  const headers = {
    "accept-language": request.headers.get("accept-language") || "",
  };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `${locale}`,
  );

  console.log(pathnameHasLocale, "haslocale");
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  console.log(locale, pathname, "3333");
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  match: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

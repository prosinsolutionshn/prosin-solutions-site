import { NextResponse } from 'next/server';

import i18n from './i18n';

import type { NextRequest } from 'next/server';

export const LOCALE_COOKIE = 'APP_LOCALE';

export function middleware(request: NextRequest) {
  const locale = request.cookies.get(LOCALE_COOKIE);
  const defaultLang = (request.nextUrl.locale || i18n.defaultLocale)!;

  request.nextUrl.searchParams.set('lang', locale?.value ?? defaultLang);
  const res = NextResponse.rewrite(request.nextUrl);

  if (!locale?.value) res.cookies.set(LOCALE_COOKIE, defaultLang);

  return res;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};

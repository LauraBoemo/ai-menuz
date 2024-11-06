'use server';

import {cookies} from 'next/headers';
import { defaultLocale } from '../i18n/config';
import { SupportedLocales } from '../components/menuz-selector-language';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: SupportedLocales) {
  cookies().set(COOKIE_NAME, locale);
}

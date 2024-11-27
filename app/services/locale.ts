'use server';

import {cookies} from 'next/headers';
import { defaultLocale } from '../i18n/config';
import { SupportedDesiredLocales } from '../components/menuz-selector-language';

const COOKIE_DESIRED_LOCALE = 'COOKIE_DESIRED_LOCALE';

export async function getDesiredLocale() {
  return cookies().get(COOKIE_DESIRED_LOCALE)?.value || defaultLocale;
}

export async function setDesiredLocale(locale: SupportedDesiredLocales) {
  cookies().set(COOKIE_DESIRED_LOCALE, locale);
}

'use server';

import {cookies} from 'next/headers';
import { defaultLocale } from '../i18n/config';
import { SupportedCurrentLocales, SupportedDesiredLocales } from '../components/menuz-selector-language';

const COOKIE_CURRENT_LOCALE = 'COOKIE_CURRENT_LOCALE';
const COOKIE_DESIRED_LOCALE = 'COOKIE_DESIRED_LOCALE';

export async function getCurrentLocale() {
  return cookies().get(COOKIE_CURRENT_LOCALE)?.value || defaultLocale;
}

export async function getDesiredLocale() {
  return cookies().get(COOKIE_DESIRED_LOCALE)?.value || defaultLocale;
}

export async function setCurrentLocale(locale: SupportedCurrentLocales) {
  cookies().set(COOKIE_CURRENT_LOCALE, locale);
}

export async function setDesiredLocale(locale: SupportedDesiredLocales) {
  cookies().set(COOKIE_DESIRED_LOCALE, locale);
}

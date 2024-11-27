import {getRequestConfig} from 'next-intl/server';
import {getDesiredLocale} from '../services/locale';

export default getRequestConfig(async () => {
  const locale = await getDesiredLocale();

  let messages;
  try {
    const localePath = await import(`../../messages/${locale}.json`);
    messages = localePath.default;
  } catch (error) {
    const fallbackPath = await import(`../../messages/enUS.json`);
    messages = fallbackPath.default;
  }

  return {
    locale,
    messages,
  };
});

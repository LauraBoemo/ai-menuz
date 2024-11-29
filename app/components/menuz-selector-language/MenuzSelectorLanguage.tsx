import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as locales from '@mui/material/locale';
import { localeFlagMap } from './utils';
import { useEffect, useTransition } from 'react';
import { setUserLocale } from '../../services/locale';

export type SupportedLocales = keyof typeof locales;

export const MenuzSelectorLanguage = () => {
  const [isPending, startTransition] = useTransition();
  const [locale, setLocale] = React.useState<SupportedLocales>('enUS');

  useEffect(() => {
    startTransition(() => {
      setUserLocale(locale);
    });
  }, [locale])

  return (
    <Autocomplete
      loading={isPending}
      options={Object.keys(locales)}
      getOptionLabel={(key) => `${localeFlagMap[key] || ""}  ${key.substring(0, 2)}-${key.substring(2, 4)}`}
      style={{ width: 250 }}
      value={locale}
      disableClearable
      onChange={(event: any, newValue: string | null) => {
        setLocale(newValue as SupportedLocales);
      }}
      renderInput={(params) => (
        <TextField {...params} fullWidth />
      )}
    />
  );
}

export default MenuzSelectorLanguage;

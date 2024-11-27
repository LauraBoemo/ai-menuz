import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as locales from '@mui/material/locale';
import { localeFlagMap } from './utils';
import { useEffect, useTransition } from 'react';
import { setCurrentLocale } from '../../services/locale';

export type SupportedCurrentLocales = keyof typeof locales;

export const MenuzSelectorCurrentLanguage = () => {
  const [isPending, startTransition] = useTransition();
  const [locale, setLocale] = React.useState<SupportedCurrentLocales>('enUS');

  useEffect(() => {
    startTransition(() => {
      setCurrentLocale(locale);
    });
  }, [locale])

  return (
    <Autocomplete
      loading={isPending}
      sx={{ width: "100% !important" }}
      options={Object.keys(locales)}
      getOptionLabel={(key) => `${localeFlagMap[key] || ""}  ${key.substring(0, 2)}-${key.substring(2, 4)}`}
      style={{ width: 300 }}
      value={locale}
      disableClearable
      onChange={(event: any, newValue: string | null) => {
        setLocale(newValue as SupportedCurrentLocales);
      }}
      renderInput={(params) => (
        <TextField {...params} fullWidth />
      )}
    />
  );
}

export default MenuzSelectorCurrentLanguage;

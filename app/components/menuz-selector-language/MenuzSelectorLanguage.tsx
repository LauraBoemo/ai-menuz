import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as locales from '@mui/material/locale';
import { localeFlagMap } from './utils';
import { useEffect } from 'react';

export type SupportedLocales = keyof typeof locales;

interface MenuzSelectorLanguageProps {
  handleLanguageSelect: (locale: SupportedLocales) => void;
}

export const MenuzSelectorLanguage = ({ handleLanguageSelect }: MenuzSelectorLanguageProps) => {
  const [locale, setLocale] = React.useState<SupportedLocales>('enUS');

  useEffect(() => {
    handleLanguageSelect(locale);
  }, [locale])

  return (
    <Autocomplete
      options={Object.keys(locales)}
      getOptionLabel={(key) => `${localeFlagMap[key] || ""}  ${key.substring(0, 2)}-${key.substring(2, 4)}`}
      style={{ width: 300 }}
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

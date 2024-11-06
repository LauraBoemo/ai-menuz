import { ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {getLocale, getMessages} from 'next-intl/server';
import { mainTheme } from "./themes";

export const metadata: Metadata = {
  title: "Menuz",
  description: "Find the taste in the text.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body style={{ margin: 0 }}>
        <NextIntlClientProvider messages={messages} >
          <ThemeProvider theme={mainTheme}>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

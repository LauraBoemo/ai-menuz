import type { Metadata } from "next";
import { mainTheme } from "./themes";
import { ThemeProvider } from "@mui/material/styles";

export const metadata: Metadata = {
  title: "Menuz",
  description: "Find the taste in the text.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={mainTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

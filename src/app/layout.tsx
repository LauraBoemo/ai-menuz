import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppinsExtraLight = localFont({
  src: "./fonts/Poppins-ExtraLight.ttf",
  variable: "--font-poppins-extra-light",
  weight: "100",
});

const poppinsThin = localFont({
  src: "./fonts/Poppins-Thin.ttf",
  variable: "--font-poppins-light",
  weight: "200",
});

const poppinsRegular = localFont({
  src: "./fonts/Poppins-regular.ttf",
  variable: "--font-poppins-regular",
  weight: "400",
});

const poppinsMedium = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins-medium",
  weight: "500",
});

export const metadata: Metadata = {
  title: "My Menu",
  description: "For all the taste in the text.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsExtraLight.variable} ${poppinsThin.variable} ${poppinsRegular.variable} ${poppinsMedium.variable}`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "My Menu",
  description: "For all the taste in the text.",
};

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ["400", "500"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppinsFont.className}>
        {children}
      </body>
    </html>
  );
}

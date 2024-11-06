import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}

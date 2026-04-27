import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JSPD Cleaning",
  description: "Multilingual presentation website for JSPD Cleaning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}

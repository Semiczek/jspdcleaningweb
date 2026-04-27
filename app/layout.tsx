import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JSPD Cleaning s.r.o.",
  description: "Multilingual presentation website for JSPD Cleaning s.r.o.",
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

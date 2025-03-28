import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./font";

export const metadata: Metadata = {
  title: "rcm",
  description: "remote cardiac monitoring system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}

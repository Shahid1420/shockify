import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stockify",
  description:
    "Smarter investing starts here - track stocks, grow your portfolio, and get instant market alerts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}

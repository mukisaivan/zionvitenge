import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers/page";

export const metadata: Metadata = {
  title: "Zion Centre",
  description: "Made by Ivan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          {children}
        </body>
      </Providers>
    </html>
  );
}

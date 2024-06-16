import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/page";



export const metadata: Metadata = {
  title: "Zion Vitenge",
  description: "Zion Vitenge Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        
        {children}

      </body>
    </html>
  );
}

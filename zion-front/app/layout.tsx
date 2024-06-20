import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/page";
import { CartContextProvider } from "./components/CartContext";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Zion Vitenge",
  description: "Zion Vitenge Official Website",
};

const phoneNumber = '+2540701203389';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartContextProvider>
          <Header/>
          {children}
          <WhatsAppButton phoneNumber={phoneNumber} />

        </CartContextProvider>
      </body>
    </html>
  );
}

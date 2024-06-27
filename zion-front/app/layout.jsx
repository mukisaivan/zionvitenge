'use client'

import "./globals.css";
import Header from "./header/page";
import { CartContextProvider } from "./components/CartContext";
import WhatsAppButton from "./components/WhatsAppButton";
// import FooterWrapperComponent from './components/FooterWrapper'
// export const metadata: Metadata = {
//   title: "Zion Vitenge",
//   description: "Zion Vitenge Official Website",
// };



const phoneNumber = "+2540701203389";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <title>Zion Vitenge</title>
        <meta name="description" content="Zion Vitenge Official Website" />
        <link rel="icon" href="/favicon.ico" />

        <CartContextProvider>
          <Header />
          {children}
           {/* <FooterWrapperComponent/> */}
          <WhatsAppButton phoneNumber={phoneNumber} />
        </CartContextProvider>
      </body>
    </html>
  );
}

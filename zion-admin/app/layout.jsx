import './globals.css'

import { Providers } from "./providers/page";
export const metadata = {
  title: 'Zion Vitenge',
  description: 'The official Zion Website',

};

export default function RootLayout({
  children,
}) {


  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden flex">
        <Providers>
            <div className="flex">
              <div className=" bg-blue-950 w-screen min-h-screen">
                {children}
              </div>
            </div>
          </Providers>
      </body>
    </html>
  );
}





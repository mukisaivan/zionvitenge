import Footer from './components/footer';
import Header from './components/header';
import './globals.css'
import {Poppins} from "next/font/google"

export const metadata = {
  title: 'Zion Vitenge',
  description: 'The official Zion Website',
};


const poppins = Poppins({subsets: ['latin'], weight:['400', '800'], style:'italic'})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}


























/*
export  function RootLayouto({
  children,
}: {children: React.ReactNode}) {
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
*/




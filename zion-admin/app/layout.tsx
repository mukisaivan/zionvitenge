import Footer from './components/footer';
import Header from './components/header';
import './globals.css'
import { Poppins } from "next/font/google"
import { Providers } from './providers/page';

export const metadata = {
  title: 'Zion Vitenge',
  description: 'Zion Vitenge Official Website',
};


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '800'], style: 'italic' })


//for javascript 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=' overflow-x-hidden flex min-h-screen'>
        <Providers>
          <div className='flex' >
            <div className='min-h-screen md:w-screen sm:w-full '>
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
export function RootLayoutO({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className=' flex-grow'>
            {children}
          </main>
          <Footer />
        </div>
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




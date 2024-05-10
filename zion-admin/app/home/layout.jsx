"use client";

import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

export default function RootLayout({ children }) {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to handle resizing
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const isMobile = screenWidth <= 768;
  const genstyles = " p-5 bg-white  w-screen min-h-screen text-red-600 md:mr-8 mt-[203px] md:mt-9 mb-5"
  console.log(isMobile);

  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-bgGray w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg text-red-800"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen ">
      <div className={isMobile ? 'flex flex-column gap-0' : 'flex flex-row gap-0'}>
        <div>
          <Nav screenwidth={screenWidth} />
        </div>
          <div className={ isMobile? genstyles :'rounded-xl' +  genstyles}>
            {children}
          </div>
        </div>
    </div>
  );
}

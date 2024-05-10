"use client";

import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import ZionLogo from "@/lib/ZionLogo";

export default function RootLayout({ children }) {
  const [showNav, setShowNav] = useState(false);

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
  console.log(isMobile);

  function toggleNavBar() {
    setShowNav((prev) => !prev);
  }

  // const { data: session } = useSession();
  // if (!session) {
  //   return (
  //     <div className="bg-bgGray w-screen h-screen flex items-center">
  //       <div className="text-center w-full">
  //         <button
  //           onClick={() => signIn("google")}
  //           className="bg-white p-2 px-4 rounded-lg text-red-800"
  //         >
  //           Login with Google
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  const menubutton = (
    <button onClick={toggleNavBar} className=" m-7">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );

  return (
    <div className="min-h-screen ">
      <div className="flex flex-row gap-0">
        <Nav show={showNav} screenwidth={screenWidth} />
        <div className=" p-5 bg-white rounded-xl min-h-screen text-red-600 w-screen md:mr-8 ms:mt-15 md:mt-9 mb-5 mt-16">
          {children}
        </div>
      </div>
    </div>
  );
}

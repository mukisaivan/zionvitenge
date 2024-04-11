"use client"

import { useSession, signIn } from "next-auth/react"
import { useState } from "react";
import ZionLogo from "@/lib/ZionLogo";
import Nav from "../components/Nav";

export default function Home({ children }: { children: React.ReactNode }) {
  const [showNav, setShowNav] = useState(false);
  
  /*
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-bgGray w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg text-red-800">Login with Google</button>
        </div>
      </div>
    )
  }
  */

  return (
    <>
    </>
  );
}


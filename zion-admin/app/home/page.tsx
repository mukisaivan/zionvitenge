"use client"

import UserD from "../components/UserD";
import userdetailscomponent from "../components/UserD";

import { useSession, signIn } from "next-auth/react"

export default function Home() {
  
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-bgGray w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="p-2 px-4 rounded-lg text-white bg-black">Login with Google</button>
        </div>
      </div>
    )
  }
  
  return (
    <>
      <div>
       <UserD />
      </div>
    </>
  );
}


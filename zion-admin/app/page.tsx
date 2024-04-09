"use client" 

import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

const signinbutton = (
  <div className="bg bg-slate-400 h-screen flex justify-center items-center">
    <div className='w-full text-center'>
      <button className='bg-white rounded-lg px-2 text-center text-red-500' onClick={() => signIn('google')}>
        Sign In with Google
      </button>
    </div>
  </div>
)
const signoutbutton = (
  <div className="flex justify-center items-center ml-6">
    <div className='w-full text-center'>
      <button className='bg-white rounded-lg px-2 text-center text-red-500' onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  </div>
)

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <>
        {signinbutton}
      </>
    )
  }

  const butn = <button className=" bg-white text-red-600 rounded-lg">Move to  detail page</button>



  return (
    <main className=' items-center flex h-screen w-screen flex-col'>

      {
        session?.user?.image && <img src={session?.user?.image} alt="Image" height={400} width={400}/>
      }

      <p className='text-red-400 ml-4 '>
        Hello
        <b className=' text-pink-500'>
          {session.user?.name}
        </b>
      </p>

      {signoutbutton}
      
      <Link href={"/detailpage"} className=" rounded-lg mt-3">
        {butn}
      </Link>

    </main>
  );
}


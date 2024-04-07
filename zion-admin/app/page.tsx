"use client" 

import { useSession, signIn, signOut } from "next-auth/react"

const button = (
  <div className='w-full text-center'>
    <button className='bg-white rounded-lg px-2 text-center text-red-500' onClick={() => signIn('google')}>
      Sign In with Google
    </button>
  </div>
)

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <>
        {button}
      </>
    )
  }

  return (
    <main className=' items-center flex h-screen w-screen  bg-slate-800'>
      <p>Hello {session.user?.name}</p>
    </main>
  );
}


"use client" 
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  const navv = router.push('/home')
  return (
    <>
      {navv}
    </>
  );
}

import React from 'react'

export  function MainPage() {
  return (
    <main>
      write something
    </main>
  )
}

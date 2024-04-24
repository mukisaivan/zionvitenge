"use client" 
import { useRouter } from "next/navigation";
export function Home() {
  const router = useRouter()
  const navv = router.push('/home')
  return (
    <>
      {navv}
    </>
  );
}

import React from 'react'

export default function MainPage() {
  return (
    <main>
      
    </main>
  )
}

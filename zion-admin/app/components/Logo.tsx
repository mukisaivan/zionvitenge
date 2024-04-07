import React from 'react'
import Image from "next/image";


export default function Logo() {
  return (
    <>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src="/logo.png"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
  
    </>
  )
}

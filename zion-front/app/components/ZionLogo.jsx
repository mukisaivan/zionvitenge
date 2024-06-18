import React from 'react'
import Image from "next/image";
import Link from 'next/link';


export default function ZionLogo() {
  return (

      <>
        <Image
          src="/logo1.png"
          alt="Zion Logo"
          width={100}
          height={150}
          priority
        />
      </>
  )
}
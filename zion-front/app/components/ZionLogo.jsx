import React from 'react'
import Image from "next/image";
import Link from 'next/link';


export default function ZionLogo() {
  return (
    <Link href={'/'}>
      <>
        <Image
          src="/logo1.png"
          alt="Logo"
          width={100}
          height={150}
          priority
        />
      </>
    </Link>
  )
}
import React from 'react'
import Image from "next/image";
import Link from 'next/link';


export default function ZionLogo() {
  return (
    <Link href={'/'}>
      <header className='sticky top-0'>
        <Image
          src="/logo1.png"
          alt="Logo"
          width={180}
          height={180}
          priority
        />
      </header>
    </Link>
  )
}
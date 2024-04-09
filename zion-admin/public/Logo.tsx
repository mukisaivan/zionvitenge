import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      height={400}
      width={400}
      src={"/logo.png"}
      alt={"Zion logo"}
    />
  )
}

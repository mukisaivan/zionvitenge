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


export function Somecomponent() {
  
  const names = [
    { name: 'ivan', likes: 'gaming' },
    { name: 'jay', likes: 'coding' },
    { name: 'elon', likes: 'tesla' }
  ]

  const derivedmap: {[key: string]: string | number}[] = names.map(item => {
    const container: {[key:string]: string | number} = {};
    container[item.name] = item.likes
    container.numberOfLettersInName  = item.name.length
    return container
  })
  console.log(derivedmap);
  
}

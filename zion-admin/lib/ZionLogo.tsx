import React from 'react'
import Image from "next/image";


export default function ZionLogo() {
  return (
    <header className='sticky top-0'>
      <Image
        src="/logo.png"
        alt="Logo"
        width={180}
        height={37}
        priority
      />
    </header>
  )
}

/*
export function Somecomponent() {
  
  const names = [
    { name: 'ivan', likes: 'gaming' },
    { name: 'jay', likes: 'coding' },
    { name: 'elon', likes: 'tesla' }
  ]

  const derivedmap: {[key: string]: string | number | boolean }[] = names.map(item => {
    const container: {[key:string]: string | number | boolean} = {};
    container[item.name] = item.likes
    container.numberOfLettersInName = item.name.length
    container.knowsEnglish = false
    return container
  })
  console.log(derivedmap);
  
}

*/
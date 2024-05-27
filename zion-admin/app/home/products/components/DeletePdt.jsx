'use client'

import React from 'react'
import { useRouter } from "next/navigation";


 function DeletePdt({ id }) {
  
   const router = useRouter()

   async function handleDelete() {
    console.log('hey');
    const res =  await fetch('http://localhost:3000/api/products?id='+id, {
      method:'DELETE'
    })

    const res1 = await res

    console.log('-----delete respose', res1);
    router.refresh()


  }


  const deletebtn = (
    <button type="button" onClick={handleDelete} className=' bg-red-700  px-5 p-1 text-white rounded-lg'>Delete</button>
  ) 

  return (
    <>
      {deletebtn}
    </>
  )
}


export default DeletePdt
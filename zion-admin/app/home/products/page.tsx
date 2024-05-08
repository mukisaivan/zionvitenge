import React from 'react'
import Link from 'next/link'
import Availableproducts from './components/availableproducts'

export default function products() {
  return (
    <>
      <Link href={'/home/products/addproduct'}>
        <button className=' bg-black text-white border rounded-lg p-4'>
          <div>Add Products</div>
        </button>
      </Link>
      <Availableproducts/>
    </>
  )
}

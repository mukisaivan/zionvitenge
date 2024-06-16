
import React from 'react'
import Link from 'next/link'
import Availableproducts from './components/availableproducts'

export default function products() {

  return (
    <div className=''>
      <Link href={'/home/products/addproduct'}>
        <button className='btn-pink'>
          <div>Add Products</div>
        </button>
      </Link>
      <Availableproducts />
    </div>
  )
}

import React from 'react'
  
export default function Availableproducts() {
  async function getavailableproducts() {
    console.log('trying to get products');
    try {
      
    const res = await fetch('http://localhost:3000/api/products', {
      cache: 'no-store'
    })
    if (!res.ok) {
      throw new Error('the response is not ok')
    }
    const data  = await  res.json()      
    console.log('++++++++++++++++++++++++++++The response is',data);
    } catch (error) {
      console.log('This Error happened:', error);
    }

  }

  const {gotproducts} =  getavailableproducts()
  
  return (
    {gotproducts}
    // <div>Available Products</div>
  )
}
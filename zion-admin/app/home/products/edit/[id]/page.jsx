'use client'

import { useEffect, useState } from "react";

export default function EditProductPage({params}) {

  // const id = content.params.id;
  
  // const {params: {id}} = content
  const id  = params.id
  const [productInfo, setProductInfo] = useState(null)


    const res = fetch(`http://localhost:3000/api/products?id=${id}`, {})


  
  
  
  useEffect(() => {
    if (id) {
    }
  }, [id])

  
  return (
    <>
      <h1>Trying to edit product: {id}</h1>
    </>
  );
}

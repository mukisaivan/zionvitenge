'use client'

import Center from "../components/Center";
import ProductsGrid from "../components/ProductsGrid";
import Title from "../components/Title";
import {mongooseConnect} from '../../lib/mongoose';
import {Product} from '../../models/product'
import { useEffect, useState } from "react";

export default  function ProductsPage() {
  
  const [products, setProducts] = useState([] || null)

  async function getproducts(){
    const res = fetch('http://localhost:3000/api/products', {
      method: 'GET',
    })
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    getproducts()
  }, [])

  return (
    <>
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}



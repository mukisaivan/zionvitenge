"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "@/app/components/ProductForm";


  async function getProductbyid(id) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resdata = await res.json()
    console.log(resdata);
    return resdata
  }


export default   function EditProductPage({ params }) {
  const id = params.id;
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${id}`).then(res => {
      // console.log('=============== respose data',res.data);
      setProductInfo(res.data.product)
      setLoading(false)
    });
  }, [id]);
  
  // if (!loading) {
  //   console.log('Info of the product',JSON.stringify(productInfo));
  //   console.log('Info of the product',productInfo);
  // }

  
  if (loading) {
    return <div> Loading ......</div>;
  }

  return (
    <>
      <h1>Trying to edit product: {id}</h1>
      <h1>
        Product Title: {productInfo.title}
      </h1>
      <>
        <ProductForm  {... productInfo}/>
      </>
    </>
  );
}

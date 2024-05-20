import ProductForm from '../../../components/ProductForm'

import React from 'react'

function EditPage() {

    
  async function handleedit() {
    try {
      const res = fetch(`http://localhost:3000/api/products/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
      router.refresh();
      router.push("/home/products");
      router.refresh();

    } catch (error) {
      console.log("+++++++++++++++++++++++++ error", error);
    }
    
  }

  return (
    <>
      <h1>Edit Product Page</h1>
      <ProductForm/>

    </>
  )
}

export default EditPage
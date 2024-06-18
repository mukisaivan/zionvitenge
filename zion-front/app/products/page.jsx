"use client";
import Center from "../components/Center";
import ProductsGrid from "../components/ProductsGrid";
import Title from "../components/Title";
import { useState, useEffect } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([] || null);
  const [loading, setLoading] = useState(false);

  async function getproducts() {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/products", {
        method: "GET",
      });
      const data = await res.json();

      // console.log('Available response',res);
      // console.log("Available products", data.products);

      setProducts(data.products);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <>
      {loading && <div>Loading ...</div>}
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={products} />
      </Center>
      <button
        className=" block mt-5 rounded-lg bg-red-700 p-6 ml-4"
        onClick={() => getproducts()}
      >
        get products
      </button>
    </>
  );
}

export default ProductsPage;

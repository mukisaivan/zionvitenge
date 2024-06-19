"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Center from "../components/Center";
import Title from "../components/Title";
import ProductsGrid from "../components/ProductsGrid";
import styled from "styled-components";

const CategoryWrapper = styled.div`
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCategories() {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data.categories);
      console.log('++++++Client side category data',response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Center>
      <button
        className=" block mt-5 rounded-lg bg-red-700 p-6 ml-4"
        onClick={() => fetchCategories()}
      >
        get products
      </button>
      <Title>All Categories</Title>
      {categories.map((category) => (
        <CategoryWrapper key={category._id}>
          <CategoryTitle>{category.name}</CategoryTitle>
          <ProductsGrid products={category.products} />
        </CategoryWrapper>
      ))}
      <>
        {categories.map((category) => (
        <CategoryWrapper key={category._id}>
          <CategoryTitle>{category.name}</CategoryTitle>
        
        </CategoryWrapper>
      ))}
      </>
    </Center>
  );
}

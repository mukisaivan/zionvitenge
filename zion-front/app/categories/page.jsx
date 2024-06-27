"use client";

import Link from "next/link";
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

const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: #f1f1f1;
  text-align: center;
`;

const CategoryLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: #333;
`;

export default function CategoriesPage() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data.categories);
      console.log("++++++Client side category data", response.data.categories);
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
    
      <Title>All Categories</Title>
      {categories.map((category) => (
        <CategoryWrapper key={category._id}>
          <CategoryTitle>{category.name}</CategoryTitle>
          <ProductsGrid products={category.products} />
        </CategoryWrapper>
      ))}
      <FooterWrapper>
        <h3 className=" text-pink-700">Categories</h3>
        <div>
          {categories.map((category) => (
            <CategoryLink
              key={category._id}
              href={`/categories/${category._id}`}
            >
              {category.name}
            </CategoryLink>
          ))}
        </div>
      </FooterWrapper>
    </Center>
  );
}

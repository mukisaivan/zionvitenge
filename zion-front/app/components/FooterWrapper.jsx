"use client";

import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

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

function FooterWrapperComponent() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data.categories);
      // console.log("++++++Client side category data", response.data.categories);
    } catch (error) {
      // console.error("Error fetching categories:", error);
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
    <FooterWrapper>
      <h3 className=" text-pink-700">Categories</h3>
      <div>
        {categories.map((category) => (
          <CategoryLink key={category._id} href={`/categories/${category._id}`}>
            {category.name}
          </CategoryLink>
        ))}
      </div>
    </FooterWrapper>
  );
}

export default FooterWrapperComponent;

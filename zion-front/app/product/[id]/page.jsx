"use client";

import Center from "../../components/Center";
import Header from "../../header/page";
import Title from "../../components/Title";
import styled from "styled-components";
import WhiteBox from "../../components/WhiteBox";
import ProductImages from "../../components/ProductImages";
import Button from "../../components/Button";
import CartIcon from "../../components/icons/CartIcon";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../components/CartContext";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductPage({ params }) {
  const { addProduct } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({} || null);

  async function getproduct() {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3000/api/products/${params.id}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();

      // console.log('Available response',res);
      // console.log("Available product", data);

      setProduct(data.product);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
     
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product?.images} />
          </WhiteBox>
          <div>
            <Title>{product?.title}</Title>
            <p>{product?.description}</p>
            <PriceRow>
              <div>
                <Price>${product?.price}</Price>
              </div>
              <div>
                <Button $primary onClick={() => addProduct(product._id)}>
                  <CartIcon />
                  Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

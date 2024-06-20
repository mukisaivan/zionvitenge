"use client";
import Link from "next/link";
import styled from "styled-components";
import Center from "../components/Center";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import BarsIcon from "../components/icons/Bars";
import ZionLogo from "../components/ZionLogo";
import axios from "axios";

const StyledHeader = styled.header`
  background-color: #222;
  height: 80px;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  height: 80px;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.$mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: #555;
    }
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #444;
  min-width: 160px;
  z-index: 1;
  ${NavLink}:hover & {
    display: block;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleNavLinkClick = () => {
    setMobileNavActive(false);
  };

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <ZionLogo />
          </Logo>
          <StyledNav $mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>
              <div className=" flex gap-2">
                Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              {loading && <div>Loading....</div>}
              <Dropdown>
                <DropdownContent>
                  {categories.map((category) => (
                    <Link
                      key={category._id}
                      href={`/categories/${category._id}`}
                    >
                      {category.name}
                    </Link>
                  ))}
                </DropdownContent>
              </Dropdown>
            </NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

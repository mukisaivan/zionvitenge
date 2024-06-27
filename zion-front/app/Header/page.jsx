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


const tStyledHeader = "bg-[#222] h-[80px]"


const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
  `;


const tLogo = 'text-white no-underline relative z-1'




const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  height: 80px;
`;



const tWrappper = 'h-[80px] flex justify-between py-[20px] px-[0px]'




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



// const tStyledNav = `fixed inset-0 p-5 pt-20 bg-gray-900 gap-5 md:flex md:static md:p-0 ${mobileNavActive ? 'block' : 'hidden'}`

const textstyles = (
  <div className=" fixed inset-0 p-5 pt-[70px] bg-[#222222] gap-[15px] ">

  </div>
)






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
  background-color: #333;
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



export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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






  const categoriesdiv = (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <NavLink href="/categories">
        <div className="flex gap-2">
          Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </NavLink>

      {loading && <div>Loading....</div>}

      {isOpen && (
        
        <DropdownContent>
          {categories.map((category) => (
            <Link key={category._id} href={`/categories/${category._id}`} passHref>
              <>{category.name}</>
            </Link>
          ))}
        </DropdownContent>
      )}
    </div>
  )


  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <ZionLogo />
          </Logo>

            {/* this was NavLink  then i changed it to a div with the changed classes */}

          {/* <div className="fixed inset-0 p-5 pt-20 bg-gray-900 gap-5 md:flex md:static md:p-0 ${mobileNavActive ? 'block' : 'hidden'}"> */}
          <div className={`${mobileNavActive ? 'block' : 'hidden'} md:flex md:static md:p-0 fixed inset-0 p-5 pt-20 gap-5 bg-[#222222] `}>
            <NavLink href={"/"} onClick={handleNavLinkClick}>Home</NavLink>
            <NavLink href={"/products"} onClick={handleNavLinkClick}>All products</NavLink>
           {categoriesdiv}
            <NavLink href={"/account"} onClick={handleNavLinkClick}>Account</NavLink>
            <NavLink href={"/cart"} onClick={handleNavLinkClick}>Cart ({cartProducts.length})</NavLink>
          </div>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

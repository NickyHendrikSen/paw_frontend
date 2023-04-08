import Link from "next/link";
import Image from "next/image";
import FormInput from "../Form/FormInput";

import {
  HeaderContainer,
  TopContainer,
  LogoSection,
  SearchSection,
  CartSection,
  CartNumber,
  LineDivider,
  BottomContainer,
  LinkWrapper,
  Dropdown,
  DropdownItem
} from "./HeaderStyles"
  
import pawLogo from "../../public/images/paw-logo.png"
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../Button/Button";
import Container from "./Container";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/store/AuthContext";

const Header: React.FC = () => {
  const itemCount = 50;
  const router = useRouter()
  const authContext = useContext(AuthContext)

  const [search, setSearch] = useState<string>("");

  const handleLogout = () => {
    authContext?.logout()
  }

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(`/products?search=${search}`)
    }
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value) setSearch(event.target.value.toString());
  }

  return (
    <HeaderContainer>
      <TopContainer>
        <LogoSection>
          <Link href={"/"}>
            <Image src={pawLogo} alt="logo"/>
          </Link>            
        </LogoSection>
        <SearchSection>
          <FormInput placeholder="Search" name="search" icon={<AiOutlineSearch />} 
            onKeyPress={handleSearch} onChange={handleSearchChange}/>
        </SearchSection>
        <CartSection hasItem={itemCount > 0 ? true: false}>
          <FaShoppingCart />
          <CartNumber>{itemCount > 9 ? "9+" : itemCount}</CartNumber>
        </CartSection>
        <LineDivider />
        {authContext?.isAuthenticated() ?
          <Button onClick={handleLogout}
            fill={false} fontSize={15} paddingHorizontal="15px" paddingVertical="8px" marginLeft="1%">Logout</Button>
           :
          <>
            <Button href="login"
              fill={false} fontSize={15} paddingHorizontal="15px" paddingVertical="8px" marginLeft="1%">Login</Button>
            <Button href="register"
              fill={true} fontSize={15} paddingHorizontal="15px" paddingVertical="8px" marginLeft="7px">Register</Button>
          </>
        }
      </TopContainer>
      <BottomContainer>
        <Container>
          <LinkWrapper>
            <Dropdown>
              <Link href="/products">
                Products
              </Link>
                <DropdownItem>
                <Link href="/products?categories=apparel">
                  Apparel
                </Link>
                <Link href="/products?categories=collar">
                  Collars
                </Link>
                <Link href="/products?categories=treat">
                  Treats
                </Link>
                <Link href="/products?categories=leash">
                  Leashes
                </Link>
                <Link href="/products?categories=toy">
                  Toys
                </Link>
                <Link href="/products?categories=food">
                  Food
                </Link>
              </DropdownItem>
            </Dropdown>
            <Link href="location">
              Our Location
            </Link>
            <Link href="about-us">
              About Us
            </Link>
          </LinkWrapper>
        </Container>
      </BottomContainer>
    </HeaderContainer>
  )
}
  
export default Header;
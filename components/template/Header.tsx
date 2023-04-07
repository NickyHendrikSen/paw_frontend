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
  LinkWrapper
} from "./HeaderStyles"
  
import pawLogo from "../../public/images/paw-logo.png"
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../Button/Button";
import Container from "./Container";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/store/AuthContext";

const Header: React.FC = () => {
  const itemCount = 50;
  const router = useRouter()
  const authContext = useContext(AuthContext)

  const handleLogout = () => {
    authContext?.logout()
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
          <FormInput placeholder="Search" name="search" icon={<AiOutlineSearch />}/>
        </SearchSection>
        <CartSection hasItem={itemCount > 0 ? true: false}>
          <FaShoppingCart />
          <CartNumber>{itemCount > 9 ? "9+" : itemCount}</CartNumber>
        </CartSection>
        <LineDivider />
        {authContext?.isAuthenticated() ?
          <Button onClick={handleLogout}
          text="Logout" fill={false} fontSize={15} paddingHorizontal="15px" paddingVertical="8px" marginLeft="1%"/>
           :
          <>
            <Button href="login"
              text="Login" fill={false} fontSize={15} paddingHorizontal="15px" paddingVertical="8px" marginLeft="1%"/>
            <Button href="register"
              text="Register" fill={true} fontSize={15} paddingHorizontal="15px" paddingVertical="8px" marginLeft="7px"/>
          </>
        }
      </TopContainer>
      <BottomContainer>
        <Container>
          <LinkWrapper>
            <Link href="products">
              Products
            </Link>
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
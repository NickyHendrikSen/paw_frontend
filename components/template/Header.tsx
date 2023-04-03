import Link from "next/link";
import Image from "next/image";
import FormInput from "../form/FormInput";

import {
    Container,
    TopContainer,
    LogoSection,
    SearchSection,
    CartSection,
    CartNumber,
    LineDivider
  } from "./HeaderStyles"
  
import pawLogo from "../../public/images/paw-logo.png"
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../button/Button";

const Header: React.FC = () => {
  const itemCount = 50;

  return (
    <Container>
      <TopContainer>
        <LogoSection>
          <Link href={"/"}>
            <Image src={pawLogo} alt="logo"/>
          </Link>            
        </LogoSection>
        <SearchSection>
          <FormInput placeholder="Search" icon={<AiOutlineSearch />}/>
        </SearchSection>
        <CartSection hasItem={itemCount > 0 ? true: false}>
          <FaShoppingCart />
          <CartNumber>{itemCount > 9 ? "9+" : itemCount}</CartNumber>
        </CartSection>
        <LineDivider />
        <Button href="login"
          text="Login" fill={false} fontSize={15} paddingHorizontal="15px" paddingVertical="8px" marginLeft="1%"/>
        <Button href="register"
          text="Register" fill={true} fontSize={15} paddingHorizontal="15px" paddingVertical="8px" marginLeft="7px"/>
      </TopContainer>
    </Container>
  )
}
  
export default Header;
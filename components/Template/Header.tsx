import Link from "next/link";
import Image from "next/image";
import FormInput from "../Form/FormInput";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../Button/Button";
import Container from "./Container";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/store/AuthContext";
import { RxTriangleDown } from "react-icons/rx";

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
  DropdownItem,
  ProfileHeader,
  DropdownProfile,
  DropdownProfileItem
} from "./HeaderStyles"
  
import pawLogo from "../../public/images/paw-logo.png"
import { useAsync } from "@/utils/useAsync";
import { CategoryAPI } from "@/api/apis/CategoryAPI";
import { Category } from "paw-global-type";

const Header: React.FC = () => {
  const { execute, error, status, value } = useAsync(CategoryAPI.getCategories);
  const [ categories, setCategories ] = useState<Array<Category>>();

  const router = useRouter()
  const authContext = useContext(AuthContext)
  const itemCount = authContext?.user?.cart?.items?.reduce((accumulator: number, { quantity }: {quantity: number}) => {
    return accumulator + quantity
  }, 0) || 0;

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

  const toCart = () => {
    router.push("/cart");
  }

  useEffect(() => {
    if(status === "success") {
      setCategories(value?.data?.categories);
    }
  }, [status])

  useEffect(() => {
    execute({});
  }, [])

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
        <CartSection hasItem={itemCount > 0 ? true: false} onClick={toCart}>
          <FaShoppingCart />
          <CartNumber>{itemCount > 9 ? "9+" : itemCount}</CartNumber>
        </CartSection>
        <LineDivider />
        {authContext?.isAuthenticated() ?
          <ProfileHeader>
            <span className="name">{authContext?.user?.name}</span>
            <RxTriangleDown />
            <DropdownProfile>
              <DropdownProfileItem>
                <Link href="/orders">
                  Order History
                </Link>
              </DropdownProfileItem>
              <DropdownProfileItem onClick={handleLogout}>Logout</DropdownProfileItem>
            </DropdownProfile>
          </ProfileHeader>
          // <Button onClick={handleLogout}
          //   fill={false} fontSize={15} paddingHorizontal="15px" paddingVertical="8px" marginLeft="1%">Logout</Button>
           :
          <>
            <Button href="/login"
              fill={false} fontSize={15} paddingHorizontal="15px" paddingVertical="8px" marginLeft="1%">Login</Button>
            <Button href="/register"
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
                  {
                    categories && categories.map((category) => (
                      <Link href={`/products?categories=${category.slug}`} key={category._id}>
                        {category.display_name}
                      </Link>
                    ))
                  }
              </DropdownItem>
            </Dropdown>
            <Link href="/location">
              Our Location
            </Link>
            <Link href="/about">
              About Us
            </Link>
            {authContext?.isAuthenticated() && authContext?.isAdmin() ? 
            (
              <Link href="/admin/add-product">
                Add Product
              </Link>
            ) : ''}
          </LinkWrapper>
        </Container>
      </BottomContainer>
    </HeaderContainer>
  )
}
  
export default Header;
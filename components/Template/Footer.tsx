import Link from "next/link";
import Image from "next/image";

import {
  FooterSection,
  Wrapper,
  LogoSlogan,
  Links,
  BottomWrapper,
  SocialMediaSection,
  SocialMedia,
  CopyrightText,
} from "./FooterStyles"
import Container from "./Container";
import pawLogo from "../../public/images/paw-logo.png"
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import { BsDiscord, BsInstagram, BsTwitch, BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
    
  const authContext = useContext(AuthContext)
  const router = useRouter();

  const handleLogout = () => {
    authContext?.logout()
  }

  const goToHome = () => {
    router.push('/')
  }

  return (
    <FooterSection>
      <Container paddingTop="64px" paddingBottom="64px" fullWidthResponsiveness={920}>
        <Wrapper>
          <div>
            <LogoSlogan onClick={goToHome}>
              <Image src={pawLogo} alt="logo"/>
              <div className="slogan">YOUR DOG&apos;S<br />BESTFRIEND</div>
            </LogoSlogan>
          </div>
            <Links>
              <Link href="/product">
                <span>Products</span>
              </Link>
              <Link href="/location">
                <span>Our Location</span>
              </Link>
              <Link href="/about">
                <span>About Us</span>
              </Link>
            </Links>
            <Links>
              <Link href="/policy">
                <span>Terms and Policy</span>
              </Link>
              <Link href="/product">
                <span>Contact Us</span>
              </Link>
            </Links>
            <Links>
              {
                authContext?.isAuthenticated() ?
                <>
                  <Link href="/cart">
                    <span>Cart</span>
                  </Link>
                  <Link href="/orders">
                    <span>Order History</span>
                  </Link>
                  <div onClick={handleLogout} className="item">
                    <span>Logout</span>
                  </div>
                </>
                :
                <>
                  <Link href="/login">
                    <span>Login</span>
                  </Link>
                  <Link href="/register">
                    <span>Register</span>
                  </Link>
                </>
              }
            </Links>
        </Wrapper>
        <BottomWrapper>
          <SocialMediaSection>
            <SocialMedia>
              <ImFacebook />
            </SocialMedia>
            <SocialMedia>
              <BsTwitter />
            </SocialMedia>
            <SocialMedia>
              <BsInstagram />
            </SocialMedia>
            <SocialMedia>
              <BsDiscord />
            </SocialMedia>
            <SocialMedia>
              <BsTwitch />
            </SocialMedia>
          </SocialMediaSection>
          <CopyrightText>© Copyright {new Date().getFullYear().toString()}. All rights reserved.</CopyrightText>
        </BottomWrapper>
      </Container>
    </FooterSection>
  )
}
  
export default Footer;
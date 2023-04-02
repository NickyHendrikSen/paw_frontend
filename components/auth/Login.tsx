import Image from 'next/image'
import { Inter } from 'next/font/google'

import { 
  Container,
  LeftContainer,
  LogoSection,
  MidSection,
  LoginButton,
  RightContainer
} from "./LoginStyles"

import pawLogo from "../../public/images/paw-logo.png"

export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <LogoSection>
          <Image src={pawLogo} alt="not found"/>
        </LogoSection>
        <MidSection>
          <LoginButton>LOGIN</LoginButton>
        </MidSection>
      </LeftContainer>
      <RightContainer>
      </RightContainer>
    </Container>
  )
}

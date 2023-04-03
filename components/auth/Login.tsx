import Image from 'next/image'

import FormInput from '../form/FormInput'

import { AiFillLock } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

import { 
  Container,
  LeftContainer,
  LogoSection,
  MidSectionWrapper,
  MidSection,
  MidSectionContent,
  TitleText,
  Info,
  LoginButton,
  RightContainer
} from "./Styles"

import pawLogo from "../../public/images/paw-logo.png"
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
      </LeftContainer>
      <RightContainer>
        <LogoSection>
          <Link href={"/"}>
            <Image src={pawLogo} alt="logo"/>
          </Link>            
        </LogoSection>
        <MidSectionWrapper>
          <MidSection>
            <MidSectionContent>
              <TitleText>LOGIN</TitleText>
              <FormInput placeholder={"Email"} marginTop='25px' icon={<IoIosMail />} width='60%'/>
              <FormInput placeholder={"Password"} marginTop='25px' icon={<AiFillLock />} width='60%' type={"password"}/>
              <Info>Don't have an account? <Link href={"register"}>Register Now</Link></Info>
              <LoginButton>LOGIN</LoginButton>
            </MidSectionContent>
          </MidSection>
        </MidSectionWrapper>
      </RightContainer>
    </Container>
  )
}

export default Login;
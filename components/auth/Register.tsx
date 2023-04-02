import Image from 'next/image'

import FormInput from '../form/FormInput'

import { AiFillLock } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";

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

const Register: React.FC<null> = () => {
  return (
    <Container>
      <LeftContainer>
      </LeftContainer>
      <RightContainer>
        <LogoSection>
          <Link href={"/"}>
            <Image src={pawLogo} alt="not found"/>
          </Link>            
        </LogoSection>
        <MidSectionWrapper>
          <MidSection>
            <MidSectionContent>
              <TitleText>REGISTER</TitleText>
              <FormInput placeholder={"Name"} marginTop='25px' icon={<BsFillPersonFill />} width='60%'/>
              <FormInput placeholder={"Email"} marginTop='25px' icon={<IoIosMail />} width='60%'/>
              <FormInput placeholder={"Password"} marginTop='25px' icon={<AiFillLock />} width='60%' type={"password"}/>
              <FormInput placeholder={"Confirm Password"} marginTop='25px' icon={<AiFillLock />} width='60%' type={"password"}/>
              <Info>Already have an account? <Link href={"login"}>Login Here</Link></Info>
              <LoginButton>REGISTER</LoginButton>
            </MidSectionContent>
          </MidSection>
        </MidSectionWrapper>
      </RightContainer>
    </Container>
  )
}

export default Register;
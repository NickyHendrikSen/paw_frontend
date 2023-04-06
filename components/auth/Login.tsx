import Image from 'next/image'
import Link from 'next/link';
import Button from '../button/Button';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

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
  RightContainer
} from "./Styles"

import pawLogo from "../../public/images/paw-logo.png"
import FormErrorText from '../form/FormErrorText';

type LoginFormValue = {
  email?: string,
  password?: string
}

const schema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string().required("Password is required")
    .min(8, "Password must be at least 8 characters").max(16, "Password must be at most 16 characters"),
})

const Login: React.FC = () => {

  // const { onRegisterRequest, error, status } = props;
  const { register, handleSubmit, formState:{ errors } } = useForm<LoginFormValue>({
    resolver: yupResolver(schema),
  });

  const onSuccess = (data: LoginFormValue) => {
    console.log(data);
  };

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
              <form onSubmit={handleSubmit(onSuccess)} >
                <FormInput placeholder={"Email"} marginTop='25px' icon={<IoIosMail />} width='60%' name="email" register={register("email")}/>
                <FormErrorText>{errors.email?.message}</FormErrorText>
                <FormInput placeholder={"Password"} marginTop='25px' icon={<AiFillLock />} width='60%' type={"password"} name="password" register={register("password")}/>
                <FormErrorText>{errors.password?.message}</FormErrorText>
                <Info>Don't have an account? <Link href={"register"}>Register Now</Link></Info>
                <Button text="LOGIN" fontSize={15} width='200px' height='50px' marginTop='15px' fill={false}/>
              </form>
            </MidSectionContent>
          </MidSection>
        </MidSectionWrapper>
      </RightContainer>
    </Container>
  )
}

export default Login;
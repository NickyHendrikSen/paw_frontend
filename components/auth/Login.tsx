import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
import Button from '../Button/Button';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import FormInput from '../Form/FormInput'
import FormErrorText from '../Form/FormErrorText';
import { useAsync } from '@/utils/useAsync';
import { UserAPI } from '@/api/apis/UserAPI';
import { toast } from "react-toastify";
import { AuthContext } from "../../store/AuthContext";

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

type LoginFormValue = {
  email: string,
  password: string
}

const schema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string().required("Password is required")
    .min(8, "Password must be at least 8 characters").max(16, "Password must be at most 16 characters"),
})

const Login: React.FC = () => {

  const { execute, error, status, value } = useAsync(UserAPI.login)
  const { register, handleSubmit, formState:{ errors } } = useForm<LoginFormValue>({
    resolver: yupResolver(schema),
  });
  const router = useRouter()
  const authContext = useContext(AuthContext)

  const onSuccess = (data: LoginFormValue) => {
    execute(data);
  };

  useEffect(() => {
    if(status === "success") {
      authContext?.login(value?.data?.token || null)
      toast.success("Successfully Logged In!")
      router.push("/login")
    }
    if(status === "error") {
      toast.error(error?.message);
    }
  }, [status])

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
                <Button fontSize={15} width='200px' height='50px' marginTop='15px' fill={false}>LOGIN</Button>
              </form>
            </MidSectionContent>
          </MidSection>
        </MidSectionWrapper>
      </RightContainer>
    </Container>
  )
}

export default Login;
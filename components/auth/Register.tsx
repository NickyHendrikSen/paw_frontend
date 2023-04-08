import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
import Button from '../Button/Button';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import FormInput from '../Form/FormInput'
import FormErrorText from '../Form/FormErrorText';
import { useAsync } from '@/utils/useAsync';
import { UserAPI } from '@/api/apis/UserAPI';
import { toast } from "react-toastify";

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
  RightContainer
} from "./Styles"

import pawLogo from "../../public/images/paw-logo.png"

type RegisterFormValue = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string  
}

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string().required("Password is required")
    .min(8, "Password must be at least 8 characters").max(16, "Password must be at most 16 characters"),
  confirmPassword: Yup.string()
    // .oneOf([Yup.ref('password'), ""], 'Passwords must match').required("Confirm Password is required")
    .test('password-match', 'Passwords must match', function (value) { return this.parent.password === value })
    .required("Confirm Password is required")
})

const Register: React.FC = () => {

  const { execute, error, status } = useAsync(UserAPI.register)
  const { register, handleSubmit, formState:{ errors } } = useForm<RegisterFormValue>({
    resolver: yupResolver(schema),
  });
  const router = useRouter()

  const onSuccess = (data: RegisterFormValue) => {
    execute(data);
  };

  useEffect(() => {
    if(status === "success") {
      toast.success("Successfully Registered!")
      router.push("/login")
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
              <TitleText>REGISTER</TitleText>
              <form onSubmit={handleSubmit(onSuccess)} >
                <FormInput placeholder={"Name"} marginTop='25px' icon={<BsFillPersonFill />} width='60%' name="name" register={register("name")}/>
                <FormErrorText>{errors.name?.message}</FormErrorText>
                <FormInput placeholder={"Email"} marginTop='25px' icon={<IoIosMail />} width='60%' name="email" register={register("email")}/>
                <FormErrorText>{errors.email?.message}</FormErrorText>
                <FormInput placeholder={"Password"} marginTop='25px' icon={<AiFillLock />} width='60%' type={"password"} name="password" register={register("password")}/>
                <FormErrorText>{errors.password?.message}</FormErrorText>
                <FormInput placeholder={"Confirm Password"} marginTop='25px' icon={<AiFillLock />} width='60%' type={"password"} name="confirmPassword" register={register("confirmPassword")}/>
                <FormErrorText>{errors.confirmPassword?.message}</FormErrorText>
                <Info>Already have an account? <Link href={"login"}>Login Here</Link></Info>
                <Button fontSize={15} width='200px' height='50px' marginTop='15px' fill={false} type="submit">REGISTER</Button>
              </form>
            </MidSectionContent>
          </MidSection>
        </MidSectionWrapper>
      </RightContainer>
    </Container>
  )
}

export default Register;
import { TitleText } from "@/styles/Typography";
import Container from "../Template/Container";
import {
  DescriptionText,
  LinkText
} from "./Styles"
import Link from "next/link";

const Home: React.FC = () => {
  const githubLink = "https://github.com/NickyHendrikSen"
  const linkedinLink = "https://www.linkedin.com/in/nicky-hendrik-sen-4883b2174/"
  return (
    <Container paddingTop="50px">
      <TitleText>This is a home page</TitleText>
      <DescriptionText>This is a portfolio website made by Nicky Hendrik Sen</DescriptionText>
      <LinkText>Visit my LinkedIn <Link href={linkedinLink}>here</Link></LinkText>
      <LinkText>Visit my GitHub <Link href={githubLink}>here</Link></LinkText>
      <br />
      <DescriptionText>Techs : Next.js, Node.js, MongoDB, and Mongoose.</DescriptionText>
      <br />
      <DescriptionText>Stripe checkout that is used in this website is a test environment meaning that you won't get charged, 
        However you can checkout using this test cards provided by Stripe : 
        <br />Number : 4242 4242 4242 4242
        <br />CVC : Any 3 digits
        <br />Date : Any future date
        </DescriptionText>
    </Container>
  )
}

export default Home;
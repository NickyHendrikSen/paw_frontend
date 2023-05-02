import { TitleText } from "@/styles/Typography";
import Container from "../Template/Container";
import Link from "next/link";

import {
  AboutText,
  StoreNavigation,
  Highlight
} from "./Styles"

const About: React.FC = () => {
  return (
    <Container paddingTop="50px">
      <TitleText>About Us</TitleText>
      <AboutText>This is an about page. Since this is a <Highlight>portfolio website</Highlight>, 
        I will place an auto-generated text below, created by <Highlight>ChatGPT</Highlight>, to serve as a placeholder and give an idea of what it will look like.
        <br /><br />        
        Welcome to <Highlight>Paw</Highlight>, your one-stop-shop for all your dog's necessities. Our company was founded with the mission to provide high-quality dog products to pet owners across the world. We understand the important role that dogs play in our lives and we believe that they deserve the best care possible.
        <br /><br />
        At <Highlight>Paw</Highlight>, we are committed to providing you with an extensive range of dog products that are designed to meet the needs of every dog, no matter their breed, size or age. From leashes and collars to food and toys, we have everything you need to keep your furry friend happy and healthy.
        <br /><br />
        We believe that every dog is unique and that's why we offer a wide range of products to suit every dog's individual needs. Our team of experts is dedicated to carefully curating the best products available in the market so that you can rest assured that your dog is receiving only the best.
        <br /><br />
        At Paw, we understand that purchasing pet products online can be overwhelming. That's why we've made it our priority to create a user-friendly website that makes shopping for your dog easy and stress-free. Our website is designed to provide you with a seamless shopping experience, from easy navigation to secure checkout.
        <br /><br />
        We take pride in our exceptional customer service, and our team of dedicated professionals is always ready to assist you with any queries you may have. We believe that building strong relationships with our customers is essential, and we are committed to ensuring that you have the best possible shopping experience with us.
        <br /><br />
        At Paw, we believe in giving back to the community, and that's why we have partnered with various animal shelters and rescue organizations to donate a portion of our profits to support their efforts. We understand that every little bit counts, and we are proud to be making a positive impact on the lives of dogs in need.
        <br /><br />
        Thank you for choosing Paw as your go-to source for all your dog's necessities. We look forward to serving you and your furry friend for years to come.
      </AboutText>
      <StoreNavigation>
        To visit our physical store, please check for the location nearest to you <Link href={"/location"}>here</Link>. 
      </StoreNavigation>
    </Container>
  )
}

export default About;
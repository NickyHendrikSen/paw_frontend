import EmptyCartImage from "../../public/images/empty-cart-image.jpg"
import Image from 'next/image';
import { useRouter } from "next/router";

import { 
  Container,
  BigText,
  SmallText,
  ShopNowText
} from "./EmptyCartStyles"

const EmptyCart: React.FC = () => {
  const router = useRouter();

  const goToProducts = () => {
    router.push("/products");
  }
  
  return (
    <Container>
      <Image src={EmptyCartImage} alt="Empty cart image"/>
      <BigText>Whoops, your cart is empty...</BigText>
      <SmallText>Fill it with your dog needs!</SmallText>
      <ShopNowText onClick={goToProducts}>Shop now</ShopNowText>
    </Container>
  )
}

export default EmptyCart;
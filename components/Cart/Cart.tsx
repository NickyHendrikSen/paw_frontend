import { useEffect, useState } from 'react';
import { useAsync } from "@/utils/useAsync";
import Container from "../Template/Container";
import { CartAPI } from '@/api/apis/CartAPI';
import { useRouter } from "next/router";
import { TitleText } from '@/styles/Typography';

import {
  LineDivider,
  CheckoutSection,
  TotalPriceText,
  CheckoutButton
} from "./Styles"
import CartDisplay from './CartDisplay';
import { FaShoppingCart } from 'react-icons/fa';

type CartState = {
  _product: {
    _id: string,
    category: string,
    description: string,
    imageUrl: string,
    name: string,
    price: number,
    stock: number,
  },
  _id: string,
  quantity: number,
}

const Cart: React.FC = () => {
  const { execute, error, status, value } = useAsync(CartAPI.getCart)
  const [ cart, setCart ] = useState<Array<CartState>>()
  const router = useRouter()

  const refreshCart = () => {
    execute({});
  }

  useEffect(() => {
    if(status === "success") {
      setCart(value?.data?.cart)
      console.log(value?.data?.cart)
    }
    if(status === "error") {
      console.log(error);
    }
  }, [status])

  useEffect(() => {
    execute({});
  }, []);

  return (
    <Container paddingTop='50px' paddingBottom='50px'>
      <TitleText>Cart</TitleText>
      {cart?.map((c) => (<CartDisplay {...c} refreshCart={refreshCart}></CartDisplay>))}
      <LineDivider />
      <CheckoutSection>
        <TotalPriceText>
          <div className='text'>Total</div>
          <div className='total'>
            ${cart?.reduce((accumulator, { _product, quantity }) => {
              return accumulator + (_product.price * quantity)
            }, 0)}
          </div>
        </TotalPriceText>
        <CheckoutButton><FaShoppingCart /> Checkout</CheckoutButton>
      </CheckoutSection>
    </Container>
  )
}

export default Cart;
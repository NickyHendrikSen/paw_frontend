import { useContext, useEffect, useState } from 'react';
import { useAsync } from "@/utils/useAsync";
import Container from "../Template/Container";
import { CartAPI } from '@/api/apis/CartAPI';
import { useRouter } from "next/router";
import { TitleText } from '@/styles/Typography';
import CartDisplay from './CartDisplay';
import { FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from '@/store/AuthContext';
import EmptyCart from './EmptyCart';
import Checkout from "../Checkout/Checkout"
import Loading from '../Loading/Loading';
import { Modal } from '@mui/material';

import {
  LineDivider,
  CheckoutSection,
  SubtotalPriceText,
  ShippingPriceText,
  TotalPriceText,
  CheckoutButton
} from "./Styles"

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
  const [ checkoutModal, setCheckoutModal ] = useState(false);
  const [ subTotal, setSubtotal ] = useState<number>(0);
  const [ isLoading, setLoading ] = useState<boolean>(false);
  const router = useRouter()
  const authContext = useContext(AuthContext);

  const refreshCart = () => {
    execute({});
    authContext?.refreshProfile();
  }

  const onCloseModal = () => {
    if(isLoading) return;
    setCheckoutModal(false);
  }

  const onCheckout = () => {
    setCheckoutModal(true);
  }

  useEffect(() => {
    if(status === "success") {
      setCart(value?.data?.cart)
    }
    if(status === "error") {
      console.log(error?.message);
    }
  }, [status])

  useEffect(() => {
    setSubtotal(cart?.reduce((accumulator, { _product, quantity }) => {
      return accumulator + (_product.price * quantity)
    }, 0) ?? 0)
  }, [cart])

  useEffect(() => {
    execute({});
  }, []);

  if(status === "pending") {
    return (<Loading />);
  }

  if(cart && cart?.length == 0 && status === "success") {
    return (<EmptyCart />);
  }

  return (
    <Container paddingTop='50px' paddingBottom='50px'>
      <Modal open={checkoutModal} onClose={onCloseModal} >
        <Checkout onClose={onCloseModal} setLoading={setLoading} isLoading={isLoading}/>
      </Modal>
      <TitleText>Cart</TitleText>
      {cart?.map((c) => (<CartDisplay key={c._id} {...c} refreshCart={refreshCart}></CartDisplay>))}
      
      <LineDivider />
      <CheckoutSection>
        <SubtotalPriceText>
          <div className='text'>Subtotal</div>
          <div className='total'>
            ${subTotal.toFixed(2)}
          </div>
        </SubtotalPriceText>
        <ShippingPriceText>
          <div className='text'>Shipping</div>
          <div className='total'>
            $5.00
          </div>
        </ShippingPriceText>
        <TotalPriceText>
          <div className='text'>Total</div>
          <div className='total'>
            ${(subTotal + 5).toFixed(2)}
          </div>
        </TotalPriceText>
        <CheckoutButton onClick={onCheckout} disabled={isLoading}><FaShoppingCart /> Checkout</CheckoutButton>
      </CheckoutSection>
    </Container>
  )
}

export default Cart;
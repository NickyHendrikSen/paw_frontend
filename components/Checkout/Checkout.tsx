import React, { useEffect, useState } from "react";
import { useAsync } from "@/utils/useAsync";
import { CartAPI } from "@/api/apis/CartAPI";
import { loadStripe } from '@stripe/stripe-js';

import {
  Wrapper,
  CheckoutTitle,
  CheckoutText,
  CheckoutButtonYes,
  CheckoutButtonNo
} from "./CheckoutStyles"

type CheckoutProps = {
  onClose: () => unknown
}

type CheckoutState = {
  products: [{
    quantity: Number,
    _product: {
      name: string,
      price: number
    }
  }],
  sessionId: string,
  totalSum: Number
}

const Checkout: React.FC<CheckoutProps> = ({ onClose }) => {

  const { execute, value, status } = useAsync(CartAPI.checkout);
  // const [ checkoutData, setCheckoutData ] = useState<CheckoutState | undefined>();
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
  );
  
  const stripeCheckout = async (checkoutData: CheckoutState) => {
    try {
      const stripe = await stripePromise;

      if(!stripe) {
        return;
      }
      
      const result = await stripe.redirectToCheckout({
        sessionId: checkoutData?.sessionId ?? "",
      });

      if (result.error) {
        alert(result.error.message);
      }
      console.log(result)
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    onClose();
  }

  const handleCheckout = () => {
    execute({});
  };

  useEffect(() => {
    if(status === "success") {
      stripeCheckout(value?.data?.data)
    }
  }, [status])

  return (
    <Wrapper>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <CheckoutText>Are you sure that you want to checkout?</CheckoutText>
      <CheckoutButtonYes onClick={handleCheckout}>Yes</CheckoutButtonYes>
      <CheckoutButtonNo onClick={handleClose}>No</CheckoutButtonNo>
    </Wrapper>
  )
}

export default Checkout;
import React, { useEffect, useState } from "react";
import { useAsync } from "@/utils/useAsync";
import { CartAPI } from "@/api/apis/CartAPI";
import { loadStripe } from '@stripe/stripe-js';

import {
  Wrapper,
  LoadingWrapper,
  CheckoutTitle,
  CheckoutText,
  CheckoutButtonYes,
  CheckoutButtonNo
} from "./CheckoutStyles"
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

type CheckoutProps = {
  onClose: () => unknown,
  setLoading: (v: boolean) => unknown,
  isLoading: boolean
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

const Checkout: React.FC<CheckoutProps> = ({ onClose, setLoading, isLoading }) => {

  const { execute, value, status, error } = useAsync(CartAPI.checkout);
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
    setLoading(true);
    execute({});
  };

  useEffect(() => {
    if(status === "success") {
      stripeCheckout(value?.data?.data)
    }
    if(status === "error") {
      toast.error(error?.message);
      setLoading(false);
    }
  }, [status])

  return (
    <Wrapper>
      {isLoading && 
      (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
      <CheckoutTitle>Checkout</CheckoutTitle>
      <CheckoutText>Are you sure that you want to checkout?</CheckoutText>
      <CheckoutButtonYes onClick={handleCheckout} disabled={isLoading}>Yes</CheckoutButtonYes>
      <CheckoutButtonNo onClick={handleClose} disabled={isLoading}>No</CheckoutButtonNo>
    </Wrapper>
  )
}

export default Checkout;
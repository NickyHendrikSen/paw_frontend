import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

import {
  Container,
  BigText,
  SmallText,
  IconWrapper,
  Icon
} from "./CheckoutSuccessStyles"

const CheckoutSuccess: React.FC = () => {

  return (
    <Container>
      <IconWrapper>
        <Icon>
          <TiTick />
        </Icon>
      </IconWrapper>
      <BigText>Checkout Success</BigText>
      <SmallText>Thank you for checking out! Your order is on the way!</SmallText>
    </Container>
  )
}

export default CheckoutSuccess;
import React, { useEffect, useState } from "react";
import { TiTimes } from "react-icons/ti";

import {
  Container,
  BigText,
  SmallText,
  IconWrapper,
  Icon
} from "./CheckoutCancelStyles"

const CheckoutSuccess: React.FC = () => {

  return (
    <Container>
      <IconWrapper>
        <Icon>
          <TiTimes />
        </Icon>
      </IconWrapper>
      <BigText>Checkout Canceled</BigText>
      <SmallText>Your checkout has been canceled!</SmallText>
    </Container>
  )
}

export default CheckoutSuccess;
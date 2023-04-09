import { useEffect, useState } from 'react';
import { useAsync } from "@/utils/useAsync";
import Container from "../Template/Container";
import { CartAPI } from '@/api/apis/CartAPI';
import { useRouter } from "next/router";
import Image from 'next/image';
import { BoldText } from '@/styles/Typography';
import { BsFillTrashFill } from "react-icons/bs";

import {
  Wrapper,
  ImageSection,
  RightSection,
  InfoSection,
  NameSection,
  PriceSection,
  CategorySection,
  StockSection,
  QuantitySection,
  ItemTotalPrice,
  DeleteIcon
} from "./CartDisplayStyles"
import { toast } from 'react-toastify';

type CartDisplayProps = {
  _product: {
    _id: string,
    category: string,
    description: string,
    imageUrl: string,
    name: string,
    price: number,
    stock: number,
  },
  quantity: number,
  refreshCart: Function
}

const CartDisplay: React.FC<CartDisplayProps> = ({_product, quantity, refreshCart}) => {
  const { category, description, imageUrl, name, price, stock, _id } = _product;
  const { execute, error, status, value } = useAsync(CartAPI.deleteCart)

  const handleDelete = () => {
    execute({productId: _id})
  }

  useEffect(() => {
    if(status === "success") {
      toast.success("Product deleted successfully from cart!")
      refreshCart();
    }
  }, [status])

  return (
    <Wrapper>
      <ImageSection><img src={`http://localhost:8000/${imageUrl}`} alt="Product Image"/></ImageSection>
      <RightSection>
        <InfoSection>
          <NameSection>{name}</NameSection>
          <CategorySection>{category}</CategorySection>
          <PriceSection><BoldText>Price </BoldText>${price.toFixed(2)}</PriceSection>
          <StockSection><BoldText>Stock </BoldText>{stock}</StockSection>
        </InfoSection>
        <QuantitySection>Quantity : {quantity}</QuantitySection>
        <ItemTotalPrice>${(price * quantity).toFixed(2)}</ItemTotalPrice>
        <DeleteIcon onClick={handleDelete}><BsFillTrashFill /></DeleteIcon>
      </RightSection>
    </Wrapper>
  )
}

export default CartDisplay;
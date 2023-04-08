import { useEffect, useState } from 'react';
import { useAsync } from "@/utils/useAsync";
import Container from "../Template/Container";
import { ProductAPI } from "@/api/apis/ProductAPI";
import { useRouter } from "next/router";
import { TitleText } from '@/styles/Typography';

import {
  ProductList,
  SearchText,
  ProductBar,
  GridOption,
  GridOptionItem
} from "./Styles"


const Cart: React.FC = () => {
    const { execute, error, status, value: products } = useAsync(ProductAPI.getProducts)
    const [ gridOption, setGridOption ] = useState<"grid" | "list">("grid")
    const router = useRouter()

    useEffect(() => {
      if(status === "success") {
      }
    }, [status])

    // useEffect(() => {
    //     execute(params)
    // }, [params]);

  return (
    <Container paddingTop='50px'>
      <TitleText>Cart</TitleText>
    </Container>
  )
}

export default Cart;
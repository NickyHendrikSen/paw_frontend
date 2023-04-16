import { TitleText } from "@/styles/Typography";
import Container from "../Template/Container";
import OrderHistoryDisplay from "./OrderHistoryDisplay";
import { OrderAPI } from "@/api/apis/OrderAPI";
import { useAsync } from "@/utils/useAsync";
import { useEffect, useState } from "react";

import {
  
} from "./Styles"

type ProductsType = {
  price: number,
  quantity: number,
  _product: {
    _id: string,
    category: string,
    description: string,
    imageUrl: string,
    name: string,
    price: number,
    stock: number,
  },
}

export type OrderState = {
  _id: string,
  products: Array<ProductsType>,
  shipping: number,
  stripe_total: number,
  subtotal: number,
  total: number,

}

const OrderHistory: React.FC = () => {
  const { execute, error, status, value } = useAsync(OrderAPI.getOrders)
  const [ orders, setOrders ] = useState<Array<OrderState>>()

  useEffect(() => {
    execute({});
  }, [])

  useEffect(() => {
    if(status === "success") {
      setOrders(value?.data?.orders);
    }
  }, [status])

  return (
    <Container paddingTop='50px' paddingBottom='50px'>
      <TitleText>Order History</TitleText>
      
      {orders?.map((order) => (
        <OrderHistoryDisplay {...order}/>
      ))}

    </Container>
  )
}

export default OrderHistory;
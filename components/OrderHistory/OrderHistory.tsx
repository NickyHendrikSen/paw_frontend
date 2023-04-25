import { BoldText, TitleText } from "@/styles/Typography";
import Container from "../Template/Container";
import OrderHistoryDisplay from "./OrderHistoryDisplay";
import { OrderAPI } from "@/api/apis/OrderAPI";
import { useAsync } from "@/utils/useAsync";
import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { format } from "date-fns";

import {
  OrderModal,
  DetailText,
  OrderIdText,
  OrderDateText,
  ShippingInformation
} from "./Styles"

type ProductsType = {
  _id: string,
  price: number,
  quantity: number,
  _product: {
    _id: string,
    _category: string,
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
  checkout_session: any
}

const OrderHistory: React.FC = () => {
  const { execute, error, status, value } = useAsync(OrderAPI.getOrders)
  const [ orders, setOrders ] = useState<Array<OrderState>>();
  const [ order, setOrder ] = useState<OrderState | undefined>();

  const showOrderDetailModal = (id: string) => {
    const order = orders?.find(order => order._id === id);
    if(order) {
      setOrder(order);
    }
  }

  const closeOrderDetailModal = () => {
    setOrder(undefined);
  }

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
      <Modal open={!!order} onClose={closeOrderDetailModal}>
        <OrderModal>
          {/* <DetailText>Order Detail</DetailText> */}
          <OrderIdText><BoldText>Order ID</BoldText> {order?._id}</OrderIdText>
          <OrderDateText><BoldText>Order Date</BoldText> {order && format(new Date(order?.checkout_session?.created*1000), 'dd MMM yyyy')}</OrderDateText>
          <ShippingInformation>
            <div className="title">Shipping Details</div>
            <div className="text">{order?.checkout_session?.shipping?.name}</div>
            <div className="text">{order?.checkout_session?.shipping?.address?.line1}</div>
            <div className="text">{order?.checkout_session?.shipping?.address?.line2}</div>
            <div className="text">{order?.checkout_session?.shipping?.address?.city}, {order?.checkout_session?.shipping?.address?.state} {order?.checkout_session?.shipping?.address?.postal_code}</div>
            <div className="text">{order?.checkout_session?.customer_details?.email}</div>
          </ShippingInformation>
        </OrderModal>
      </Modal>
      <TitleText>Order History</TitleText>
      
      {orders?.map((order) => (
        <OrderHistoryDisplay key={order._id} order={order} showOrderDetail={showOrderDetailModal}/>
      ))}

    </Container>
  )
}

export default OrderHistory;
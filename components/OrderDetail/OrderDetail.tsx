import { useRouter } from "next/router";
import { OrderAPI } from "@/api/apis/OrderAPI";
import { useAsync } from "@/utils/useAsync";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import Loading from "../Loading/Loading";

import {
  Wrapper,
  TitleText,
  OrderIdText,
  DateText,
  ShippingWrapper,
  ProductListWrapper,
  ProductsTitle,
  ProductList
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
  products: ProductsType,
  shipping: number,
  stripe_total: number,
  subtotal: number,
  total: number,
  checkout_session: any,
}

const OrderDetail: React.FC = () => {
  const { execute, error, status, value } = useAsync(OrderAPI.getOrder)
  const [ order, setOrder ] = useState<OrderState>()

  const router = useRouter();
  const { query, isReady } = router;
  const { orderId } = query;

  useEffect(() => {
    if(!isReady) return;

    if(!orderId || typeof orderId != "string") return;

    execute({orderId: orderId})

  }, [query])

  useEffect(() => {
    if(status === "success") {
      setOrder(value?.data?.order);
    }
  }, [status])

  if(!order) {
    return (
      <Loading />
    )
  }

  return (
    <Wrapper>
      <TitleText>INVOICE</TitleText>
      <OrderIdText>#{order?._id}</OrderIdText>
      {/* <DateText>{format(new Date(order.checkout_session?.created*1000), 'MM-dd-yyyy')}</DateText> */}
      <ShippingWrapper>
        <div className="title">Ship To</div>
        <div className="text">{order?.checkout_session?.shipping?.name}</div>
        <div className="text">{order?.checkout_session?.shipping?.address?.line1}</div>
        <div className="text">{order?.checkout_session?.shipping?.address?.line2}</div>
        <div className="text">{order?.checkout_session?.shipping?.address?.city}, {order?.checkout_session?.shipping?.address?.state} {order?.checkout_session?.shipping?.address?.postal_code}</div>
      </ShippingWrapper>
      <ProductListWrapper>
        <ProductsTitle>Products</ProductsTitle>
        <ProductList>

        </ProductList>
      </ProductListWrapper>
    </Wrapper>
  )
}

export default OrderDetail;
import { useRouter } from "next/router";
import { OrderAPI } from "@/api/apis/OrderAPI";
import { useAsync } from "@/utils/useAsync";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import Loading from "../Loading/Loading";
import { BoldText } from "@/styles/Typography";
import { AiOutlineArrowLeft } from "react-icons/ai";

import {
  Wrapper,
  PrintWrapper,
  BackButton,
  PrintButton,
  InvoiceHeader,
  InvoiceInfo,
  TitleText,
  OrderIdText,
  InvoiceNo,
  DateText,
  TopContentWrapper,
  BillWrapper,
  ShippingWrapper,
  ProductListWrapper,
  ProductsTitle,
  ProductList,
  ProductListHead,
  ProductListBody,
  PriceSummaryWrapper,
  PriceSummary,
  PriceSummaryDivider
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
  checkout_session: any,
}

const Invoice: React.FC = () => {
  const { execute, error, status, value } = useAsync(OrderAPI.getOrder)
  const [ order, setOrder ] = useState<OrderState>()

  const router = useRouter();
  const { query, isReady } = router;
  const { orderId } = query;

  const printInvoice = () => {
    print();
  }

  const goToOrderHistory = () => {
    router.push("/orders");
  }

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
      <PrintWrapper>
        <BackButton onClick={goToOrderHistory}><AiOutlineArrowLeft />Back to Order History</BackButton>
        <PrintButton onClick={printInvoice}>Print</PrintButton>
      </PrintWrapper>
      <InvoiceHeader>
        <TitleText>INVOICE</TitleText>
        <InvoiceInfo>
          <InvoiceNo>INVOICE #001</InvoiceNo>
          <DateText>{format(new Date(order.checkout_session?.created*1000), 'dd MMM yyyy')}</DateText>
        </InvoiceInfo>
      </InvoiceHeader>
      {/* <OrderIdText>#{order?._id}</OrderIdText> */}
      <TopContentWrapper>
        <BillWrapper>
          <div className="title">Bill To</div>
          <div className="text">{order?.checkout_session?.customer_details?.name}</div>
          <div className="text">{order?.checkout_session?.customer_details?.address?.line1}</div>
          <div className="text">{order?.checkout_session?.customer_details?.address?.line2}</div>
          <div className="text">{order?.checkout_session?.customer_details?.address?.city}, {order?.checkout_session?.customer_details?.address?.state} {order?.checkout_session?.shipping?.address?.postal_code}</div>
          <div className="text">{order?.checkout_session?.customer_details?.email}</div>
        </BillWrapper>
        <ShippingWrapper>
          <div className="title">Ship To</div>
          <div className="text">{order?.checkout_session?.shipping?.name}</div>
          <div className="text">{order?.checkout_session?.shipping?.address?.line1}</div>
          <div className="text">{order?.checkout_session?.shipping?.address?.line2}</div>
          <div className="text">{order?.checkout_session?.shipping?.address?.city}, {order?.checkout_session?.shipping?.address?.state} {order?.checkout_session?.shipping?.address?.postal_code}</div>
        </ShippingWrapper>
      </TopContentWrapper>
      <ProductListWrapper>
        {/* <ProductsTitle>Products</ProductsTitle> */}
        <ProductList>
          <ProductListHead>
            <tr>
              <th className="left">Product</th>
              <th className="right">Quantity</th>
              <th className="right">Price</th>
              <th className="right">Total</th>
            </tr>
          </ProductListHead>
          <ProductListBody>
            {order?.products?.map((product) => (
              <tr>
                <td className="left">{product._product.name}</td>
                <td className="right">{product.quantity}</td>
                <td className="right">${(product._product.price)?.toFixed(2)}</td>
                <td className="right">${(product.quantity * product.price).toFixed(2)}</td>
              </tr>
            ))}
          </ProductListBody>
        </ProductList>
        <PriceSummaryWrapper>
          <PriceSummary>
            <div className="text">Subtotal</div>
            <div className="price">${order?.subtotal.toFixed(2)}</div>
          </PriceSummary>
          <PriceSummary>
            <div className="text">Shipping</div>
            <div className="price">${order?.shipping.toFixed(2)}</div>
          </PriceSummary>
          <PriceSummaryDivider>
            <hr />
          </PriceSummaryDivider>
          <PriceSummary>
            <div className="text"><BoldText>Total</BoldText></div>
            <div className="price"><BoldText>${order?.total.toFixed(2)}</BoldText></div>
          </PriceSummary>
        </PriceSummaryWrapper>
      </ProductListWrapper>
    </Wrapper>
  )
}

export default Invoice;
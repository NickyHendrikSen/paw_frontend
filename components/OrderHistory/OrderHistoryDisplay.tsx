import { BoldText, TitleText } from "@/styles/Typography";
import Container from "../Template/Container";
import { OrderState } from "./OrderHistory";
import { useRouter } from "next/router";
import { format } from "date-fns";

import {
  Wrapper,
  TopSection,
  OrderIdSection,
  DetailLink,
  InfoWrapper,
  ProductSection,
  ProductItem,
  ImageSection,
  NameSection,
  QuantityPriceSection,
  ProductPrice,
  ProductItemWrapper,
  PriceWrapper,
  Divider
} from "./OrderHistoryDisplayStyles"

type OrderHistoryDisplayProps = {
  order: OrderState, 
  showOrderDetail: (id: string) => unknown,
  isLast?: boolean
}

const OrderHistoryDisplay: React.FC<OrderHistoryDisplayProps> = ({ order, showOrderDetail, isLast }) => {
  
  const router = useRouter();

  const goToInvoice = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/invoice/${order._id}`)
  }

  const showDetail = () => {
    showOrderDetail(order._id)
  }

  return (
    <Wrapper isLast={isLast ?? false}>
      <TopSection>
        <OrderIdSection><BoldText>Order Id</BoldText> {order._id} (<span className="date">{order?.createdAt && format(new Date(order?.createdAt), 'dd MMM yyyy')}</span>)</OrderIdSection>
        <DetailLink onClick={goToInvoice}>Invoice</DetailLink>
      </TopSection>
      <InfoWrapper>
        <ProductSection>
          {order?.products?.map((product) => (
            <ProductItemWrapper key={product._id}>
              <ProductItem>
                <ImageSection><img src={`http://localhost:8000/${product._product.imageUrl}`} alt="Product Image"/></ImageSection>
                <NameSection>{product._product.name}</NameSection>
                <QuantityPriceSection>{product.quantity} quantity x ${product.price.toFixed(2)}</QuantityPriceSection>
              </ProductItem>
              <ProductPrice>
              ${(product.quantity*product.price).toFixed(2)}
              </ProductPrice>
            </ProductItemWrapper>
          ))}
        </ProductSection>
        
      </InfoWrapper>

      <Divider>
        <div></div>
      </Divider>

      <PriceWrapper fontSize={"16px"} bold={false} marginTop={10}>
        <div className="title">Subtotal</div>
        <div className="price">${order.subtotal.toFixed(2)}</div>
      </PriceWrapper>
      <PriceWrapper fontSize={"13px"} bold={false} marginTop={2}>
        <div className="title">Shipping (<span onClick={showDetail}>Show details</span>)</div>
        <div className="price">${order.shipping.toFixed(2)}</div>
      </PriceWrapper>
      <PriceWrapper fontSize={"18px"} bold={true} marginTop={15}>
        <div className="title">Total</div>
        <div className="price">${order.total.toFixed(2)}</div>
      </PriceWrapper>
    </Wrapper>
  )
}

export default OrderHistoryDisplay;
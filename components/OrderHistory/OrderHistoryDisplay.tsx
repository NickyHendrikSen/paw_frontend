import { BoldText, TitleText } from "@/styles/Typography";
import Container from "../Template/Container";
import { OrderState } from "./OrderHistory";

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
import { useRouter } from "next/router";

const OrderHistoryDisplay: React.FC<OrderState> = (props) => {
  
  const router = useRouter();

  const showDetail = () => {
    router.push(`/order/${props._id}`)
  }

  return (
    <Wrapper>
      <TopSection>
        <OrderIdSection><BoldText>Order Id</BoldText> {props._id}</OrderIdSection>
        <DetailLink onClick={showDetail}>Detail</DetailLink>
      </TopSection>
      <InfoWrapper>
        <ProductSection>
          {props.products?.map((product) => (
            <ProductItemWrapper>
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
        <div className="price">${props.subtotal.toFixed(2)}</div>
      </PriceWrapper>
      <PriceWrapper fontSize={"13px"} bold={false} marginTop={2}>
        <div className="title">Shipping</div>
        <div className="price">${props.shipping.toFixed(2)}</div>
      </PriceWrapper>
      <PriceWrapper fontSize={"18px"} bold={true} marginTop={15}>
        <div className="title">Total</div>
        <div className="price">${props.total.toFixed(2)}</div>
      </PriceWrapper>
    </Wrapper>
  )
}

export default OrderHistoryDisplay;
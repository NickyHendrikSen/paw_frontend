import { useEffect, useState } from 'react';
import { useAsync } from "@/utils/useAsync";
import Container from "../Template/Container";
import { ProductAPI } from "@/api/apis/ProductAPI";
import { useRouter } from "next/router";
import Image from 'next/image';
import { ReactSVG } from 'react-svg'

import {
  Wrapper,
  ImageSection,
  InfoSection,
  PriceSection,
  NameSection,
  CategorySection,
  DescriptionSection,
  CartSection,
  CartWrapper,
  CartInner,
  AddToCartText,
  SubTotalSection,
  StockSection,
  AddToCartSection,
} from "./ProductDetailStyles"
import Button from '../Button/Button';
import { BoldText } from '@/styles/Typography';
import FormInput from '../Form/FormInput';
import { AiOutlineShareAlt } from 'react-icons/ai';
import copyToClipboard from '@/utils/copyToClipboard';
import { toast } from 'react-toastify';

type ProductsProps = {
  productId: string
}

const ProductDetail: React.FC<ProductsProps> = ({productId}) => {
  const { execute, error, status, value: response } = useAsync(ProductAPI.getProduct)
  const [ quantity, setQuantity ] = useState<number>(1);
  const router = useRouter()

  const quantityChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value.toString());

    if(typeof val !== "number") return;
    
    if(val > response?.data?.product?.stock) {
      setQuantity(response?.data?.product?.stock)
    }
    else if(val < 1){
      setQuantity(1)
    }
    else {
      setQuantity(isNaN(val) ? 0 : val);
    }
  }

  const shareClicked = () => {
    const res = copyToClipboard(window.location.href.toString());
    if(res) {
      toast.success("URL copied to clipboard");
    }
  }

  useEffect(() => {
    if(status === "success") {
    }
  }, [status])

  useEffect(() => {
      execute({productId})
  }, [productId]);

  return (
    <Container paddingTop='50px'>
      <Wrapper>
        <ImageSection><img src={`http://localhost:8000/${response?.data?.product?.imageUrl}`} alt="Product Image"/></ImageSection>
        <InfoSection>
          <NameSection>{response?.data?.product?.name}</NameSection>
          <CategorySection>{response?.data?.product?.category}</CategorySection>
          <PriceSection>${response?.data?.product?.price.toFixed(2)}</PriceSection>
          <DescriptionSection>{response?.data?.product?.description}</DescriptionSection>
        </InfoSection>
        <CartSection>
          <CartWrapper>
            <CartInner>
              <AddToCartText>Add to cart</AddToCartText>
              <StockSection>Stock : <BoldText>{response?.data?.product?.stock.toString()}</BoldText></StockSection>
              <FormInput type='number' min={1} max={response?.data?.product?.stock} isDark={true}
                value={quantity.toString()} onChange={quantityChanged}/>
              <SubTotalSection>
                <span className='text'>Subtotal</span>
                <span className='total'>${(response?.data?.product?.price * Math.max(1, quantity)).toFixed(2)}</span>
              </SubTotalSection>
            </CartInner>
            <AddToCartSection>
              <Button paddingHorizontal='10px;' paddingVertical='10px' fontSize={15} fill={false} onClick={shareClicked}>
                <AiOutlineShareAlt />Share
              </Button>
              <Button paddingHorizontal='10px;' paddingVertical='10px' fontSize={15} fill={true}>Add To Cart</Button>
            </AddToCartSection>
          </CartWrapper>
        </CartSection>
      </Wrapper>
        
    </Container>
  )
}

export default ProductDetail;
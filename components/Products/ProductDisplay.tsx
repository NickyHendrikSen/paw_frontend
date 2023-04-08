import { useEffect } from 'react';
import { useAsync } from "@/utils/useAsync";
import { ProductAPI } from "@/api/apis/ProductAPI";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

import {
  Wrapper,
  NameSection,
  PriceSection,
  ImageSection,
  InfoSection,
  DescriptionSection,
  StockSection,
  LastStock,
  SoldOut
} from "./ProductDisplayStyles"

type ProductProps = {
  name: string,
  price: Number,
  imageUrl: string,
  stock: Number,
  description: string,
  gridOption: "grid" | "list"
}

const ProductDisplay: React.FC<ProductProps> = ({name = "", price = 0, imageUrl = "", stock = 0, description = "", gridOption}) => {
  const isLastStock = stock === 1;
  const isSoldOut = stock === 0;
  return (
    <Wrapper isSoldOut={isSoldOut} gridOption={gridOption}>
      {isLastStock && <LastStock>Last Stock</LastStock>}
      {isSoldOut && <SoldOut>Sold Out</SoldOut>}
      <ImageSection><img src={`http://localhost:8000/${imageUrl}`} alt="Product Image"/></ImageSection>
      <InfoSection>
        <PriceSection>${price.toFixed(2)}</PriceSection>
        <NameSection>{name}</NameSection>
        <DescriptionSection>{description}</DescriptionSection>
        <StockSection>Stock : {stock.toString()}</StockSection>
      </InfoSection>
    </Wrapper>
  )
}

export default ProductDisplay;
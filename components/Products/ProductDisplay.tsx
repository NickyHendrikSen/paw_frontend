import { useRouter } from "next/router";

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
  id: string,
  name: string,
  price: Number,
  imageUrl: string,
  stock: Number,
  description: string,
  gridOption: "grid" | "list"
}

const ProductDisplay: React.FC<ProductProps> = ({
    id = "", name = "", price = 0, imageUrl = "", stock = 0, description = "", gridOption
  }) => {
  const router = useRouter();

  const isLastStock = stock === 1;
  const isSoldOut = stock === 0;

  const goToDetails = () => {
    router.push(`product/${id}`)
  }

  return (
    <Wrapper isSoldOut={isSoldOut} gridOption={gridOption} onClick={goToDetails}>
      {isLastStock && <LastStock>Last Stock</LastStock>}
      {isSoldOut && <SoldOut>Sold Out</SoldOut>}
      <ImageSection><img src={`${process.env.NEXT_PUBLIC_API_URL}/${imageUrl}`} alt="Product Image"/></ImageSection>
      <InfoSection>
        <PriceSection>${Number(price).toFixed(2)}</PriceSection>
        <NameSection>{name}</NameSection>
        <DescriptionSection>{description}</DescriptionSection>
        <StockSection>Stock : {stock.toString()}</StockSection>
      </InfoSection>
    </Wrapper>
  )
}

export default ProductDisplay;
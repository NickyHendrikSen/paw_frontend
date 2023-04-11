import { useEffect, useState, useContext } from 'react';
import { useAsync } from "@/utils/useAsync";
import Container from "../Template/Container";
import { ProductAPI } from "@/api/apis/ProductAPI";
import { useRouter } from "next/router";
import Button from '../Button/Button';
import { BoldText } from '@/styles/Typography';
import FormInput from '../Form/FormInput';
import { AiOutlineShareAlt } from 'react-icons/ai';
import copyToClipboard from '@/utils/copyToClipboard';
import { toast } from 'react-toastify';
import { CartAPI } from '@/api/apis/CartAPI';
import { AuthContext } from '@/store/AuthContext';

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

type ProductsProps = {
  productId: string
}

type Product = {
  _id: string,
  name: string,
  imageUrl: string,
  description: string,
  category: string,
  stock: number,
  price: number,
}

const ProductDetail: React.FC<ProductsProps> = ({productId}) => {
  const { execute: executeProduct, status, value: response } = useAsync(ProductAPI.getProduct)
  const { execute: executeCart, error: errorCart, status: statusCart, value: responseCart } = useAsync(CartAPI.addToCart)
  const [ quantity, setQuantity ] = useState<number>(1);
  const [ product, setProduct ] = useState<Product>({
    _id: productId,
    name: "",
    imageUrl: "",
    description: "",
    category: "",
    stock: 0,
    price: 0,
  })
  const router = useRouter()
  const authContext = useContext(AuthContext)

  const quantityChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!product.stock) return;
    const val = parseInt(e.target.value.toString());

    if(typeof val !== "number") return;
    
    if(val > product?.stock) {
      setQuantity(product?.stock)
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

  const handleAddToCart = () => {
    if(authContext?.isAuthenticated()) {
      executeCart({
        productId: product._id,
        quantity: quantity
      })
    }
    else {
      router.push("/login")
    }
  }

  useEffect(() => {
    if(status === "success") {
      setProduct(response?.data?.product);
    }
  }, [status])

  useEffect(() => {
    if(statusCart === "success") {
      toast.success("Product added to cart!");
      authContext?.refreshProfile();
      router.push("/products");
    }
    if(statusCart === "error") {
      console.log(errorCart);
      toast.error(errorCart?.message);
    }
  }, [statusCart])

  useEffect(() => {
      executeProduct({productId})
  }, [productId]);

  return (
    <Container paddingTop='50px'>
      <Wrapper>
        <ImageSection><img src={`http://localhost:8000/${product?.imageUrl}`} alt="Product Image"/></ImageSection>
        <InfoSection>
          <NameSection>{product?.name}</NameSection>
          <CategorySection>{product?.category}</CategorySection>
          <PriceSection>${product?.price.toFixed(2)}</PriceSection>
          <DescriptionSection>{product?.description}</DescriptionSection>
        </InfoSection>
        <CartSection>
          <CartWrapper>
            <CartInner>
              <AddToCartText>Add to cart</AddToCartText>
              <StockSection>Stock : <BoldText>{product?.stock.toString()}</BoldText></StockSection>
              <FormInput type='number' min={1} max={product?.stock} isDark={true}
                value={quantity.toString()} onChange={quantityChanged}/>
              <SubTotalSection>
                <span className='text'>Subtotal</span>
                <span className='total'>${(product?.price * Math.max(1, quantity)).toFixed(2)}</span>
              </SubTotalSection>
            </CartInner>
            <AddToCartSection>
              <Button paddingHorizontal='10px;' paddingVertical='10px' fontSize={15} fill={false} onClick={shareClicked}>
                <AiOutlineShareAlt />Share
              </Button>
              <Button paddingHorizontal='10px;' paddingVertical='10px' fontSize={15} fill={true} onClick={handleAddToCart}>Add To Cart</Button>
            </AddToCartSection>
          </CartWrapper>
        </CartSection>
      </Wrapper>
        
    </Container>
  )
}

export default ProductDetail;
import { useEffect } from 'react';
import { useAsync } from "@/utils/useAsync";
import Container from "../Template/Container";
import { ProductAPI } from "@/api/apis/ProductAPI";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

import {
  ProductList,
  TitleText,
  SearchText
} from "./Styles"
import ProductDisplay from './ProductDisplay';

type ProductsProps = {
  params: {
    categories: string,
    search: string
  }
}

const Products: React.FC<ProductsProps> = ({params}) => {
    const { execute, error, status, value: products } = useAsync(ProductAPI.getProducts)
    const router = useRouter()
  
    useEffect(() => {
      if(status === "success") {
      }
    }, [status])

    useEffect(() => {
        execute(params)
    }, [params]);
  return (
    <Container paddingTop='50px'>
      <TitleText>Products</TitleText>
      {params.search && <SearchText>Showing search result(s) for "{params.search}"</SearchText>}
      {status === "pending" ? "Loading.." : (
        <ProductList>
          {
          products?.data?.map((v: any) => 
          (
            <ProductDisplay 
              name={v.name}
              price={v.price}
              imageUrl={v.imageUrl}  
              stock={v.stock}  
            />
          ))
          }
        </ProductList>          
      )}
      
    </Container>
  )
}

export default Products;
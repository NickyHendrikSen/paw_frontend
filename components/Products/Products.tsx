import { useEffect, useState } from 'react';
import { useAsync } from "@/utils/useAsync";
import Container from "../Template/Container";
import { ProductAPI } from "@/api/apis/ProductAPI";
import { useRouter } from "next/router";
import ProductDisplay from './ProductDisplay';
import Image from 'next/image';
import { ReactSVG } from 'react-svg'

import {
  ProductList,
  TitleText,
  SearchText,
  ProductBar,
  GridOption,
  GridOptionItem
} from "./Styles"

type ProductsProps = {
  params: {
    categories: string,
    search: string
  }
}

const Products: React.FC<ProductsProps> = ({params}) => {
    const { execute, error, status, value: products } = useAsync(ProductAPI.getProducts)
    const [ gridOption, setGridOption ] = useState<"grid" | "list">("list")
    const router = useRouter()

    const handleGridChange = (grid: string) => {
      if(grid === "grid" || grid === "list"){
        setGridOption(grid);
      }
    } 

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
      <ProductBar>
        <GridOption>
          <span>View as</span>
          <GridOptionItem isChosen={gridOption === "grid"} onClick={() => handleGridChange("grid")}>
            <ReactSVG src={"/images/icons/grid.svg"} />
          </GridOptionItem>
          <GridOptionItem isChosen={gridOption === "list"} onClick={() => handleGridChange("list")}>
            <ReactSVG src={"/images/icons/list.svg"} />
          </GridOptionItem>
        </GridOption>
      </ProductBar>
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
              description={v.description}  
              gridOption={gridOption}
            />
          ))
          }
        </ProductList>          
      )}
      
    </Container>
  )
}

export default Products;
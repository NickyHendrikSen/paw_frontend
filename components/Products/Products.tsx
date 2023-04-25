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
  SearchText,
  ProductBar,
  SortOption,
  GridOption,
  GridOptionItem
} from "./Styles"
import { TitleText } from '@/styles/Typography';
import { Select } from '../Form/SelectStyles';
import Loading from '../Loading/Loading';

type ProductsProps = {
  params: {
    categories: string,
    search: string
  }
}

const Products: React.FC<ProductsProps> = ({params}) => {
    const { execute, error, status, value: products } = useAsync(ProductAPI.getProducts)
    const [ gridOption, setGridOption ] = useState<"grid" | "list">("grid")
    const [ sort, setSort ] = 
      useState<"date_desc" | "date_asc" | "name_asc" | "name_desc" | "price_asc" | "price_desc">("name_asc")
    const router = useRouter()

    const handleGridChange = (grid: string) => {
      if(grid === "grid" || grid === "list"){
        setGridOption(grid);
      }
    } 

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.target.value.toString();
      if(val == "date_desc" || val == "date_asc" || val == "name_asc" || val == "name_desc" || val == "price_asc" || val == "price_desc") {
        setSort(val); 
      }
    }

    useEffect(() => {
      if(status === "success") {
      }
    }, [status])

    useEffect(() => {
        execute({...params, sort: sort})
    }, [params, sort]);

  return (
    <Container paddingTop='50px'>
      <TitleText>Products</TitleText>
      {params.search && <SearchText>Showing search result(s) for &quot;{params.search}&quot;</SearchText>}
      <ProductBar>
        <SortOption>
          <span>Sort by</span>
          <Select onChange={handleSortChange}>
            {/* <option value="date_desc">Most Recent</option>
            <option value="date_asc">Oldest</option> */}
            <option value="name_asc">A-Z</option>
            <option value="name_desc">Z-A</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </Select>
        </SortOption>
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
      {status === "pending" ? <Loading minHeight={"200px"}/> : (
        <ProductList>
          {
          products?.data?.map((v: any) => 
          (
            <ProductDisplay 
              key={v._id}
              id={v._id}
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
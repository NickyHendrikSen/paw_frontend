import { useEffect, useState } from 'react';
import { useAsync } from "@/utils/useAsync";
import Container from "../Template/Container";
import { ProductAPI } from "@/api/apis/ProductAPI";
import { useRouter } from "next/router";
import ProductDisplay from './ProductDisplay';
import Image from 'next/image';
import { ReactSVG } from 'react-svg'
import { TitleText } from '@/styles/Typography';
import { Select } from '../Form/SelectStyles';
import Loading from '../Loading/Loading';
import { Pagination } from '@mui/material';
import usePrevious from '@/utils/usePrevious';
import urlQueryProcessor from '@/utils/urlQueryProcessor';

import {
  ProductListWrapper,
  ProductList,
  SearchText,
  ProductBar,
  SortOption,
  GridOption,
  GridOptionItem,
  ProductContentWrapper,
  FilterChoiceWrapper,
  CategoryFilter,
  CategoryWrapper,
  CategoryItem
} from "./Styles"

type ProductsProps = {
  params: {
    categories: string,
    search: string,
    page: number,
    sort: string
  }
}

type PaginationState = {
  pageCount: number,
  count: number,
  skip: number
}

const Products: React.FC<ProductsProps> = ({params}) => {
  const { execute, error, status, value } = useAsync(ProductAPI.getProducts)
  const [ products, setProducts ] = useState<Array<any>>();
  const [ gridOption, setGridOption ] = useState<"grid" | "list">("grid")
  const [ pagination, setPagination ] = useState<PaginationState>();

  const router = useRouter();

  // const prevAmount = usePrevious({...params});

  const handleGridChange = (grid: string) => {
    if(grid === "grid" || grid === "list"){
      setGridOption(grid);
    }
  } 

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value.toString();
    if(val == "date_desc" || val == "date_asc" || val == "name_asc" || 
      val == "name_desc" || val == "price_asc" || val == "price_desc") {
      router.query = urlQueryProcessor("change", "sort", val.toString(), router.query);
      router.push(router);
    }
  }

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    if(value) {
      router.query = urlQueryProcessor("change", "page", value.toString(), router.query);
      router.push(router);
    }
  }

  const removeCategory = (value: string) => {
    if(value) {
      router.query = urlQueryProcessor("remove", "categories", value.toString(), router.query);
      router.push(router);
    }
  }

  useEffect(() => {
    if(status === "success") {
      setProducts(value?.data?.products);
      setPagination(value?.data?.pagination);
    }
  }, [status])

  useEffect(() => {
    execute({...params})
  }, [params]);

  return (
    <Container paddingTop='50px'>
      <TitleText>Products</TitleText>
      {
        params.categories &&
        <CategoryWrapper>
          {
            params.categories.split(',').map((category) => (
              <CategoryItem>
                <span>{category}</span>
                <button onClick={() => removeCategory(category)}>X</button>
              </CategoryItem>
            ))
          }
        </CategoryWrapper>
      }
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
      <ProductContentWrapper>
        <FilterChoiceWrapper>
          <CategoryFilter>
            <div className='text'>Category</div>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
              <li>d</li>
            </ul>
          </CategoryFilter>
        </FilterChoiceWrapper>
        {status === "pending" ? <Loading minHeight={"200px"}/> : (
          <ProductListWrapper>
            <ProductList>
              {
              products?.map((v: any) => 
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
            <Pagination 
              count={pagination?.pageCount ?? 0} 
              onChange={handlePageChange} 
              page={params.page ?? 1} 
              className='pagination'/>      
          </ProductListWrapper>    
        )}
      </ProductContentWrapper>
      
    </Container>
  )
}

export default Products;
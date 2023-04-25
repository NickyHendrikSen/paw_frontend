import Head from 'next/head'
import Login from "../components/Auth/Login"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Header from '@/components/Template/Header';
import Products from '@/components/Products/Products';
import SEO from '@/components/SEO/SEO';

type ParamsStateType = {
  categories: string,
  search: string
}

export default function ProductsPage() {

  const router = useRouter();
  const { query, isReady } = router;
  const { categories: paramCategories, search: paramSearch } = query;
  const [params, setParams] = useState<ParamsStateType | undefined>()

  useEffect(() => {
    if(!isReady) return;

    const categories = paramCategories ? paramCategories.toString() : ""
    const search = paramSearch ? paramSearch.toString() : "";
    
    setParams({categories: categories, search: search})
  }, [query, isReady, paramCategories, paramSearch])
  
  if(!params) return null;
  
  return (
    <>
      <SEO siteTitle="Products" description="Paw products page"/>
      <Header />
      <Products params={params}/>
    </>
  )
}

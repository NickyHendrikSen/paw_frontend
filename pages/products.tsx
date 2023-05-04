import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Header from '@/components/Template/Header';
import Products from '@/components/Products/Products';
import SEO from '@/components/SEO/SEO';
import Footer from '@/components/Template/Footer';
import Layout from '@/components/Template/Layout';

type ParamsStateType = {
  categories: string,
  search: string,
  page: number,
  sort: string
}

export default function ProductsPage() {

  const router = useRouter();
  const { query, isReady } = router;
  const { categories: paramCategories, search: paramSearch, 
          page: paramPage, sort: paramSort } = query;
  const [params, setParams] = useState<ParamsStateType | undefined>()

  useEffect(() => {
    if(!isReady) return;

    const categories = paramCategories ? paramCategories.toString() : ""
    const search = paramSearch ? paramSearch.toString() : "";
    const sort = paramSort ? paramSort.toString() : "";
    let page = 1;
    
    try { 
      page = parseInt(paramPage?.toString() ?? "")
    }
    catch {}
    
    setParams({categories: categories, search: search, page: isNaN(page) ? 1 : page, sort: sort})
  }, [query, isReady, paramCategories, paramSearch])
  
  if(!params) return null;
  
  return (
    <Layout SEO = {{siteTitle: "Products", description: "Paw products page"}}>
      <Products params={params}/>
    </Layout>
  )
}

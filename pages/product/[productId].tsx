import Home from "@/components/Home/Home";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import SEO from "@/components/SEO/SEO";
import Header from "@/components/Template/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProductDetailPage() {
  const router = useRouter();
  const { query, isReady } = router;
  const { productId } = query;
  
  if(!isReady) return null;

  return (
    <>
      <SEO siteTitle="Product Detail" description="Paw product detail page"/>
      <Header />
      <ProductDetail productId={productId?.toString() ?? ""}/>
    </>
  )
}

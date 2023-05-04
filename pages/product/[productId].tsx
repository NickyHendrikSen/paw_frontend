import ProductDetail from "@/components/ProductDetail/ProductDetail";
import Layout from "@/components/Template/Layout";
import { useRouter } from "next/router";

export default function ProductDetailPage() {
  const router = useRouter();
  const { query, isReady } = router;
  const { productId } = query;
  
  if(!isReady) return null;

  return (
    <Layout SEO = {{siteTitle: "Product Detail", description: "Paw product detail page"}}>
      <ProductDetail productId={productId?.toString() ?? ""}/>
    </Layout>
  )
}

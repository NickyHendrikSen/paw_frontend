import Header from '@/components/Template/Header';
import AdminRouteGuard from '@/components/Guards/AdminRouteGuard';
import SEO from '@/components/SEO/SEO';

export default function AddProductPage()  {
  return (
    <AdminRouteGuard>
      <SEO siteTitle="Add Product" description="Add Product page"/>
      <Header />
      asd
      {/* <Cart />  */}
    </AdminRouteGuard>
  )
}

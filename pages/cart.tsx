import RouteGuard from '@/components/Guards/RouteGuard';
import Cart from '@/components/Cart/Cart';
import Layout from '@/components/Template/Layout';

export default function CartPage()  {
  return (
    <RouteGuard>
      <Layout SEO = {{siteTitle: "Cart", description: "Paw cart page"}}>
        <Cart />
      </Layout> 
    </RouteGuard>
  )
}

import Header from '@/components/Template/Header';
import RouteGuard from '@/components/Guards/RouteGuard';
import Cart from '@/components/Cart/Cart';
import SEO from '@/components/SEO/SEO';
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

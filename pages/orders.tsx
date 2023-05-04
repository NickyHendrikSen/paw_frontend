import RouteGuard from '@/components/Guards/RouteGuard';
import OrderHistory from '@/components/OrderHistory/OrderHistory';
import Layout from '@/components/Template/Layout';

export default function OrderHistoryPage()  {
  return (
    <RouteGuard>
      <Layout SEO = {{siteTitle: "Order History", description: "Order history page"}}>
        <OrderHistory />
      </Layout>
    </RouteGuard>
  )
}

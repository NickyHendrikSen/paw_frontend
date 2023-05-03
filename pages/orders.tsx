import Header from '@/components/Template/Header';
import RouteGuard from '@/components/Guards/RouteGuard';
import SEO from '@/components/SEO/SEO';
import OrderHistory from '@/components/OrderHistory/OrderHistory';

export default function OrderHistoryPage()  {
  return (
    <RouteGuard>
      <SEO siteTitle="Order History" description="Order history page"/>
      <Header />
      <OrderHistory />
    </RouteGuard>
  )
}

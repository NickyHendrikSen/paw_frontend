import Head from 'next/head'
import Header from '@/components/Template/Header';
import RouteGuard from '@/components/Guards/RouteGuard';
import SEO from '@/components/SEO/SEO';
import OrderDetail from '@/components/OrderDetail/OrderDetail';

export default function OrderDetailPage()  {
  return (
    <RouteGuard>
      <SEO siteTitle="Invoice" description="Invoice page"/>
      {/* <Header /> */}
      <OrderDetail />
    </RouteGuard>
  )
}

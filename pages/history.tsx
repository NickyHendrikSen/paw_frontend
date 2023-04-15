import Head from 'next/head'
import Header from '@/components/Template/Header';
import RouteGuard from '@/components/Guards/RouteGuard';
import Cart from '@/components/Cart/Cart';
import SEO from '@/components/SEO/SEO';

export default function HistoryPage()  {
  return (
    <RouteGuard>
      <SEO siteTitle="Order History" description="Order history page"/>
      <Header />
    </RouteGuard>
  )
}

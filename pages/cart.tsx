import Head from 'next/head'
import Header from '@/components/Template/Header';
import RouteGuard from '@/components/Guards/RouteGuard';
import Cart from '@/components/Cart/Cart';
import SEO from '@/components/SEO/SEO';

export default function CartPage()  {
  return (
    <RouteGuard>
      <SEO siteTitle="Cart" description="Paw cart page"/>
      <Header />
      <Cart /> 
    </RouteGuard>
  )
}

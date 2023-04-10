import Head from 'next/head'
import Header from '@/components/Template/Header';
import RouteGuard from '@/components/Guards/RouteGuard';
import Cart from '@/components/Cart/Cart';

export default function CartPage()  {
  return (
    <RouteGuard>
      <Head>
      <title>Login</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Cart /> 
    </RouteGuard>
  )
}
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NotFound from '@/components/404/NotFound'
import Header from '@/components/Template/Header'
import SEO from '@/components/SEO/SEO'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import CheckoutCancel from '@/components/Checkout/CheckoutCancel'

export default function RegisterPage() {

  const router = useRouter();
  const { query, isReady } = router;
  const { session_id: paramSessionId} = query;

  useEffect(() => {
    if(!isReady) return;

    const sessionId = paramSessionId ? paramSessionId.toString() : ""
    console.log(sessionId);
    
  }, [query])
  
  if(!isReady) return null;

  return (
    <>
      <SEO siteTitle="404 Not Found" description="Paw 404 Not Found page"/>
      <Header />
      <CheckoutCancel />
    </>
  )
}

import Header from '@/components/Template/Header'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import CheckoutCancel from '@/components/Checkout/CheckoutCancel'
import Layout from '@/components/Template/Layout'

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
    <Layout SEO = {{siteTitle: "Checkout Canceled", description: "Checkout Canceled page"}}>
      <Header />
      <CheckoutCancel />
    </Layout>
  )
}

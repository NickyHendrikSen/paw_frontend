import { useRouter } from 'next/router'
import { useEffect } from 'react'
import CheckoutSuccess from '@/components/Checkout/CheckoutSuccess'
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
    <Layout SEO = {{siteTitle: "Checkout Success", description: "Checkout Success page"}}>
      <CheckoutSuccess />
    </Layout>
  )
}

import { Inter } from 'next/font/google'
import NotFound from '@/components/404/NotFound'
import Header from '@/components/Template/Header'
import SEO from '@/components/SEO/SEO'

const inter = Inter({ subsets: ['latin'] })

export default function RegisterPage() {
  return (
    <>
      <SEO siteTitle="404 Not Found" description="Paw 404 Not Found page"/>
      <Header />
      <NotFound />
    </>
  )
}

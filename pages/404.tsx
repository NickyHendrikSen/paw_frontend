import { Inter } from 'next/font/google'
import NotFound from '@/components/404/NotFound'
import Layout from '@/components/Template/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function RegisterPage() {
  return (
    <Layout SEO = {{siteTitle: "404 Not Found", description: "Paw 404 Not Found page"}}>
      <NotFound />
    </Layout>
  )
}

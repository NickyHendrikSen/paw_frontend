import About from '@/components/About/About'
import Layout from '@/components/Template/Layout';

export default function AboutPage() {
  
  return (
    <Layout SEO = {{siteTitle: "About us", description: "About us page"}}>
      <About />
    </Layout>
  )
}

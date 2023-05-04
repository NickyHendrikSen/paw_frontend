import About from '@/components/About/About'
import SEO from '@/components/SEO/SEO';
import Header from '@/components/Template/Header';
import Layout from '@/components/Template/Layout';

export default function AboutPage() {
  
  return (
    <Layout SEO = {{siteTitle: "About us", description: "About us page"}}>
      <About />
    </Layout>
  )
}

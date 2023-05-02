import About from '@/components/About/About'
import SEO from '@/components/SEO/SEO';
import Header from '@/components/Template/Header';

export default function AboutPage() {
  
  return (
    <>
      <SEO siteTitle="About us" description="About us page"/>
      <Header />
      <About />
    </>
  )
}

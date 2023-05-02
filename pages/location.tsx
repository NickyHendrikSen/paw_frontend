import Location from '@/components/Location/Location'
import SEO from '@/components/SEO/SEO';
import Header from '@/components/Template/Header';

export default function AboutPage() {
  
  return (
    <>
      <SEO siteTitle="Our location" description="Our location page"/>
      <Header />
      <Location />
    </>
  )
}

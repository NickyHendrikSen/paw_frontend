import Location from '@/components/Location/Location'
import SEO from '@/components/SEO/SEO';
import Header from '@/components/Template/Header';
import Layout from '@/components/Template/Layout';

export default function LocationPage() {
  
  return (
    <Layout SEO = {{siteTitle: "Our location", description: "Our location page"}}>
      <Location />
    </Layout>
  )
}

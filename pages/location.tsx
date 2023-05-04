import Location from '@/components/Location/Location'
import Layout from '@/components/Template/Layout';

export default function LocationPage() {
  
  return (
    <Layout SEO = {{siteTitle: "Our location", description: "Our location page"}}>
      <Location />
    </Layout>
  )
}

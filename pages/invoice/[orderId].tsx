import RouteGuard from '@/components/Guards/RouteGuard';
import SEO from '@/components/SEO/SEO';
import Invoice from '@/components/Invoice/Invoice';

export default function InvoicePage()  {
  return (
    <RouteGuard>
      <SEO siteTitle="Invoice" description="Invoice page"/>
      {/* <Header /> */}
      <Invoice />
    </RouteGuard>
  )
}

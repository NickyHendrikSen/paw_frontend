import Layout from "@/components/Template/Layout";
import Home from "../components/Home/Home";

export default function HomePage() {
  return (
    <Layout SEO = {{siteTitle: "Home", description: "Paw home page"}}>
      <Home />
    </Layout>
  )
}

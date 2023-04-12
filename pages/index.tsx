import Home from "../components/Home/Home";
import SEO from "../components/SEO/SEO";
import Header from "../components/Template/Header";

export default function HomePage() {
  return (
    <>
      <SEO siteTitle="Home" description="Paw home page"/>
      <Header />
      <Home />
    </>
  )
}

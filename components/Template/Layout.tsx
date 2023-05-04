
import * as SEOComponent from "../SEO/SEO";
import Footer from "./Footer";
import Header from "./Header";
import {
  LayoutWrapper,
  ContentWrapper
} from "./LayoutStyles"

interface ContainerProps {
  children?: any,
  SEO: {
    siteTitle: string,
    description: string,
  }
}

const Layout: React.FC<ContainerProps> = ({children, SEO}) => {
    
  return (
    <LayoutWrapper>
      <SEOComponent.default {...SEO}/>
      <Header />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer />
    </LayoutWrapper>
  )
}
  
export default Layout;
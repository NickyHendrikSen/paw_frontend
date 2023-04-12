import Helmet from "react-helmet";

type SEOProps = {
  description?: string,
  siteTitle?: string,
  keywords?: [],
}

const SEO: React.FC<SEOProps> = ({ description = "", siteTitle = "", keywords = [] }) => {
  
  const mainTitle = "Paw: All your dog needs"
  const title = siteTitle == "" ? mainTitle : `Paw | ${siteTitle}`;
  const meta = [
    {
      name: "description",
      content: description.toString(),
    },
    {
      property: "og:title",
      content: title.toString(),
    },
    {
      property: "og:description",
      content: description.toString(),
    },
    {
      property: "og:type",
      content: "website.toString()",
    },
    {
      property: "og:image",
      content: "/images/paw-logo-blue.ico",
    },
    {
      name: "twitter:title",
      content: title.toString(),
    },
    {
      name: "twitter:description",
      content: description.toString(),
    },
  ]
    .concat(
      keywords && keywords.length > 0
        ? {
            name: "keywords",
            content: keywords.join(", ").toString(),
          }
        : []
    );
  
  return (
    <>
      <Helmet 
        title={title}
        // titleTemplate={siteTitle == "" ? "%s" : `%s | ${siteTitle}`}
        link={[{ rel: "shortcut icon", type: "image/x-icon", href: `/images/paw-logo-blue.ico` }]}
        meta={meta}
      />
    </>
  );
}

export default SEO;
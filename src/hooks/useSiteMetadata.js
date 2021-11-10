import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteURL
          siteOwner
          mainAddress {
            street
            city
            state
            ZIP
            tel
          }
          social {
            facebook
            twitter
            linkedIn
            github
          }
          imagePrefix
          imageDefault
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;

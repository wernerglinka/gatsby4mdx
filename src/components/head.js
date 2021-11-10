import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import useSiteMetadata from "../hooks/useSiteMetadata";

// /////////////////////////////////////////////////////
//
// TODO: fix canonical url
//
// /////////////////////////////////////////////////////

/** ***************************************************************************
 * Head
 * Builds the page head section using default values from  sitemetadata
 *
 * Any page may change the default meta data by passing in their own page metadata
 * A form attribute may be used to load a form
 * A page may add specific body classes
 *************************************************************************** */

const Head = ({ location, metaData, form, bodyClasses, schemaMarkup }) => {
  const siteMetaData = useSiteMetadata();
  const pageURL = `${siteMetaData.siteURL}${location.pathname}`;

  let socialImage = `${siteMetaData.imagePrefix}${siteMetaData.imageDefault}`;

  if (metaData.socialImage) {
    socialImage = `${siteMetaData.imagePrefix}${metaData.socialImage}`;
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      {form && (
        <>
          <link rel="preload" as="script" href={form} />
          <script src={form} />
        </>
      )}
      <link rel="icon" href="/site-images/favicon.png" />
      <meta charset="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      {/* needed for browser hints to work for cloudinary images */}
      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />

      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="cleartype" content="on" />
      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />

      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="author" content="" />
      <meta name="date" content={metaData.date || ""} />

      <link rel="canonical" href={metaData.canonicalURL ? metaData.canonicalURL : pageURL} />

      {/* social tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="safebreach" />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:creator" content="safebreach" />
      <meta name="twitter:image" content={socialImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:url" content={metaData.canonicalURL} />
      <meta property="og:site_name" content="safebreach" />
      <meta property="og:image" content={socialImage} />
      <meta property="og:updated_time" content={metaData.date || ""} />
      <meta itemProp="name" content={metaData.title} />
      <meta itemProp="”description”" content={metaData.description} />

      <body className={bodyClasses} />
    </Helmet>
  );
};

Head.defaultProps = {
  location: {
    href: null,
  },
  form: null,
  bodyClasses: "",
  schemaMarkup: null,
};

Head.propTypes = {
  metaData: PropTypes.shape().isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  form: PropTypes.string,
  bodyClasses: PropTypes.string,
  schemaMarkup: PropTypes.shape(),
};

export default Head;

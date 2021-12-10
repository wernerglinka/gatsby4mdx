module.exports = {
  siteMetadata: {
    title: "Gatsby4-MDX-Starter",
    description: "Gatsby4MDX Starter Website",
    author: "werner@glinka.co",
    siteURL: "https://gatsby4mdx.netlify.app",
    siteOwner: "Werner Glinka",
    mainAddress: {
      street: "",
      misc: "",
      city: "",
      state: "",
      ZIP: "",
      tel: "",
    },
    social: {
      twitter: "",
      facebook: "",
      linkedIn: "",
      github: "",
    },
    imagePrefix: "https://res.cloudinary.com/glinkaco/image/upload/",
    imageDefault: "",
    audioPrefix: "https://res.cloudinary.com/glinkaco/video/upload/",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Enables adding components which live above the page components and persist across page changes.
    `gatsby-plugin-layout`,
    // React Helmet is a component which lets you control your document head.
    `gatsby-plugin-react-helmet`,
    // Provide support for using the css-in-js library Emotion including server side rendering.
    `gatsby-plugin-emotion`,
    // Parses raw JSON strings into JavaScript objects e.g. from JSON files.
    `gatsby-transformer-json`,
    // MDX is markdown for the component era. It lets you write JSX embedded inside markdown.
    `gatsby-plugin-mdx`,
    // Intercepts all local links that have not been created in React using gatsby-link,
    // and replaces their behavior with that of the gatsby-link navigate.
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/media`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Website`,
        short_name: `Website`,
        start_url: `/`,
        icon: `static/favicon.png`,
      },
    },
  ],
};

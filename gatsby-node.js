const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// Create all Mdx nodes
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value: `${value}`,
    });
  }
};

/** ***************************************************************************
 *  Create all pages
 **************************************************************************** */
exports.createPages = async ({ graphql, actions, reporter, getNode }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allPages: allMdx {
        edges {
          node {
            id
            body
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query');
  }

  /** ***************************************************************************
   *  Loop through all pages, apply template and frontmatter
   *************************************************************************** */
  const pages = result.data.allPages.edges;

  pages.forEach(({ node }, index) => {
    // deliver frontmatter fields via the page context
    // will save long repetitive graphql queries in page templates
    const nodeContent = getNode(node.id);

    // filter out drafts
    if (!nodeContent.frontmatter.draft) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/${String(nodeContent.frontmatter.template)}.js`),
        context: {
          id: node.id,
          fields: nodeContent.frontmatter,
          body: node.body,
        },
      });
    }
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  createTypes(`
    type SiteSiteMetadata {
      title: String
      description: String
      author: String
      siteURL: String
      siteOwner: String
      mainAddress: MainAddress
      social: Social
      imagePrefix: String
      imageDefault: String
    }

    type MainAddress {
      street: String
      misc: String
      city: String
      state: String
      ZIP: String
      tel: String
    }

    type Social {
      twitter: String
      facebook: String
      linkedIn: String
      github: String
    }
  `);
};

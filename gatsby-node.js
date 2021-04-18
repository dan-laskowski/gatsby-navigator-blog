const path = require(`path`);
const { paginate } = require(`gatsby-awesome-pagination`);

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allWpUser {
        edges {
          node {
            id
            slug
            uri
            posts {
              nodes {
                title
              }
            }
          }
        }
      }
      allWpCategory {
        edges {
          node {
            id
            slug
            posts {
              nodes {
                title
              }
            }
          }
        }
      }
      allWpTag {
        edges {
          node {
            id
            uri
            slug
            posts {
              nodes {
                title
              }
            }
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }
  // Extract query results
  const authors = result.data.allWpUser.edges;
  const categories = result.data.allWpCategory.edges;
  const tags = result.data.allWpTag.edges;

  // Load templates
  const authorTemplate = path.resolve(`./src/templates/author.js`);
  const categoryTemplate = path.resolve(`./src/templates/category.js`);
  const tagTemplate = path.resolve(`./src/templates/tag.js`);

  // Create author pages

  authors.forEach(({ node }) => {
    const totalPosts =
      node.posts.nodes.length !== null ? node.posts.nodes.length : 0;

    const items = Array.from({ length: totalPosts });

    paginate({
      createPage,
      items: items,
      itemsPerPage: 3,
      component: authorTemplate,
      pathPrefix: node.uri,
      context: {
        id: node.id,
      },
    });
  });

  // Create category pages
  categories.forEach(({ node }) => {
    const totalPosts =
      node.posts.nodes.length !== null ? node.posts.nodes.length : 0;

    const url = `/${node.slug}`;

    const items = Array.from({ length: totalPosts });

    paginate({
      createPage,
      items: items,
      itemsPerPage: 2,
      component: categoryTemplate,
      pathPrefix: url,
      context: {
        id: node.id,
      },
    });
  });

  // Create tag pages
  tags.forEach(({ node }) => {
    const totalPosts =
      node.posts.nodes.length !== null ? node.posts.nodes.length : 0;

    const url = `/${node.slug}`;

    const items = Array.from({ length: totalPosts });

    paginate({
      createPage,
      items: items,
      itemsPerPage: 2,
      component: tagTemplate,
      pathPrefix: url,
      context: {
        id: node.id,
        slug: node.slug,
      },
    });
  });
};

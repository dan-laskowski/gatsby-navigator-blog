const postQuery = `
{
    posts: allWpPost {
      nodes {
        objectID:id
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
            slug
            wpChildren {
              nodes {
                name
                slug
              }
            }
          }
        }
        title
        excerpt
        slug
        dateGmt
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.nodes,
    // settings: {
    //   attributesToSnippet: [`excerpt:20`],
    // },
    matchFields: ["dateGmt"],
  },
];

module.exports = queries;

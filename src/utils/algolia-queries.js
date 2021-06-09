const postQuery = `
{
    posts: allWpPost {
      nodes {
        objectID:id
        categories {
          nodes {
            name
            slug
            author {
              node {
                name
              }
            }
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

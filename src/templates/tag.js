import React from "react";
import { Helmet } from "react-helmet";
import ReactHtmlParser from "react-html-parser";
import { graphql, Link } from "gatsby";

const Tag = ({ data, pageContext }) => {
  console.log(data);
  const { wpTag, allWpPost } = data;
  return (
    <>
      <Helmet>
        <title>{wpTag.name} | Navigator</title>
      </Helmet>
      <div>
        {allWpPost.edges.map(({ node }) => (
          <Link to={node.uri}>
            <div key={node.id}>
              <img
                srcSet={node.featuredImage.node.srcSet}
                alt={node.featuredImage.node.altText}
              />
              <h2>{node.title}</h2>
              <div>{ReactHtmlParser(node.excerpt)}</div>
              <div>
                {node.tags.nodes.map(node => (
                  <Link to={node.slug}>
                    <span>{node.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export const query = graphql`
  query TagQuery($id: String!, $limit: Int!, $skip: Int!) {
    wpTag(id: { eq: $id }) {
      name
      slug
    }
    allWpPost(
      limit: $limit
      skip: $skip
      filter: { tags: { nodes: { elemMatch: { id: { eq: $id } } } } }
    ) {
      edges {
        node {
          id
          featuredImage {
            node {
              altText
              srcSet
            }
          }
          date(locale: "pl")
          title
          subtitle {
            podtytul
          }
          excerpt
          uri
          tags {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export default Tag;

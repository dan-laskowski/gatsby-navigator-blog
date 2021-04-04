import React from "react";
import { Helmet } from "react-helmet";
import ReactHtmlParser from "react-html-parser";
import { graphql, Link } from "gatsby";
import Pagination from "components/Pagination";

const Category = ({ data, pageContext }) => {
  console.log(data);
  const { wpCategory, allWpPost } = data;
  return (
    <>
      <Helmet>
        <title>{wpCategory.name} | Navigator</title>
      </Helmet>
      {wpCategory.wpChildren.nodes.length ? (
        <>
          <Link style={{ color: "red" }} to={`/${wpCategory.slug}`}>
            rodzic {wpCategory.name}
          </Link>
          {wpCategory.wpChildren.nodes.map(node => (
            <Link key={node.uri} to={`/${node.slug}`}>
              {node.name}
            </Link>
          ))}
        </>
      ) : (
        <>
          <Link to={`/${wpCategory.wpParent.node.slug}`}>
            rodzic {wpCategory.wpParent.node.name}
          </Link>
          {wpCategory.wpParent.node.wpChildren.nodes.map(node => (
            <Link
              style={{ color: wpCategory.name === node.name ? `red` : `` }}
              key={node.slug}
              to={`/${node.slug}`}
            >
              {node.name}
            </Link>
          ))}
        </>
      )}
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
  query CategoryQuery($id: String!, $limit: Int!, $skip: Int!) {
    wpCategory(id: { eq: $id }) {
      name
      slug
      wpChildren {
        nodes {
          name
          slug
        }
      }
      wpParent {
        node {
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
    }
    allWpPost(
      limit: $limit
      skip: $skip
      filter: { categories: { nodes: { elemMatch: { id: { eq: $id } } } } }
    ) {
      edges {
        node {
          id
          categories {
            nodes {
              name
              slug
            }
          }
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

export default Category;

import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Pagination from "components/Pagination";
import ReactHtmlParser from "react-html-parser";

const Author = ({ data, pageContext }) => {
  const { wpUser, allWpPost } = data;
  console.log(wpUser.avatar.url);

  return (
    <>
      <Helmet>
        <title>
          {wpUser.firstName} {wpUser.lastName}
        </title>
        <meta name="description" content={wpUser.description} />
      </Helmet>
      <div>
        {/* <Pagination pageContext={pageContext} /> */}
        <h1>
          {wpUser.firstName} {wpUser.lastName}
        </h1>
        <img src={wpUser.avatar.url} alt={wpUser.lastName} />
        <p>{wpUser.description}</p>
        {allWpPost.edges.map(({ node }) => (
          <div key={node.id}>
            <h2>{node.title}</h2>
            <div>{ReactHtmlParser(node.excerpt)}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export const query = graphql`
  query AuthorQuery($id: String!, $limit: Int!, $skip: Int!) {
    wpUser(id: { eq: $id }) {
      avatar {
        url
      }
      firstName
      lastName
      uri
      description
    }
    allWpPost(
      limit: $limit
      skip: $skip
      filter: { author: { node: { id: { eq: $id } } } }
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
          date(locale: "pl", fromNow: true)
          title
          excerpt
          uri
        }
      }
    }
  }
`;

export default Author;

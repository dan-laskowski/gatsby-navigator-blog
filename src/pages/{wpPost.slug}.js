import React from "react";
import { graphql, Link, navigate } from "gatsby";
import { Helmet } from "react-helmet";
import ReactHtmlParser from "react-html-parser";

const WpPostTemplate = ({ data: { wpPost } }) => {
  return (
    <>
      <Helmet>
        <title>{wpPost.title}</title>
        <meta name="description" content={wpPost.excerpt} />
      </Helmet>
    </>
  );
};

export const query = graphql`
  query PostQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      featuredImage {
        node {
          srcSet
          altText
        }
      }
      slug
      author {
        node {
          name
          uri
        }
      }
      tags {
        nodes {
          name
          uri
        }
      }
      excerpt
      content
      date(fromNow: true, locale: "pl")
    }
  }
`;

export default WpPostTemplate;

import React from "react";
import styled from "styled-components";
import Layout from "organisms/layout";
import Post from "molecules/post";
import { graphql } from "gatsby";

const PostSection = styled.main`
  max-width: 1645px;
  margin: 0 auto;
`;

const Temp = ({ data: { testPosts } }) => {
  return (
    <Layout>
      <PostSection>
        {testPosts.nodes.map(post => (
          <Post horizontal post={post} />
        ))}
      </PostSection>
    </Layout>
  );
};

export const query = graphql`
  query TestPosts {
    testPosts: allWpPost(limit: 4) {
      nodes {
        title
        tags {
          nodes {
            name
            slug
          }
        }
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.777)
              }
            }
          }
        }
        excerpt
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
      }
    }
  }
`;

export default Temp;

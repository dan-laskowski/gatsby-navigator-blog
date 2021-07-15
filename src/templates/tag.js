import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Heading } from "atoms/heading";
import Seo from "molecules/seo";
import Pagination from "molecules/Pagination";
import Aside from "organisms/aside";
import AsideSection from "molecules/asideSection";
import Layout from "organisms/layout";
import Post from "molecules/post";
import NewsletterSmall from "molecules/newsletterSmall";

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 152px;
  @media only screen and (max-width: 850px) {
    padding-top: 136px;
  }
  @media only screen and (max-width: 616px) {
    padding-top: 94px;
  }
`;
const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 40px;
  max-width: 1645px;
  grid-template-rows: auto;
  margin: 0 auto;
  @media only screen and (max-width: 1745px) {
    margin-left: 30px;
    margin-right: 30px;
    column-gap: 30px;
  }
  @media only screen and (max-width: 574px) {
    display: block;
    margin: 0 24px;
  }
`;
const CategoryName = styled.div`
  background: #f6f6f6;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 41px;
  @media only screen and (max-width: 1180px) {
    height: 100px;
  }
  @media only screen and (max-width: 600px) {
    min-height: 180px;
    height: auto;
    margin-bottom: 20px;
  }
`;
const StyledHeading = styled(Heading)`
  font-size: 60px;
  line-height: 71px;
  margin-top: 0;
  margin-bottom: 24px;
  text-transform: uppercase;
  @media only screen and (max-width: 1180px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 8px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 26px;
    line-height: 31px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const PostsWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 10;
  padding-bottom: 52px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  a:first-child article {
    margin-top: 0;
    padding-top: 0;
  }
  a:last-child article {
    border-bottom: none;
  }
  @media only screen and (max-width: 720px) {
    grid-column-start: 1;
    grid-column-end: 13;
    border-bottom: none;
    padding-bottom: 40px;
  }
`;
const PostTag = styled(Post)`
  .article {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .category {
    margin-top: 6px;
    margin-bottom: 6px;
  }
  .title {
    margin-bottom: 32px;
  }
  .subtitle {
    margin-bottom: 12px;
  }

  @media only screen and (max-width: 1100px) {
    .title {
      margin-bottom: 22px;
      -webkit-line-clamp: 2;
    }
    .subtitle {
      font-size: 16px;
      line-height: 18px;
      -webkit-line-clamp: 4;
    }
  }
  @media only screen and (max-width: 900px) {
    .article {
      padding-top: 14px;
      padding-bottom: 14px;
      border-bottom: none;
    }
    .category {
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 0;
    }
    .title {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 6px;
    }
    .subtitle {
      font-size: 12px;
      line-height: 15px;
      -webkit-line-clamp: 5;
    }
  }
  @media only screen and (max-width: 600px) {
    .article {
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .category {
      margin-top: 10px;
      margin-bottom: 6px;
    }
    .title {
      font-size: 20px;
      line-height: 24px;
      -webkit-line-clamp: 3;
      margin-bottom: 10px;
    }
    .subtitle {
      display: -webkit-box;
      font-size: 14px;
      line-height: 18px;
      -webkit-line-clamp: 3;
      margin-bottom: 10px;
    }
  }
`;
const StyledAside = styled(Aside)`
  grid-column-start: 10;
  grid-column-end: 13;
  margin-top: -19px;
  section {
    margin-bottom: 20px;
  }
  .tags {
    margin-bottom: 14px;
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;
const AsidePost = styled(Post)`
  .article {
    grid-template-columns: 1fr 110px;
    column-gap: 26px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
    border: none;
  }
  .category {
    margin-top: 0;
    margin-bottom: 8px;
  }
  .title {
    font-size: 20px;
    line-height: 24px;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .image-wrapper {
    /* aspect-ratio: 1/1; */
    padding-top: 0;
    height: 110px;
  }
  .date {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 1380px) {
    .article {
      grid-template-columns: 1fr;
    }
    .image-wrapper {
      display: none;
    }
  }

  @media only screen and (max-width: 1248px) {
    .title {
      font-size: 18px;
      line-height: 20px;
    }
  }

  @media only screen and (max-width: 900px) {
    .article {
      margin-bottom: 0;
    }
    .category {
      font-size: 10px;
      line-height: 12px;
      margin-bottom: 4px;
    }
    .title {
      font-size: 11px;
      line-height: 13px;
      margin-bottom: 4px;
    }
    .date {
      font-size: 10px;
      line-height: 12px;
    }
  }
`;

const Tag = ({ data: { wpTag, allWpPost, asideQuery }, pageContext }) => {
  return (
    <Layout>
      <Seo
        title={`${wpTag.name} | Navigator`}
        description={`Wszystkie posty z tagiem ${wpTag.name}`}
      />
      <Wrapper>
        <CategoryName>
          <StyledHeading text={wpTag.name} />
        </CategoryName>
        <ContentWrapper>
          <PostsWrapper>
            {allWpPost.edges.map(({ node }) => (
              <PostTag horizontal post={node} />
            ))}
          </PostsWrapper>
          <StyledAside>
            <AsideSection title="ostatnie" to={`/`}>
              {asideQuery.nodes.map(node => (
                <AsidePost horizontal post={node} />
              ))}
            </AsideSection>
          </StyledAside>
        </ContentWrapper>
        <Pagination pageContext={pageContext} />
        <NewsletterSmall />
      </Wrapper>
    </Layout>
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
      filter: {
        tags: { nodes: { elemMatch: { id: { eq: $id } } } }
        status: { eq: "publish" }
      }
      sort: { order: DESC, fields: date }
    ) {
      edges {
        node {
          id
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
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 572
                    quality: 70
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                  )
                }
              }
            }
          }
          date(locale: "pl")
          title
          subtitle {
            podtytul
          }
          excerpt
          slug
          uri
          dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
        }
      }
    }
    asideQuery: allWpPost(limit: 3) {
      nodes {
        title
        slug
        dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 260
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                )
              }
            }
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
      }
    }
  }
`;

export default Tag;

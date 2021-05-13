import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { Heading } from "atoms/heading";
import Seo from "molecules/seo";
import Pagination from "molecules/Pagination";
import Aside from "organisms/aside";
import AsideSection from "molecules/asideSection";
import Layout from "organisms/layout";
import Post from "molecules/post";

const Wrapper = styled.div`
  min-height: 100vh;
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
  background: ${({ theme }) => theme.color.lightGray};
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 41px;
  *:visited,
  *:link {
    color: ${({ theme }) => theme.color.black};
  }
  @media only screen and (max-width: 1370px) {
    height: 320px;
  }
  @media only screen and (max-width: 880px) {
    height: 160px;
    h1 {
      font-size: 24px;
      line-height: 29px;
    }
  }
`;
const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.font.heading.size};
  text-transform: uppercase;
  margin-bottom: 26px;
  @media only screen and (max-width: 880px) {
    margin-bottom: 12px;
    margin-top: 0px;
  }
`;
const PostsWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 10;
  a:first-child {
    margin-top: 0;
  }

  a:last-child {
    border-bottom: none;
  }

  @media only screen and (max-width: 720px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;
const StyledAside = styled(Aside)`
  grid-column-start: 10;
  grid-column-end: 13;
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
  .image {
    aspect-ratio: 1/1;
    height: 110px;
  }
  .date {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 1380px) {
    .article {
      grid-template-columns: 1fr;
    }
    .image {
      display: none;
    }
  }

  @media only screen and (max-width: 1248px) {
    .title {
      font-size: 18px;
      line-height: 20px;
    }
  }

  @media only screen and (max-width: 920px) {
    .title {
      font-size: 14px;
      line-height: 16px;
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
          <Link key={wpTag.slug} to={`/${wpTag.slug}`}>
            <StyledHeading text={wpTag.name} />
          </Link>
        </CategoryName>
        <ContentWrapper>
          <PostsWrapper>
            {allWpPost.edges.map(({ node }) => (
              <Post horizontal post={node} />
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
                    placeholder: TRACED_SVG
                    formats: [AVIF, WEBP]
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
    asideQuery: allWpPost(limit: 4) {
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
                  placeholder: TRACED_SVG
                  formats: [AVIF, WEBP]
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

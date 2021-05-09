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
`;
const CategoryName = styled.div`
  background: ${({ theme }) => theme.color.lightGray};
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 41px;
  *:visited {
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
const SubcategoryName = styled.div`
  font-family: ${({ theme }) => theme.font.heading.family};
  font-weight: ${({ theme }) => theme.font.heading.weight};
  font-style: ${({ theme }) => theme.font.heading.style};
  font-size: 20px;
  *:not(:last-child) {
    margin-right: 40px;
  }
  @media only screen and (max-width: 880px) {
    font-size: 10px;
    line-height: 12px;
  }
`;
const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.font.heading.size};
  margin-bottom: 22px;
  text-transform: uppercase;
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
  grid-template-columns: 1fr 110px;
  border-bottom: none;
  padding: 0;

  .category {
    margin-bottom: 8px;
  }

  article {
    margin: 20px 0;
    column-gap: 26px;
  }

  .title {
    font-size: 20px;
    line-height: 24px;
    -webkit-line-clamp: 2;
  }

  .image {
    height: 110px;
  }

  @media only screen and (max-width: 1380px) {
    grid-template-columns: 1fr;
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

const Category = ({
  data: { wpCategory, allWpPost, asideQuery },
  pageContext,
}) => {
  const handleCategoryNode = post =>
    !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;
  console.log(wpCategory.name);
  return (
    <Layout>
      <Seo
        title={`${wpCategory.name} | Navigator`}
        description={`Wszystkie posty z kategorii ${wpCategory.name}`}
      />
      <Wrapper>
        <CategoryName>
          {wpCategory.wpChildren.nodes.length ? (
            <>
              <Link key={wpCategory.slug} to={`/${wpCategory.slug}`}>
                <StyledHeading
                  text={wpCategory.name}
                  style={{ color: `rgb(240, 117, 56)` }}
                />
              </Link>
              <SubcategoryName>
                {wpCategory.wpChildren.nodes.map(node => (
                  <Link key={node.uri} to={`/${node.slug}`}>
                    {node.name}
                  </Link>
                ))}
              </SubcategoryName>
            </>
          ) : (
            <>
              <Link to={`/${wpCategory.wpParent.node.slug}`}>
                <StyledHeading text={wpCategory.wpParent.node.name} />
              </Link>
              <SubcategoryName>
                {wpCategory.wpParent.node.wpChildren.nodes.map(node => (
                  <Link
                    style={{
                      color:
                        wpCategory.name === node.name
                          ? `rgb(240, 117, 56)`
                          : ``,
                    }}
                    key={node.slug}
                    to={`/${node.slug}`}
                  >
                    {node.name}
                  </Link>
                ))}
              </SubcategoryName>
            </>
          )}
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
      filter: {
        categories: { nodes: { elemMatch: { id: { eq: $id } } } }
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
          excerpt
          slug
          tags {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
    asideQuery: allWpPost(limit: 4) {
      nodes {
        title
        slug
        tags {
          nodes {
            name
            slug
          }
        }
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

export default Category;

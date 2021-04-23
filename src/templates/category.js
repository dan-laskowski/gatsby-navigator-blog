import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { Heading } from "atoms/heading";
import Pagination from "molecules/Pagination";
import Aside from "organisms/aside";
import PostLarge from "molecules/postLarge";
import AsideSection from "molecules/asideSection";
import PostSmall from "molecules/postSmall";
import Layout from "organisms/layout";
import truncate from "utils/truncate";

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, 122px);
  grid-gap: 16px;
  grid-template-rows: auto;
  grid-template-areas: "text text text text space img img img img aside aside aside";
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
`;

const SubcategoryName = styled.div`
  font-family: ${({ theme }) => theme.font.heading.family};
  font-weight: ${({ theme }) => theme.font.heading.weight};
  font-style: ${({ theme }) => theme.font.heading.style};
  font-size: 20px;
  *:not(:last-child) {
    margin-right: 40px;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.font.heading.size};
  text-transform: uppercase;
  margin-bottom: 26px;
`;

const Posts = styled.div`
  grid-column-start: text;
  grid-column-end: img;
  a:first-child {
    margin-top: 0;
  }

  a:last-child {
    border-bottom: none;
  }
`;

const StyledPostLarge = styled(PostLarge)`
  h1 {
    font-size: 28px;
    line-height: 33px;
  }
  h2 {
    font-size: 20px;
    line-height: 34px;
  }
  img {
    max-width: 572px;
    height: 320px;
  }
  padding-bottom: 28px;
`;

const StyledAside = styled(Aside)`
  grid-area: aside;
`;

const Category = ({
  data: { wpCategory, allWpPost, asideQuery },
  pageContext,
}) => {
  const handleCategoryNode = post =>
    !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;
  return (
    <Layout>
      <Helmet>
        <title>{wpCategory.name} | Navigator</title>
      </Helmet>
      <Wrapper>
        <CategoryName>
          {wpCategory.wpChildren.nodes.length ? (
            <>
              <Link
                key={wpCategory.slug}
                style={{ color: "red" }}
                to={`/${wpCategory.slug}`}
              >
                <StyledHeading text={wpCategory.name} />
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
          <Posts>
            {allWpPost.edges.map(({ node }) => (
              <StyledPostLarge
                key={node.title}
                title={node.title}
                excerpt={truncate(node.excerpt, 30)}
                category={node.categories.nodes[handleCategoryNode(node)]}
                tags={node.tags}
                img={node.featuredImage}
                slug={node.slug}
              />
            ))}
          </Posts>
          <StyledAside>
            <AsideSection title="ostatnie" to={`/`}>
              {asideQuery.nodes.map(node => (
                <PostSmall
                  key={node.title}
                  title={node.title}
                  category={node.categories.nodes[handleCategoryNode(node)]}
                  tags={node.tags}
                  img={node.featuredImage}
                  slug={node.slug}
                />
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
              altText
              srcSet
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
    asideQuery: allWpPost(limit: 3) {
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
            srcSet
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

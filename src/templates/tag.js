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

const Tag = ({ data: { wpTag, allWpPost, asideQuery }, pageContext }) => {
  const handleCategoryNode = post =>
    !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;
  return (
    <Layout>
      <Helmet>
        <title>{wpTag.name} | Navigator</title>
      </Helmet>
      <Wrapper>
        <CategoryName>
          <Link key={wpTag.slug} to={`/${wpTag.slug}`}>
            <StyledHeading text={wpTag.name} />
          </Link>
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
          subtitle {
            podtytul
          }
          excerpt
          slug
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

export default Tag;

import * as React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { graphql } from "gatsby";
import PostLarge from "molecules/postLarge";
import AsideSection from "molecules/asideSection";
import Layout from "organisms/layout";
import Aside from "organisms/aside";

const PageWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, 122px);
  column-gap: 16px;
  grid-template-rows: auto;
  grid-template-areas:
    "slider slider slider slider slider slider slider slider slider slider slider slider"
    "bigArticle bigArticle bigArticle bigArticle bigArticle bigArticle bigArticle bigArticle bigArticle aside aside aside"
    "smallArticle smallArticle smallArticle smallArticle smallArticle smallArticle smallArticle smallArticle smallArticle aside aside aside";
`;

const CarouselWrapper = styled.section`
  min-height: 725px;
  grid-area: slider;
`;

const StyledAside = styled(Aside)`
  grid-area: aside;
`;

const ArticlePostLarge = styled(PostLarge)`
  grid-area: bigArticle;
`;

const IndexPage = ({ data: { carouselPosts, articlePosts } }) => {
  const handleCategoryNode = post =>
    !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;
  console.log(articlePosts);
  return (
    <Layout>
      <PageWrapper>
        <CarouselWrapper>
          {carouselPosts.nodes.map(node => (
            <PostLarge
              key={node.title}
              title={node.title}
              excerpt={node.subtitle.podtytul}
              category={node.categories.nodes[handleCategoryNode(node)]}
              tags={node.tags}
              img={node.featuredImage}
              slug={node.slug}
            />
          ))}
        </CarouselWrapper>
        <AsideSection title="artykuły">
          <ArticlePostLarge
            key={articlePosts.nodes[0].title}
            title={articlePosts.nodes[0].title}
            excerpt={articlePosts.nodes[0].subtitle.podtytul}
            category={
              articlePosts.nodes[0].categories.nodes[
                handleCategoryNode(articlePosts.nodes[0])
              ]
            }
            tags={articlePosts.nodes[0].tags}
            img={articlePosts.nodes[0].featuredImage}
            slug={articlePosts.nodes[0].slug}
          />
        </AsideSection>
        <StyledAside />
      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    carouselPosts: allWpPost(filter: { status: { eq: "publish" } }, limit: 3) {
      nodes {
        title
        subtitle {
          podtytul
        }
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
            altText
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
    articlePosts: allWpPost(
      filter: {
        status: { eq: "publish" }
        categories: { nodes: { elemMatch: { name: { eq: "Artykuły" } } } }
      }
      limit: 4
    ) {
      nodes {
        title
        subtitle {
          podtytul
        }
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
            altText
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

export default IndexPage;

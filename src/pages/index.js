import * as React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { graphql } from "gatsby";
import PostLarge from "molecules/postLarge";
import PostMedium from "molecules/postMedium";
import AsideSection from "molecules/asideSection";
import Layout from "organisms/layout";
import Aside from "organisms/aside";

const PageWrapper = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(16, 65px);
  column-gap: 40px;
  grid-template-rows: auto;
  grid-template-areas:
    "s s s s s s s s s s s s s s s s"
    "bt bt bt bt bi bi bi bi bi bi bi bi a a a a"
    "sm sm sm sm sm sm sm sm sm sm sm sm a a a a";
`;

const CarouselWrapper = styled.section`
  margin-top: 94px;
  grid-area: s;
  * {
    border: none;
  }
`;
const CarouselPostLarge = styled(PostLarge)`
  grid-template-columns: repeat(16, 65px);
  grid-gap: 40px;
  grid-template-rows: auto;
  grid-template-areas: "text text text text text text . img img img img img img img img img";
  grid-area: s;
  /* justify-content: center; */
`;

const StyledAside = styled(Aside)`
  width: auto;
  margin-top: 60px;
  grid-area: a;
  padding-left: 0;
  border-left: none;
`;

const ArticleSection = styled(AsideSection)`
  margin-top: 60px;
  grid-column-start: bt;
  grid-column-end: bi;
  width: auto;
`;
const ArticlePostLarge = styled(PostLarge)`
  grid-column-start: bt;
  grid-column-end: bi;
  justify-content: center;
  padding-bottom: 18px;
  margin-bottom: 0;
  article {
    grid-area: bt;
    justify-content: space-between;
  }
  div {
    grid-area: bi;
  }
  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 16px;
    line-height: 20px;
  }
  img {
    width: 800px;
    max-height: 432px;
  }
`;

const ArticlePostMediumWrapper = styled.div`
  grid-area: sm;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const ArticlePostMedium = styled(PostMedium)`
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-gap: 40px;
  grid-template-rows: auto;
  grid-template-areas:
    "img img img img"
    "text text text text";
  margin-top: 0;

  div {
    margin-left: 0;
  }

  img {
    height: 210px;
  }

  /* padding-right: 20px;
  padding-left: 20px;
  border-right: 1px solid ${({ theme }) => theme.color.lightGray}; */
`;

const IndexPage = ({ data: { carouselPosts, articlePosts } }) => {
  const handleCategoryNode = post =>
    !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;
  return (
    <Layout>
      <PageWrapper>
        <CarouselWrapper>
          <Splide
            options={{
              type: "loop",
              interval: 5000,
              gap: "1rem",
              autoplay: true,
              arrows: "slider",
            }}
            hasSliderWrapper
          >
            {carouselPosts.nodes.map(node => (
              <SplideSlide>
                <CarouselPostLarge
                  key={node.title}
                  title={node.title}
                  excerpt={node.subtitle.podtytul}
                  category={node.categories.nodes[handleCategoryNode(node)]}
                  tags={node.tags}
                  img={node.featuredImage}
                  slug={node.slug}
                />
              </SplideSlide>
            ))}
          </Splide>
        </CarouselWrapper>
        <ArticleSection title="artykuły">
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
          <ArticlePostMediumWrapper>
            {articlePosts.nodes.slice(1, 4).map(node => (
              <ArticlePostMedium
                key={node.title}
                title={node.title}
                category={node.categories.nodes[handleCategoryNode(node)]}
                tags={node.tags}
                img={node.featuredImage}
                slug={node.slug}
              />
            ))}
          </ArticlePostMediumWrapper>
        </ArticleSection>
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

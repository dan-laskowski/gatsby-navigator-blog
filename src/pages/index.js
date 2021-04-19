import * as React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { Helmet } from "react-helmet";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { graphql } from "gatsby";
import PostLarge from "molecules/postLarge";
import PostMedium from "molecules/postMedium";
import PostSmall from "molecules/postSmall";
import Shorty from "molecules/shorty";
import AsideSection from "molecules/asideSection";
import Layout from "organisms/layout";
import Aside from "organisms/aside";
import truncate from "utils/truncate";

const PageWrapper = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(16, 65px);
  column-gap: 40px;
  grid-template-rows: auto;
  grid-template-areas:
    "s s s s s s s s s s s s s s s s"
    "bt bt bt bt bi bi bi bi bi bi bi bi a a a a"
    "sm sm sm sm sm sm sm sm sm sm sm sm a a a a"
    "dp dp dp dp dp dp dp dp dp dp dp dp dp dp dp dp"
    "cm cm cm cm cm cm cm cm cs cs cs cs com com com com"
    "es es es es es es es es es es es es com com com com"
    "comh comh comh comh comh comh comh comh comh comh comh comh comh comh comh comh";
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
  grid-gap: unset;
  column-gap: 40px;
  grid-template-rows: auto;
  grid-template-areas: "text text text text text text . img img img img img img img img img";
  grid-area: s;
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
  margin-bottom: 0;
`;

const ArticlePostLarge = styled(PostLarge)`
  grid-column-start: bt;
  grid-column-end: bi;
  justify-content: space-between;
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
    line-height: 57px;
    max-width: 379px;
  }

  h2 {
    font-size: 16px;
    line-height: 20px;
    max-width: 379px;
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

const TipsSection = styled(AsideSection)`
  width: auto;
  grid-column-start: s;
  grid-column-end: s;
`;

const TipsSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const BcorpSection = styled(AsideSection)`
  width: auto;
  grid-column-start: sm;
  grid-column-end: sm;
  margin-bottom: 28px;
`;

const BcorpSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const LargePostLarge = styled(PostLarge)`
  max-width: 800px;
  justify-content: center;
  padding-bottom: 18px;
  margin-bottom: 0;
  h1 {
    font-size: 26px;
    max-width: 318px;
  }
  h2 {
    font-size: 16px;
    max-width: 357px;
    line-height: 20px;
  }
  img {
    width: 400px;
    max-height: 250px;
  }
  /* border: none; */
  margin-bottom: 0;
  border-bottom: none;
`;

const MiniPostWrapper = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 30px;
`;

const EventSection = styled(AsideSection)`
  width: auto;
  grid-column-start: sm;
  grid-column-end: sm;
  margin-bottom: 0;
`;

const EventSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const CommercialVertical = styled.aside`
  grid-area: com;
  background: #f07538;
`;
const CommercialHorizontal = styled.div`
  grid-area: comh;
  height: 380px;
  margin-top: 38px;
  margin-bottom: 96px;
  background: #2d3048;
`;

const ShortyWrapper = styled.section`
  grid-column-start: s;
  grid-column-end: s;
`;

const ShortyRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IndexPage = ({
  data: {
    carouselPosts,
    articlePosts,
    tipsPosts,
    bcorpPosts,
    eventPosts,
    interviewPosts,
  },
}) => {
  const handleCategoryNode = post =>
    !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;
  if (typeof window === "undefined") {
    return <p>Server Render</p>;
  }
  return (
    <>
      <Helmet>
        <title>{"Navigator Blog"}</title>
        <meta
          name="description"
          content="Magazyn o zrównoważonym rozwoju i etycznym biznesie"
        />
      </Helmet>
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
          <ArticleSection title="artykuły" to={`/artykuly`}>
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
          <TipsSection title="Dobre praktyki" to={`/dobre-praktyki`}>
            <TipsSectionWrapper>
              {tipsPosts.nodes.map(node => (
                <ArticlePostMedium
                  key={node.title}
                  title={node.title}
                  excerpt={ReactHtmlParser(truncate(node.excerpt, 19))}
                  category={node.categories.nodes[handleCategoryNode(node)]}
                  tags={node.tags}
                  img={node.featuredImage}
                  slug={node.slug}
                />
              ))}
            </TipsSectionWrapper>
          </TipsSection>
          <BcorpSection title="B Corp" to={`/dobre-praktyki`}>
            <BcorpSectionWrapper>
              <LargePostLarge
                key={bcorpPosts.nodes[0].title}
                title={bcorpPosts.nodes[0].title}
                excerpt={bcorpPosts.nodes[0].subtitle.podtytul}
                category={
                  bcorpPosts.nodes[0].categories.nodes[
                    handleCategoryNode(bcorpPosts.nodes[0])
                  ]
                }
                tags={bcorpPosts.nodes[0].tags}
                img={bcorpPosts.nodes[0].featuredImage}
                slug={bcorpPosts.nodes[0].slug}
              />
              <MiniPostWrapper>
                {bcorpPosts.nodes.slice(1, 3).map(node => (
                  <PostSmall
                    key={node.title}
                    title={node.title}
                    category={node.categories.nodes[handleCategoryNode(node)]}
                    tags={node.tags}
                    img={node.featuredImage}
                    slug={node.slug}
                  />
                ))}
              </MiniPostWrapper>
            </BcorpSectionWrapper>
          </BcorpSection>
          <EventSection title="Wydarzenia" to={`/wydarzenia`}>
            <EventSectionWrapper>
              {eventPosts.nodes.map(node => (
                <ArticlePostMedium
                  key={node.title}
                  title={node.title}
                  category={node.categories.nodes[handleCategoryNode(node)]}
                  tags={node.tags}
                  img={node.featuredImage}
                  slug={node.slug}
                />
              ))}
            </EventSectionWrapper>
          </EventSection>
          <CommercialVertical />
          <CommercialHorizontal />
          <ShortyWrapper>
            <ShortyRow>
              <Shorty posts={eventPosts} title="Wywiady" to={`/wywiady`} />
              <Shorty posts={articlePosts} title="Artykuły" to={`/artykuly`} />
              <Shorty
                posts={bcorpPosts}
                title="B Corp"
                to={`/teksty-o-b-corpach`}
              />
            </ShortyRow>
            <ShortyRow>
              <Shorty
                posts={tipsPosts}
                title="Dobre praktyki"
                to={`/dobre-praktyki`}
              />
              <Shorty
                posts={eventPosts}
                title="Wydarzenia"
                to={`/wydarzenia`}
              />
              <Shorty
                posts={articlePosts}
                title="Księgarnia"
                to={`/ksiegarnia`}
              />
            </ShortyRow>
            <ShortyRow>
              <Shorty
                posts={eventPosts}
                title="Publikacje/raporty"
                to={`/publikacje-i-raporty`}
              />
              <Shorty posts={tipsPosts} title="Baza firm" />
              <Shorty posts={articlePosts} title="Artykuły" to={`/artykuly`} />
            </ShortyRow>
          </ShortyWrapper>
          <StyledAside />
        </PageWrapper>
      </Layout>
    </>
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
    tipsPosts: allWpPost(
      filter: {
        status: { eq: "publish" }
        categories: { nodes: { elemMatch: { name: { eq: "Dobre praktyki" } } } }
      }
      limit: 4
    ) {
      nodes {
        title
        excerpt
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
    bcorpPosts: allWpPost(
      filter: {
        status: { eq: "publish" }
        categories: {
          nodes: { elemMatch: { name: { eq: "Teksty o B Corpach" } } }
        }
      }
      limit: 3
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
    eventPosts: allWpPost(
      filter: {
        status: { eq: "publish" }
        categories: { nodes: { elemMatch: { name: { eq: "Wydarzenia" } } } }
      }
      limit: 3
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
    interviewPost: allWpPost(
      filter: {
        status: { eq: "publish" }
        categories: { nodes: { elemMatch: { name: { eq: "Wywiad" } } } }
      }
      limit: 3
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

import * as React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { graphql } from "gatsby";
import Seo from "molecules/seo";
import PostLarge from "molecules/postLarge";
import PostMedium from "molecules/postMedium";
import PostSmall from "molecules/postSmall";
import Shorty from "molecules/shorty";
import AsideSection from "molecules/asideSection";
import Layout from "organisms/layout";
import Aside from "organisms/aside";
import truncate from "utils/truncate";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const PageWrapper = styled.div`
  display: grid;
  max-width: 1645px;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  grid-template-rows: auto;
  grid-template-areas:
    "s s s s"
    "bt bi bi a"
    "sm1 sm2 sm3 a"
    "dp dp dp dp"
    "cm cm cs com"
    "es es es com"
    "comh comh comh comh";
`;
const CarouselWrapper = styled.section`
  margin-top: 94px;
  grid-area: s;
  * {
    border: none;
  }
  @media only screen and (max-width: 1280px) {
    margin-top: 46px;
  }
`;
const CarouselPostLarge = styled(PostLarge)`
  justify-content: space-between;

  @media only screen and (max-width: 1910px) {
    margin-left: 53px;
    margin-right: 53px;
  }

  @media only screen and (max-width: 1620px) {
    .gatsby-image-wrapper {
      width: 48vw;
      height: 100%;
      aspect-ratio: 16/9;
      object-fit: contain;
    }
    justify-content: space-around;
  }
  @media only screen and (max-width: 1420px) {
    align-items: stretch;
    margin-left: 34px;
    margin-right: 34px;
    h1 {
      font-size: 34px;
      line-height: 33px;
      max-width: 400px;
    }

    h2 {
      font-size: 14px;
      line-height: 20px;
      max-width: 400px;
    }
  }

  @media only screen and (max-width: 1280px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;
const StyledAside = styled(Aside)`
  width: 100%;
  grid-area: a;
  padding-left: 0;
  margin-top: 10px;
  border-left: none;
  @media only screen and (max-width: 1745px) {
    margin-right: 30px;
  }
`;
const ArticleSection = styled(AsideSection)`
  margin-top: 60px;
  grid-column-start: sm1;
  grid-column-end: sm3;
  width: auto;
  margin-bottom: 0;
  @media only screen and (max-width: 1745px) {
    margin-left: 30px;
  }
  @media only screen and (max-width: 1420px) {
    h1 {
      font-size: 18px;
      line-height: 20px;
    }
    h2 {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;
const ArticlePostLarge = styled(PostLarge)`
  grid-column-start: sm1;
  grid-column-end: sm3;
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
  .gatsby-image-wrapper {
    aspect-ratio: 16/9;
    max-width: 800px;

    max-height: 432px;
  }
  @media only screen and (max-width: 1420px) {
    h1 {
      font-size: 18px;
      line-height: 20px;
    }
    h2 {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;
const ArticlePostMediumWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
`;
const ArticlePostMedium = styled(PostMedium)`
  display: block;
  width: auto;
  div {
    margin-left: 0;
  }
  .gatsby-image-wrapper {
    aspect-ratio: 16/9;
  }

  /* padding-right: 20px;
  padding-left: 20px;
  border-right: 1px solid ${({ theme }) => theme.color.lightGray}; */
`;
const TipsSection = styled(AsideSection)`
  width: auto;
  grid-column-start: s;
  grid-column-end: s;
  @media only screen and (max-width: 1745px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: 1420px) {
    a h1 {
      font-size: 18px;
      line-height: 20px;
    }
    h2 {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;
const TipsSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
`;
const BcorpSection = styled(AsideSection)`
  width: auto;
  grid-column-start: sm1;
  grid-column-end: sm3;
  margin-bottom: 28px;
  @media only screen and (max-width: 1370px) {
    grid-column-start: sm1;
    grid-column-end: com;
  }
`;
const BcorpSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  grid-template-areas: "s1 s1 s2";

  @media only screen and (max-width: 1370px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;
    grid-template-areas: "s1 s1 s2 s3";
    h1 {
      font-size: 18px;
      line-height: 20px;
    }
    h2 {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;
const LargePostLarge = styled(PostLarge)`
  grid-area: s1;
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
  .gatsby-image-wrapper {
    aspect-ratio: 16/9;
    height: 100%;
    max-height: 250px;
  }
  /* border: none; */
  margin-bottom: 0;
  border-bottom: none;
  @media only screen and (max-width: 1370px) {
    max-width: none;
    display: flex;
    flex-direction: column;
    article {
      order: 1;
    }
    h1,
    h2 {
      max-width: unset;
    }
    .gatsby-image-wrapper {
      max-height: unset;
    }
  }
`;
const MiniPostWrapper = styled.div`
  grid-column-start: s2;
  grid-column-end: s3;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  margin-top: 30px;

  @media only screen and (max-width: 1370px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    max-width: none;
    flex-direction: row;
    width: auto;
    a:nth-of-type(1) {
      grid-area: 0/1;
    }
    a:nth-of-type(2) {
      grid-area: 1/2;
    }
  }
`;
const EventSection = styled(AsideSection)`
  width: auto;
  grid-column-start: sm1;
  grid-column-end: sm3;
  margin-bottom: 0;
  @media only screen and (max-width: 1370px) {
    grid-column-start: sm1;
    grid-column-end: com;
  }
`;
const EventSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  @media only screen and (max-width: 1370px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;
    grid-template-areas: "s2 s3 s1 s1";
    h1 {
      font-size: 18px;
      line-height: 20px;
    }
    h2 {
      font-size: 12px;
      line-height: 14px;
    }
    a:nth-of-type(3) {
      display: none;
    }
  }
`;

const EventLargePostLarge = styled(LargePostLarge)`
  display: none;
  @media only screen and (max-width: 1370px) {
    display: flex;
  }
`;
const CommercialVertical = styled.aside`
  grid-area: com;
  background: #f07538;
  @media only screen and (max-width: 1370px) {
    grid-area: none;
    display: none;
  }
`;
const CommercialHorizontal = styled.div`
  grid-area: comh;
  height: 380px;
  margin-top: 38px;
  margin-bottom: 96px;
  background: #2d3048;
  @media only screen and (max-width: 1370px) {
    display: none;
  }
`;
const ShortyWrapper = styled.section`
  grid-column-start: s;
  grid-column-end: s;
  @media only screen and (max-width: 1370px) {
    display: none;
  }
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
    return <p></p>;
  }
  return (
    <>
      <Layout>
        <Seo
          title={`Navigator Blog`}
          description={`Magazyn o zrównoważonym rozwoju i etycznym biznesie związanym z zrównoważonym rozwojem`}
        />
        <MainWrapper>
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
                  <SplideSlide aria-hidden={false} key={node.title}>
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
                <EventLargePostLarge
                  key={eventPosts.nodes[2].title}
                  title={eventPosts.nodes[2].title}
                  excerpt={eventPosts.nodes[2].subtitle.podtytul}
                  category={
                    eventPosts.nodes[2].categories.nodes[
                      handleCategoryNode(eventPosts.nodes[2])
                    ]
                  }
                  tags={eventPosts.nodes[2].tags}
                  img={eventPosts.nodes[2].featuredImage}
                  slug={eventPosts.nodes[2].slug}
                />
              </EventSectionWrapper>
            </EventSection>
            <CommercialVertical />
            <CommercialHorizontal />
            <ShortyWrapper>
              <ShortyRow>
                <Shorty posts={eventPosts} title="Wywiady" to={`/wywiady`} />
                <Shorty
                  posts={articlePosts}
                  title="Artykuły"
                  to={`/artykuly`}
                />
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
                <Shorty
                  posts={articlePosts}
                  title="Artykuły"
                  to={`/artykuly`}
                />
              </ShortyRow>
            </ShortyWrapper>
            <StyledAside />
          </PageWrapper>
        </MainWrapper>
      </Layout>
    </>
  );
};

export const query = graphql`
  query IndexQuery {
    carouselPosts: allWpPost(
      filter: { status: { eq: "publish" } }
      limit: 3
      sort: { order: DESC, fields: date }
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
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 910
                  quality: 76
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
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
    articlePosts: allWpPost(
      filter: {
        status: { eq: "publish" }
        categories: { nodes: { elemMatch: { name: { eq: "Artykuły" } } } }
      }
      limit: 4
      sort: { order: DESC, fields: date }
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
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
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
    tipsPosts: allWpPost(
      filter: {
        status: { eq: "publish" }
        categories: { nodes: { elemMatch: { name: { eq: "Dobre praktyki" } } } }
      }
      limit: 4
      sort: { order: DESC, fields: date }
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
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 380
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
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
    bcorpPosts: allWpPost(
      filter: {
        status: { eq: "publish" }
        categories: {
          nodes: { elemMatch: { name: { eq: "Teksty o B Corpach" } } }
        }
      }
      limit: 3
      sort: { order: DESC, fields: date }
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
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
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
    eventPosts: allWpPost(
      filter: {
        status: { eq: "publish" }
        categories: { nodes: { elemMatch: { name: { eq: "Wydarzenia" } } } }
      }
      limit: 3
      sort: { order: DESC, fields: date }
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
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 380
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
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
    interviewPost: allWpPost(
      filter: {
        status: { eq: "publish" }
        categories: { nodes: { elemMatch: { name: { eq: "Wywiad" } } } }
      }
      limit: 3
      sort: { order: DESC, fields: date }
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
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
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

export default IndexPage;

import * as React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { graphql } from "gatsby";
import Seo from "molecules/seo";
import Post from "molecules/post";
import Shorty from "molecules/shorty";
import AsideSection from "molecules/asideSection";
import Layout from "organisms/layout";
import Aside from "organisms/aside";

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
    "pl pl pl a"
    "sm1 sm2 sm3 a"
    "dp dp dp dp"
    "cm cm cs com"
    "es es es com"
    "comh comh comh comh";
  @media only screen and (max-width: 1745px) {
    margin-left: 30px;
    margin-right: 30px;
    column-gap: 30px;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
const MobilePostsWrapper = styled.section`
  grid-column-start: s;
  grid-column-end: s;
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
  &:first-child > a:first-child article .text {
    margin-left: 24px;
    margin-right: 24px;
  }
`;
const MobileSidePostWrapper = styled.div`
  .article {
    margin-left: 24px;
    margin-right: 24px;
  }
  a:last-child article {
    border-bottom: none;
  }
`;
const SectionMobileSidePostWrapper = styled(MobileSidePostWrapper)`
  .article {
    margin-left: 0;
    margin-right: 0;
  }
  .title {
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }
`;
const CarouselWrapper = styled.section`
  margin-top: 94px;
  grid-area: s;
  * {
    border: none;
  }
  @media only screen and (max-width: 1370px) {
    margin-top: 46px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }

  .article {
    grid-template-columns: 1.2fr 2fr;
    margin-bottom: 49px;
    border-bottom: none;
    @media only screen and (max-width: 1180px) {
      margin-bottom: 22px;
    }
  }

  .title {
    font-size: 65px;
    line-height: 77px;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    @media only screen and (max-width: 1570px) {
      font-size: 54px;
      line-height: 62px;
    }
    @media only screen and (max-width: 1370px) {
      font-size: 44px;
      line-height: 50px;
    }
    @media only screen and (max-width: 1180px) {
      font-size: 29px;
      line-height: 37px;
    }
    @media only screen and (max-width: 830px) {
      font-size: 26px;
      line-height: 31px;
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
  }
  .subtitle {
    font-size: 28px;
    line-height: 38px;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    @media only screen and (max-width: 1570px) {
      font-size: 21px;
      line-height: 35px;
    }
    @media only screen and (max-width: 1370px) {
      font-size: 20px;
      line-height: 31px;
    }
    @media only screen and (max-width: 1180px) {
      font-size: 18px;
      line-height: 28px;
    }
    @media only screen and (max-width: 830px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
  .date {
    font-size: 16px;
    line-height: 23px;
    @media only screen and (max-width: 1180px) {
      font-size: 12px;
      line-height: 13px;
    }
  }
  .image-wrapper {
    @media only screen and (max-width: 930px) {
      /* aspect-ratio: 16/9; */
      padding-top: 56.25%;
    }
  }
`;
const StyledAside = styled(Aside)`
  width: 100%;
  grid-area: a;
  padding-left: 0;
  margin-top: 10px;
  border-left: none;
  @media only screen and (max-width: 1370px) {
    margin-top: 0;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
const ArticleSection = styled(AsideSection)`
  margin-top: 60px;
  grid-column-start: sm1;
  grid-column-end: sm3;
  width: auto;
  margin-bottom: 0;

  article:first-of-type {
    padding-bottom: 38px;
    margin-bottom: 16px;
  }

  @media only screen and (max-width: 1420px) {
    h2 {
      font-size: 12px;
      line-height: 14px;
    }
  }
  @media only screen and (max-width: 1370px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: 800px) {
    grid-column-end: a;
  }
  @media only screen and (max-width: 787px) {
    h2 {
      font-size: 11px;
      line-height: 13px;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-left: 24px;
    margin-right: 24px;
    h1 {
      font-size: 20px;
      line-height: 24px;
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
    h2 {
      font-size: 16px;
      line-height: 20px;
      -webkit-line-clamp: 2;
      line-clamp: 2;
    }
    article:first-of-type {
      padding: 18px 0;
      margin-bottom: 0;
    }
    margin-top: 6px;
  }
`;
const ArticleWrapper = styled.div``;
const ArticlePostLargeWrapper = styled.div`
  .article {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
    @media only screen and (max-width: 1150px) {
      grid-template-columns: 1.3fr 2fr;
    }
    @media only screen and (max-width: 640px) {
      grid-template-columns: 1.7fr 2fr;
      column-gap: 20px;
    }
    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
  }
  .text {
    grid-column-start: 1;
  }
  .image-wrapper {
    grid-column-start: 2;
    grid-column-end: 4;
    @media only screen and (max-width: 720px) {
      aspect-ratio: unset;
    }
    @media only screen and (max-width: 600px) {
      padding-top: 56.25%;
      /* aspect-ratio: 16/9; */
    }
  }
  .title {
    font-size: 48px;
    line-height: 57px;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    @media only screen and (max-width: 1520px) {
      font-size: 41px;
      line-height: 46px;
    }
    @media only screen and (max-width: 1330px) {
      font-size: 34px;
      line-height: 38px;
    }
    @media only screen and (max-width: 1150px) {
      font-size: 28px;
      line-height: 34px;
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
    @media only screen and (max-width: 720px) {
      font-size: 22px;
      line-height: 28px;
    }
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      line-height: 24px;
      -webkit-line-clamp: 3;
    }
  }
  .subtitle {
    font-size: 16px;
    line-height: 20px;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    @media only screen and (max-width: 1330px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 1150px) {
      font-size: 12px;
      line-height: 18px;
      -webkit-line-clamp: 5;
    }
    @media only screen and (max-width: 600px) {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 19px;
    }
  }
  .date {
    @media only screen and (max-width: 720px) {
      margin-bottom: 0;
    }
  }
`;
const ArticlePostMediumWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;

  article h2 {
    display: none;
  }

  @media only screen and (max-width: 1370px) {
    column-gap: 30px;
    article h2 {
      display: -webkit-box;
      margin-bottom: 10px;
    }
  }
  @media only screen and (max-width: 600px) {
    display: block;

    a:first-child article {
      border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    }
    a:last-child article {
      display: none;
    }
    .article {
      border-bottom: none;
      display: grid;
      grid-template-columns: 1fr 110px;
      column-gap: 46px;
      margin-bottom: 0;
      @media only screen and (max-width: 400px) {
        grid-template-columns: 1fr 100px;
        column-gap: 20px;
      }
    }
    .category {
      margin-top: 0;
    }
    .text {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .title {
      font-size: 16px;
      line-height: 19px;
      -webkit-line-clamp: 3;
    }

    .subtitle {
      display: none;
    }
    .image-wrapper {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
      /* aspect-ratio: 1/1; */
      padding-top: 100%;
    }
  }
`;
const TipsSection = styled(AsideSection)`
  width: auto;
  grid-column-start: s;
  grid-column-end: s;
  margin-top: 94px;
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
  @media only screen and (max-width: 1370px) {
    margin-top: 76px;
  }
  @media only screen and (max-width: 787px) {
    margin-top: 12px;
    h2 {
      font-size: 11px;
      line-height: 13px;
    }
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
      line-height: 24px;
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
    h2 {
      font-size: 16px;
      line-height: 20px;
      -webkit-line-clamp: 2;
      line-clamp: 2;
    }
    article:first-of-type {
      padding: 18px 0;
    }
    margin-top: 6px;
  }
`;
const TipsSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  @media only screen and (max-width: 1370px) {
    column-gap: 30px;
  }
  @media only screen and (max-width: 787px) {
    grid-template-columns: repeat(3, 1fr);
    a:last-child {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
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
  @media only screen and (max-width: 787px) {
    margin-top: 12px;
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
const BcorpSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  @media only screen and (max-width: 1370px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
  }
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr 1fr 1.4fr 1.4fr;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    row-gap: 24px;
  }
`;
const BCorpPostLargeWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  border-bottom: 0;
  .article {
    column-gap: 82px;
    border-bottom: none;
    padding: 18px 0;
  }
  .title {
    font-size: 26px;
    line-height: 31px;
  }
  .subtitle {
    font-size: 16px;
    line-height: 20px;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }
  .image-wrapper {
    /* aspect-ratio: 8/5; */
    padding-top: 62.5%;
  }
  .date {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 1700px) {
    .image-wrapper {
      /* aspect-ratio: 4/3; */
      padding-top: 75%;
    }
  }
  @media only screen and (max-width: 1560px) {
    .image-wrapper {
      /* aspect-ratio: 5/4; */
      padding-top: 80%;
    }
  }
  @media only screen and (max-width: 1370px) {
    .article {
      display: flex;
      flex-direction: column;
    }
    .image-wrapper {
      /* aspect-ratio: 21/9; */
      padding-top: 42.85%;
    }
  }
  @media only screen and (max-width: 860px) {
    .title {
      font-size: 18px;
      line-height: 22px;
    }
    .subtitle {
      font-size: 12px;
      line-height: 14px;
    }
  }
  @media only screen and (max-width: 680px) {
    .image-wrapper {
      /* aspect-ratio: 16/9; */
      padding-top: 56.25%;
    }
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const BCorpPostMediumWrapper = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;

  .article {
    grid-template-columns: 2.4fr 110px;
    column-gap: 24px;
    padding: 10px 0;
    border-bottom: none;
  }
  .category {
    margin-bottom: 8px;
  }
  .title {
    font-size: 20px;
    line-height: 24px;
  }
  .subtitle {
    display: none;
  }
  .image-wrapper {
    /* aspect-ratio: 1/1; */
    padding-top: 50%;
    width: 110px;
    height: auto;
  }

  &:first-child > a.bcorp:last-child,
  &:first-child > a.bcorp:first-child {
    display: none;
  }

  @media only screen and (max-width: 1370px) {
    grid-column-end: 5;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    .article {
      display: flex;
      flex-direction: column;
    }
    .title {
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
    .subtitle {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      line-clamp: 5;
      font-size: 12px;
      line-height: 14px;
    }
    .image-wrapper {
      /* aspect-ratio: 16/9; */
      padding-top: 56.25%;
      width: unset;
    }
  }
  @media only screen and (max-width: 860px) {
    .title {
      -webkit-line-clamp: 4;
      line-clamp: 4;
    }
  }
  @media only screen and (max-width: 820px) {
    .title {
      font-size: 18px;
      line-height: 20px;
    }
  }
  @media only screen and (max-width: 740px) {
    .title {
      font-size: 16px;
      line-height: 18px;
    }
  }
  @media only screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 3;
    &:first-child > a.bcorp:last-child,
    &:first-child > a.bcorp:first-child {
      display: block;
    }
  }
`;
const EventSection = styled(AsideSection)`
  width: auto;
  grid-column-start: sm1;
  grid-column-end: sm3;
  margin-bottom: 28px;
  @media only screen and (max-width: 1370px) {
    grid-column-start: sm1;
    grid-column-end: com;
  }
  @media only screen and (max-width: 787px) {
    margin-top: 12px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const EventSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  @media only screen and (max-width: 1370px) {
    grid-template-columns: repeat(4, 1fr);
    a:first-child {
      grid-column-start: 1;
      grid-column-end: 2;
    }
    a:first-child,
    a:nth-child(2) {
      .title {
        font-size: 20px;
        line-height: 24px;
      }
      .subtitle {
        font-size: 12px;
        line-height: 14px;
        -webkit-line-clamp: 5;
      }
      .image-wrapper {
        /* aspect-ratio: 16/9; */
        padding-top: 56.25%;
      }
    }
    a:last-child {
      grid-column-start: 3;
      grid-column-end: 5;
    }
    .article {
      display: flex;
      flex-direction: column;
    }
    .image-wrapper {
      /* aspect-ratio: 21/9; */
      padding-top: 42.85%;
    }
  }
  @media only screen and (max-width: 860px) {
    .title {
      font-size: 18px;
      line-height: 22px;
    }
    .subtitle {
      font-size: 12px;
      line-height: 14px;
    }
  }
  @media only screen and (max-width: 820px) {
    a:first-child,
    a:nth-child(2) {
      .title {
        font-size: 18px;
        line-height: 20px;
      }
    }
  }
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1.4fr 1.4fr 2fr;
    column-gap: 30px;
    .image-wrapper {
      /* aspect-ratio: 16/9; */
      padding-top: 56.25%;
    }
  }
  @media only screen and (max-width: 600px) {
    display: none;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  @media only screen and (max-width: 1370px) {
    display: none;
  }
`;
const ShortyRow = styled.div`
  display: flex;
  flex-direction: column;
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
  if (typeof window === "undefined") {
    return <p></p>;
  }
  return (
    <>
      <Layout>
        <Seo
          title={`Navigator Blog`}
          description={`Magazyn o zrównoważonym rozwoju i etycznym biznesie związanym z zrównoważonym rozwojem`}
        >
          <meta
            name="google-site-verification"
            content="gfZEjdj2MLF7AyKIFr1GCPBkJpAV7zZTf7qSEKECZNQ"
          />
        </Seo>
        <MainWrapper>
          <PageWrapper>
            <MobilePostsWrapper>
              {carouselPosts.nodes.slice(0, 1).map(node => (
                <Post key={node.slug} loading="eager" post={node} />
              ))}
              <MobileSidePostWrapper>
                {carouselPosts.nodes.slice(1, 3).map(node => (
                  <Post
                    key={node.slug}
                    loading="eager"
                    horizontal
                    post={node}
                  />
                ))}
              </MobileSidePostWrapper>
            </MobilePostsWrapper>
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
                    <Post key={node.slug} horizontal post={node} />
                  </SplideSlide>
                ))}
              </Splide>
            </CarouselWrapper>
            <ArticleSection title="artykuły" to={`/artykuly`}>
              <ArticleWrapper>
                <ArticlePostLargeWrapper>
                  {articlePosts.nodes.slice(0, 1).map(node => (
                    <Post key={node.slug} horizontal post={node} />
                  ))}
                </ArticlePostLargeWrapper>
                <ArticlePostMediumWrapper>
                  {articlePosts.nodes.slice(1, 4).map(node => (
                    <Post key={node.slug} post={node} />
                  ))}
                </ArticlePostMediumWrapper>
              </ArticleWrapper>
            </ArticleSection>
            <TipsSection title="Dobre praktyki" to={`/dobre-praktyki`}>
              <MobilePostsWrapper>
                {tipsPosts.nodes.slice(0, 1).map(node => (
                  <Post key={node.slug} post={node} />
                ))}
                <SectionMobileSidePostWrapper>
                  {tipsPosts.nodes.slice(1, 3).map(node => (
                    <Post key={node.slug} horizontal post={node} />
                  ))}
                </SectionMobileSidePostWrapper>
              </MobilePostsWrapper>
              <TipsSectionWrapper>
                {tipsPosts.nodes.map(node => (
                  <Post key={node.slug} post={node} />
                ))}
              </TipsSectionWrapper>
            </TipsSection>
            <BcorpSection title="B Corp" to={`/teksty-o-b-corpach`}>
              <BcorpSectionWrapper>
                <BCorpPostMediumWrapper>
                  {bcorpPosts.nodes.map(node => (
                    <Post
                      key={node.slug}
                      className="bcorp"
                      horizontal
                      post={node}
                    />
                  ))}
                </BCorpPostMediumWrapper>
                <BCorpPostLargeWrapper>
                  {bcorpPosts.nodes.slice(0, 1).map(node => (
                    <Post key={node.slug} horizontal post={node} />
                  ))}
                </BCorpPostLargeWrapper>
              </BcorpSectionWrapper>
            </BcorpSection>
            <EventSection title="Wydarzenia" to={`/wydarzenia`}>
              <EventSectionWrapper>
                {eventPosts.nodes.map(node => (
                  <Post key={node.slug} post={node} />
                ))}
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
        dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 910
                  quality: 76
                  placeholder: TRACED_SVG
                  formats: [AVIF, WEBP]
                )
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
        excerpt
        slug
        tags {
          nodes {
            name
            slug
          }
        }
        dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  quality: 76
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
        dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 380
                  quality: 70
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
    bcorpPosts: allWpPost(
      filter: {
        status: { eq: "publish" }
        categories: {
          nodes: { elemMatch: { name: { eq: "Teksty o B Corpach" } } }
        }
      }
      limit: 4
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        title
        subtitle {
          podtytul
        }
        excerpt
        slug
        tags {
          nodes {
            name
            slug
          }
        }
        dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  quality: 76
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
        excerpt
        slug
        tags {
          nodes {
            name
            slug
          }
        }
        dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  quality: 76
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
        excerpt
        slug
        dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, formats: [AVIF, WEBP])
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

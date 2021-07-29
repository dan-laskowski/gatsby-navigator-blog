import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Seo from "molecules/seo";
import Layout from "organisms/layout";
import AsideSection from "molecules/asideSection";
import Post from "molecules/post";
import ReactHtmlParser from "react-html-parser";
import PageSideNav from "molecules/pageSideNav";
import bcorpNavData from "data/bcorpNav";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 152px;
`;

const PageWrapper = styled.div`
  display: grid;
  max-width: 1645px;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 40px;
  grid-template-rows: auto;
  grid-template-areas: "l c c c c . n n";
  @media only screen and (max-width: 1730px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: 1240px) {
    column-gap: 30px;
  }
  @media only screen and (max-width: 760px) {
    column-gap: 24px;
    grid-template-areas: "l c c c c c . n";
  }
  @media only screen and (max-width: 620px) {
    column-gap: 24px;
    margin-left: 24px;
    margin-right: 24px;
    grid-template-areas:
      " n n n n n n n n "
      " c c c c c c c c ";
  }
`;

const PageContent = styled.main`
  margin-top: 82px;
  grid-column-start: c;
  grid-column-end: c;

  @media only screen and (max-width: 1240px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: 620px) {
    margin-top: 30px;
  }

  h1,
  h2 {
    font-family: ${({ theme }) => theme.font.heading.family};
    font-weight: bold;
    color: ${({ theme }) => theme.color.black};
  }
  h1 {
    font-size: 60px;
    line-height: 71px;
    margin-bottom: 46px;
    @media only screen and (max-width: 1240px) {
      font-size: 22px;
      line-height: 27px;
      margin-bottom: 22px;
    }
  }
  h2 {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 21px;
    @media only screen and (max-width: 1240px) {
      margin-bottom: 12px;
    }
    @media only screen and (max-width: 620px) {
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 9px;
    }
  }
  p {
    font-family: ${({ theme }) => theme.font.paragraph.family};
    color: ${({ theme }) => theme.color.gray};
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 30px;
    @media only screen and (max-width: 1240px) {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 12px;
    }
    @media only screen and (max-width: 620px) {
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 18px;
    }
    @media only screen and (max-width: 360px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
  p {
    span.alignnone {
      margin-bottom: 120px;
      @media only screen and (max-width: 1240px) {
        margin-bottom: 40px;
      }
    }
  }
  .gatsby-image-wrapper {
    max-width: 100% !important;
    margin-top: 88px;
    @media only screen and (max-width: 1240px) {
      margin-top: 30px;
    }
  }
  .wp-caption {
    max-width: 100% !important;
  }
  .wp-caption-text {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 110px;
    @media only screen and (max-width: 1240px) {
      margin-bottom: 40px;
    }
  }
`;

const Aside = styled.aside`
  grid-column-start: n;
  grid-column-end: n;
  grid-row-start: n;
`;

const LastPosts = styled(AsideSection)`
  grid-column-start: l;
  grid-column-end: n;
  @media only screen and (max-width: 1240px) {
    margin-bottom: 56px;
  }
  @media only screen and (max-width: 760px) {
    display: none;
    content-visibility: hidden;
  }
`;

const LastPostsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;

  .title {
    margin-bottom: 8px;
  }
  .subtitle {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    margin-bottom: 12px;
  }

  @media only screen and (max-width: 1240px) {
    .title {
      -webkit-line-clamp: 4;
    }
    .subtitle,
    .date {
      display: none;
      content-visibility: hidden;
    }
  }
`;

const CzymJestBCorp = () => {
  const { wpPage, allWpPost } = useStaticQuery(graphql`
    query MyQuery {
      wpPage(title: { eq: "Czym są B Corpy?" }) {
        title
        content
      }
      allWpPost(limit: 4, filter: { status: { eq: "publish" } }) {
        nodes {
          title
          slug
          excerpt
          dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 380
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
  `);
  return (
    <Layout>
      <Seo
        title="Czym jest B Corp? | Navigator"
        description="Dowiedz się czym jest B Corp"
      />
      <MainWrapper>
        <PageWrapper>
          <PageContent>{ReactHtmlParser(wpPage.content)}</PageContent>
          <Aside>
            <PageSideNav data={bcorpNavData} />
          </Aside>
          <LastPosts title="Ostatnie" to="/">
            <LastPostsContent>
              {allWpPost.nodes.map(node => (
                <Post post={node} />
              ))}
            </LastPostsContent>
          </LastPosts>
        </PageWrapper>
      </MainWrapper>
    </Layout>
  );
};

export default CzymJestBCorp;

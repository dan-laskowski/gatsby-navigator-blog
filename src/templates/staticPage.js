import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "molecules/seo";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";
import Content from "atoms/content";
import Post from "molecules/post";
import AsideSection from "molecules/asideSection";
import PageSideNav from "molecules/pageSideNav";
import Layout from "organisms/layout";

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

const PageContent = styled(Content)`
  margin-top: 82px;
  grid-column-start: c;
  grid-column-end: c;
  margin-bottom: 100px;

  @media only screen and (max-width: 1240px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: 620px) {
    margin-top: 30px;
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

const StaticPage = ({ meta, content, lastPosts, children, data }) => {
  const { allWpPost } = useStaticQuery(graphql`
    query LastPostQuery {
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
      <Seo title={`${meta.title} | Navigator`} description={meta.description} />
      <MainWrapper>
        <PageWrapper>
          <PageContent>
            {ReactHtmlParser(content)}
            {children}
          </PageContent>
          <Aside>
            <PageSideNav data={data} />
          </Aside>
          {lastPosts && (
            <LastPosts title="Ostatnie" to="/">
              <LastPostsContent>
                {allWpPost.nodes.map(node => (
                  <Post post={node} />
                ))}
              </LastPostsContent>
            </LastPosts>
          )}
        </PageWrapper>
      </MainWrapper>
    </Layout>
  );
};

export default StaticPage;

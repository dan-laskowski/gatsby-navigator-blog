import React from "react";
import styled from "styled-components";
import Seo from "molecules/seo";
import { graphql } from "gatsby";
import { document } from "browser-monads";
import ProgressBar from "react-scroll-progress-bar";
import ReactHtmlParser from "react-html-parser";
import Button from "atoms/button";
import Aside from "organisms/aside";
import AsideSection from "molecules/asideSection";
import Post from "molecules/post";
import Commercial from "atoms/commercial";
import NewsletterSmall from "molecules/newsletterSmall";
import Layout from "organisms/layout";
import ArticleTitle from "organisms/articleTitle";
import Meta from "organisms/meta";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 152px;
  @media only screen and (max-width: 850px) {
    padding-top: 136px;
  }
  @media only screen and (max-width: 616px) {
    padding-top: 94px;
  }
`;
const PageWrapper = styled.div`
  display: grid;
  max-width: 1645px;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  grid-template-rows: auto;
  grid-template-areas: "m c c a";
  .meta {
    grid-area: m;
  }
  @media only screen and (max-width: 1745px) {
    margin-left: 30px;
    margin-right: 30px;
  }

  @media only screen and (max-width: 670px) {
    grid-template-columns: repeat(6, 1fr);
    column-gap: 24px;
    grid-template-areas: "c c c c c c";
    margin-left: 24px;
    margin-right: 24px;
  }
`;
const ArticleContent = styled.div`
  grid-area: c;
  font-family: ${({ theme }) => theme.font.paragraph.family};
  font-weight: ${({ theme }) => theme.font.paragraph.weight};
  font-style: ${({ theme }) => theme.font.paragraph.weight};
  font-size: 20px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.navy};
  overflow-wrap: break-word;

  div,
  p {
    margin-right: 21px;
    margin-bottom: 46px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${({ theme }) => theme.font.heading.weight};
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 40px;
  }
  blockquote {
    p {
      font-family: ${({ theme }) => theme.font.quote.family};
      font-weight: ${({ theme }) => theme.font.quote.weight};
      font-style: ${({ theme }) => theme.font.quote.style};
      font-size: ${({ theme }) => theme.font.quote.size};
      color: ${({ theme }) => theme.color.navy};
      line-height: 54px;
      margin-bottom: 50px;
      padding-top: 30px;
    }
    ::before {
      display: block;
      content: "";
      border-top: 10px solid ${({ theme }) => theme.color.orange};
      width: 20%;
    }
  }

  ol,
  ul {
    list-style-position: outside;
    margin: 0 25px;
    margin-bottom: 56px;
  }
  ol {
    list-style-type: decimal;
  }
  ul {
    list-style-type: disc;
  }
  ol li {
    margin-bottom: 39px;
    padding-left: 10px;
  }
  ul li {
    margin-bottom: 30px;
  }

  strong {
    font-weight: ${({ theme }) => theme.font.sectionName.weight};
  }

  em {
    font-style: italic;
  }
  a {
    color: ${({ theme }) => theme.color.orange};
    text-decoration: underline;
  }
  ::after {
    display: block;
    content: "";
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    width: 33%;
    transform: translateX(100%);
    margin-bottom: 30px;
  }

  .wp-caption {
    margin: 70px auto;
    width: 100% !important;
    max-width: 100%;
  }
  .gatsby-image-wrapper {
    display: block;
    margin-bottom: 10px !important;
  }
  .wp-caption-text {
    font-family: ${({ theme }) => theme.font.tag.family};
    font-weight: ${({ theme }) => theme.font.tag.weight};
    font-style: ${({ theme }) => theme.font.tag.style};
    color: ${({ theme }) => theme.color.gray};
    font-size: 12px;
    line-height: 22px;
    margin-right: 0;
  }
  .aligncenter {
    .gatsby-image-wrapper {
      margin: 0 auto;
    }
  }
  .alignleft,
  .alignnone {
    .gatsby-image-wrapper {
      margin-left: 0;
    }
  }
  .alignright {
    .gatsby-image-wrapper {
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 1180px) {
    margin-bottom: 56px;
    div,
    p {
      font-size: 16px;
      line-height: 26px;
      margin-right: 0;
      margin-bottom: 20px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 21px;
    }
    blockquote {
      p {
        font-size: 26px;
        line-height: 28px;
        padding-top: 20px;
        margin-bottom: 26px;
      }
      ::before {
        width: 16%;
        margin-top: 42px;
      }
    }

    ol,
    ul {
      font-size: 16px;
      line-height: 26px;
      margin: 0 25px;
      margin-bottom: 24px;
    }
    ol li {
      margin-bottom: 17px;
      padding-left: 10px;
    }
    ul li {
      margin-bottom: 30px;
    }
    ::after {
      display: none;
    }

    .wp-caption {
      margin: 32px auto;
      width: 100% !important;
      max-width: 100%;
    }
    .gatsby-image-wrapper {
      display: block;
      margin-bottom: 8px !important;
    }
    .wp-caption-text {
      font-size: 12px;
      line-height: 15px;
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 670px) {
    div,
    p {
      margin-bottom: 50px;
    }
    blockquote {
      p {
        margin-bottom: 32px;
      }
      ::before {
        width: 16%;
        margin-top: 32px;
      }
    }
    ul li {
      margin-bottom: 12px;
    }
    ol li {
      margin-bottom: 15px;
      padding-left: 10px;
    }
    .wp-caption {
      margin: 22px auto;
    }

    .wp-caption-text {
      margin-bottom: 0;
    }
  }
`;
const ArticleAside = styled(Aside)`
  grid-area: a;
  margin-top: -19px;
  .raport,
  .form-section {
    display: none;
    content-visibility: hidden;
  }
  @media only screen and (max-width: 670px) {
    display: none;
    content-visibility: hidden;
  }
`;
const StyledButton = styled(Button)`
  width: 200px;
  margin: 0 auto;
  display: block;
  margin-bottom: 68px;
`;
const AsidePost = styled(Post)`
  .article {
    grid-template-columns: 1fr 110px;
    column-gap: 26px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
    border: none;
  }
  .category {
    margin-top: 0;
    margin-bottom: 8px;
  }
  .title {
    font-size: 20px;
    line-height: 24px;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .image-wrapper {
    padding-top: 100%;
    /* aspect-ratio: 1/1;
    height: 110px; */
  }
  .date {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 1380px) {
    .article {
      grid-template-columns: 1fr;
    }
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
const BottomNewsletterSmall = styled(NewsletterSmall)`
  width: 100%;
`;

const WpPostTemplate = ({ data: { wpPost, asideQuery } }) => {
  return (
    <>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
      <Seo
        title={`${wpPost.title} | Navigator`}
        description={wpPost.excerpt}
        image={wpPost.featuredImage.node.mediaItemUrl}
      />
      <Layout>
        <ProgressBar bgcolor="#F0773B" />
        <MainWrapper>
          <ArticleTitle wpPost={wpPost} />
          <PageWrapper>
            <Meta
              author={wpPost.author.node.name}
              date={wpPost.dateGmt}
              tags={wpPost.tags}
              title={wpPost.title}
              url={document.URL}
            />
            <ArticleContent>
              {ReactHtmlParser(wpPost.content)}
              {!!wpPost.raport.raportfile && (
                <StyledButton
                  target="_blank"
                  rel="noreferrer"
                  text="Pobierz raport"
                  uri={wpPost.raport.raportfile.mediaItemUrl}
                />
              )}
              <Commercial />
            </ArticleContent>
            <ArticleAside>
              <AsideSection title="ostatnie" to={`/`}>
                {asideQuery.nodes.map(node => (
                  <AsidePost horizontal post={node} />
                ))}
              </AsideSection>
            </ArticleAside>
          </PageWrapper>

          <BottomNewsletterSmall />
        </MainWrapper>
      </Layout>
    </>
  );
};

export const query = graphql`
  query PostQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      subtitle {
        podtytul
        kolorTlaTytulu
      }
      featuredImage {
        node {
          description
          mediaItemUrl
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 960
                quality: 70
                placeholder: BLURRED
                formats: [AUTO, AVIF, WEBP]
              )
            }
          }
        }
      }
      slug
      author {
        node {
          name
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
      raport {
        raportfile {
          title
          mediaItemUrl
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      excerpt
      content
      dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
    }
    asideQuery: allWpPost(limit: 3) {
      nodes {
        title
        slug
        dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 260
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
`;

export default WpPostTemplate;

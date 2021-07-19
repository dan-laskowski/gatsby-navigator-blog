import React from "react";
import styled from "styled-components";
import Seo from "molecules/seo";
import { graphql, Link } from "gatsby";
import Date from "atoms/date";
import Category from "atoms/category";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProgressBar from "react-scroll-progress-bar";
import ReactHtmlParser from "react-html-parser";
import { Heading, Subheading } from "atoms/heading";
import Button from "atoms/button";
import Aside from "organisms/aside";
import AsideSection from "molecules/asideSection";
import Post from "molecules/post";
import TagBox from "molecules/tagBox";
import Layout from "organisms/layout";
import facebook from "assets/images/facebook.svg";
import twitter from "assets/images/twitter.svg";
import linkedin from "assets/images/linkedin.svg";

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
  grid-template-areas:
    "d d d d"
    "m c c a";
  .article-image-description {
    grid-area: d;
    grid-row-start: 1;
    font-family: ${({ theme }) => theme.font.subheading.family};
    color: ${({ theme }) => theme.color.gray};
    font-size: 12px;
    line-height: 14px;
    margin-top: 12px;
    margin-bottom: 90px;
  }
  @media only screen and (max-width: 1745px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: 1180px) {
    .article-image-description {
      font-size: 11px;
      line-height: 13px;
      margin-bottom: 32px;
    }
  }
`;

const MainSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "t i";
  column-gap: 30px;
  background: ${({ background }) => background};
  overflow: hidden;

  .article-title {
    padding-left: calc((100vw - 1645px) / 2);
    padding-right: 10%;
    min-height: 640px;
    grid-area: t;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .category,
    h1,
    h2 {
      color: ${({ theme }) => theme.color.offWhite};
    }
    .category {
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 12px;
    }
    h1 {
      font-size: 60px;
      line-height: 65px;
      margin-bottom: 14px;
      margin-top: 0;
    }
    h2 {
      font-size: 24px;
      line-height: 38px;
    }
  }
  .article-image {
    grid-area: i;
    .gatsby-image-wrapper {
      width: 100%;
      overflow: hidden;
      object-fit: cover;
      height: 100%;
    }
  }
  @media only screen and (max-width: 1720px) {
    .article-title {
      margin-left: 30px;
      margin-right: 30px;
    }
  }
  @media only screen and (max-width: 1520px) {
    .article-title {
      min-height: 500px;
    }
    .article-title h1 {
      font-size: 50px;
      line-height: 55px;
    }
    .article-title h2 {
      font-size: 20px;
      line-height: 30px;
    }
  }
  @media only screen and (max-width: 1180px) {
    .article-title {
      min-height: 360px;
    }
    .category {
      margin-bottom: 6px;
    }
    .article-title h1 {
      font-size: 26px;
      line-height: 30px;
    }
    .article-title h2 {
      font-size: 16px;
      line-height: 18px;
    }
  }
`;

const MetaSection = styled.section`
  grid-area: m;
  .author {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.gray};
    margin-bottom: 12px;
  }
  .date {
    font-size: 12px;
    margin-bottom: 32px;
  }
  .author,
  .date {
    font-family: ${({ theme }) => theme.font.heading.family};
    line-height: 22px;
  }
  .socials {
    display: flex;
    max-width: 145px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 58px;
  }
  .tags {
    max-width: 232px;
  }
  @media only screen and (max-width: 1180px) {
    .author {
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 8px;
    }
    .date {
      margin-bottom: 20px;
    }
    .socials {
      max-width: 118px;
      margin-bottom: 14px;
    }
  }
`;

// const HeadingSection = styled.section`
//   padding-top: 152px;
//   @media only screen and (max-width: 850px) {
//     padding-top: 136px;
//   }
//   @media only screen and (max-width: 616px) {
//     padding-top: 94px;
//   }
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   margin: 0 auto;
//   margin-bottom: 140px;
//   max-width: 1920px;
// `;
// const ArticleInfo = styled.div`
//   background: ${({ background }) => background};
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
// const HeadingWrapper = styled.div`
//   margin-left: 10%;
//   margin-right: 10%;
// `;
// const CategoryName = styled(Link)`
//   font-family: ${({ theme }) => theme.font.tag.family};
//   font-weight: ${({ theme }) => theme.font.tag.weight};
//   font-style: ${({ theme }) => theme.font.tag.weight};
//   font-size: ${({ theme }) => theme.font.tag.size};
//   color: ${({ theme }) => theme.color.offWhite};
//   text-transform: uppercase;
//   margin-left: 2px;
// `;
// const StyledHeading = styled(Heading)`
//   font-size: ${({ theme }) => theme.font.heading.size};
//   color: ${({ theme }) => theme.color.offWhite};
//   text-transform: uppercase;
//   margin-top: 10px;
//   margin-bottom: 20px;
// `;
// const StyledSubheading = styled(Subheading)`
//   font-size: ${({ theme }) => theme.font.subheading.size};
//   color: ${({ theme }) => theme.color.offWhite};
//   line-height: 38px;
// `;
// const FeaturedImg = styled.div`
//   overflow: hidden;
//   .gatsby-image-wrapper {
//     width: 100%;
//     overflow: hidden;
//     object-fit: cover;
//     height: 100%;
//   }
// `;
// const ArticleMain = styled.div`
//   display: grid;
//   max-width: 1645px;
//   margin: 0 auto;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 40px;
//   grid-template-rows: auto;
// `;
// const MetaSection = styled.div`
//   grid-column-start: 1;
//   grid-column-end: 2;
// `;
// const AuthorName = styled.p`
//   font-family: ${({ theme }) => theme.font.sectionName.family};
//   font-weight: ${({ theme }) => theme.font.sectionName.weight};
//   font-style: ${({ theme }) => theme.font.sectionName.weight};
//   font-size: 16px;
//   color: ${({ theme }) => theme.color.gray};
//   margin-bottom: 20px;
// `;
// const StyledDate = styled.p`
//   font-family: ${({ theme }) => theme.font.heading.family};
//   font-size: 12px;
//   line-height: 22px;
//   margin-bottom: 31px;
//   color: ${({ theme }) => theme.color.gray};
// `;
// const Socials = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 144px;
//   margin-bottom: 60px;
// `;
// const SocialIcon = styled.a`
//   display: block;
//   img {
//     width: 22px;
//     height: 22px;
//   }
// `;
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
      font-size: 14px;
      line-height: 18px;
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
        font-size: 22px;
        color: ${({ theme }) => theme.color.navy};
        line-height: 25px;
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
      font-size: 14px;
      line-height: 18px;
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
      font-size: 11px;
      line-height: 13px;
      margin-right: 0;
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

const WpPostTemplate = ({ data: { wpPost, asideQuery } }) => {
  const handleCategoryNode = post =>
    !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;
  const image = getImage(wpPost.featuredImage.node.localFile);
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
        <MainWrapper>
          <MainSection background={wpPost.subtitle.kolorTlaTytulu}>
            <div className="article-title">
              <Category
                className="category"
                name={wpPost.categories.nodes[handleCategoryNode(wpPost)].name}
                slug={wpPost.categories.nodes[handleCategoryNode(wpPost)].slug}
              />
              <Heading text={wpPost.title} />
              <Subheading text={wpPost.subtitle.podtytul} />
            </div>
            <div className="article-image">
              <GatsbyImage
                image={image}
                alt={wpPost.featuredImage.altText || ``}
              />
            </div>
          </MainSection>
          <PageWrapper>
            <MetaSection>
              <p className="author">{wpPost.author.node.name}</p>
              <Date className="date" date={wpPost.dateGmt} />
              <section className="socials">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.SITE_URL}${wpPost.slug}`}
                >
                  <img src={facebook} alt="ikona facebooka" />
                </a>
                <a
                  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                  className="twitter-share-button"
                  data-text={wpPost.title}
                  data-dnt="true"
                  data-url={`${process.env.SITE_URL}/${wpPost.slug}`}
                  data-show-count="false"
                  data-lang="pl"
                >
                  <img src={twitter} alt="ikona twittera" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.SITE_URL}${wpPost.slug}`}
                >
                  <img src={linkedin} alt="ikona linkedina" />
                </a>
              </section>
              <section className="tags">
                <TagBox tags={wpPost.tags} />
              </section>
            </MetaSection>
            <div className="article-image-description">
              {ReactHtmlParser(wpPost.featuredImage.node.description)}
            </div>

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
            </ArticleContent>
            <ArticleAside>
              <AsideSection title="ostatnie" to={`/`}>
                {asideQuery.nodes.map(node => (
                  <AsidePost horizontal post={node} />
                ))}
              </AsideSection>
            </ArticleAside>
          </PageWrapper>
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

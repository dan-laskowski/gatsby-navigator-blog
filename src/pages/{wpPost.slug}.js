import React from "react";
import styled from "styled-components";
import Seo from "molecules/seo";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProgressBar from "react-scroll-progress-bar";
import ReactHtmlParser from "react-html-parser";
import { Heading, Subheading } from "atoms/heading";
import Button from "atoms/button";
import Date from "atoms/date";
import Aside from "organisms/aside";
import AsideSection from "molecules/asideSection";
import Post from "molecules/post";
import TagBox from "molecules/tagBox";
import Layout from "organisms/layout";
import facebook from "assets/images/facebook.svg";
import twitter from "assets/images/twitter.svg";
import linkedin from "assets/images/linkedin.svg";

const ArticleWrapper = styled.article``;

const HeadingSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  margin-bottom: 140px;
  max-width: 1920px;
`;
const ArticleInfo = styled.div`
  background: ${({ background }) => background};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeadingWrapper = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;
const CategoryName = styled(Link)`
  font-family: ${({ theme }) => theme.font.tag.family};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  font-style: ${({ theme }) => theme.font.tag.weight};
  font-size: ${({ theme }) => theme.font.tag.size};
  color: ${({ theme }) => theme.color.offWhite};
  text-transform: uppercase;
  margin-left: 2px;
`;
const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.font.heading.size};
  color: ${({ theme }) => theme.color.offWhite};
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const StyledSubheading = styled(Subheading)`
  font-size: ${({ theme }) => theme.font.subheading.size};
  color: ${({ theme }) => theme.color.offWhite};
  line-height: 38px;
`;
const FeaturedImg = styled.div`
  overflow: hidden;
  .gatsby-image-wrapper {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    height: 100%;
  }
`;
const ArticleMain = styled.div`
  display: grid;
  max-width: 1645px;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  grid-template-rows: auto;
`;
const MetaSection = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;
const AuthorName = styled.p`
  font-family: ${({ theme }) => theme.font.sectionName.family};
  font-weight: ${({ theme }) => theme.font.sectionName.weight};
  font-style: ${({ theme }) => theme.font.sectionName.weight};
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray};
  margin-bottom: 20px;
`;
const StyledDate = styled.p`
  font-family: ${({ theme }) => theme.font.heading.family};
  font-size: 12px;
  line-height: 22px;
  margin-bottom: 31px;
  color: ${({ theme }) => theme.color.gray};
`;
const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 144px;
  margin-bottom: 60px;
`;
const SocialIcon = styled.a`
  display: block;
  img {
    width: 22px;
    height: 22px;
  }
`;
const ArticleContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
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
  [class~="wp-caption"]:nth-of-type(3) {
    grid-column: 1/5;
    .gatsby-image-wrapper {
    }
  }
`;
const StyledButton = styled(Button)`
  width: 200px;
  margin: 0 auto;
  display: block;
  margin-bottom: 68px;
`;
const StyledAside = styled(Aside)`
  grid-column-start: 4;
  grid-column-end: 5;
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
        <ArticleWrapper>
          <HeadingSection>
            <ArticleInfo background={wpPost.subtitle.kolorTlaTytulu}>
              <ProgressBar bgcolor="#F07539" />
              <HeadingWrapper>
                <CategoryName
                  to={`/${
                    wpPost.categories.nodes[handleCategoryNode(wpPost)].slug
                  }`}
                >
                  {wpPost.categories.nodes[handleCategoryNode(wpPost)].name}
                </CategoryName>
                <StyledHeading text={wpPost.title} />
                <StyledSubheading text={wpPost.subtitle.podtytul} />
              </HeadingWrapper>
            </ArticleInfo>
            <FeaturedImg>
              <GatsbyImage
                image={image}
                alt={wpPost.featuredImage.altText || ``}
              />
            </FeaturedImg>
          </HeadingSection>
          <ArticleMain>
            <MetaSection>
              <AuthorName>{wpPost.author.node.name}</AuthorName>
              <StyledDate>{wpPost.dateGmt}</StyledDate>
              <Socials>
                <SocialIcon
                  href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.SITE_URL}${wpPost.slug}`}
                >
                  <img src={facebook} alt="facebook logo" />
                </SocialIcon>
                <SocialIcon>
                  <a
                    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                    className="twitter-share-button"
                    data-text={wpPost.title}
                    data-dnt="true"
                    data-url={`${process.env.SITE_URL}/${wpPost.slug}`}
                    data-show-count="false"
                    data-lang="pl"
                  >
                    <img src={twitter} alt="twitter logo" />
                  </a>
                </SocialIcon>
                <SocialIcon
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.SITE_URL}${wpPost.slug}`}
                >
                  <img src={linkedin} alt="linkedin logo" />
                </SocialIcon>
              </Socials>
              <div>
                <TagBox tags={wpPost.tags} />
              </div>
            </MetaSection>
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
            <StyledAside>
              <AsideSection title="ostatnie" to={`/`}>
                {asideQuery.nodes.map(node => (
                  <AsidePost horizontal post={node} />
                ))}
              </AsideSection>
            </StyledAside>
          </ArticleMain>
        </ArticleWrapper>
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

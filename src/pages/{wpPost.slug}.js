import React, { useState } from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import ProgressBar from "react-scroll-progress-bar";
import ReactHtmlParser from "react-html-parser";
import { Heading, Subheading } from "atoms/heading";
import AsideSection from "molecules/asideSection";
import PostSmall from "molecules/postSmall";
import TagBox from "molecules/tagBox";
import Layout from "organisms/layout";
import facebook from "assets/images/facebook.svg";
import twitter from "assets/images/twitter.svg";
import share from "assets/images/share.svg";

const ArticleWrapper = styled.article``;

const HeadingSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  margin-bottom: 140px;
  max-width: 1920px;
`;

const ArticleInfo = styled.div`
  background: ${({ theme }) => theme.color.navy};
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
  img {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    height: 100%;
  }
`;

const ArticleMain = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, 122px);
  column-gap: 16px;
  grid-template-rows: auto;
  grid-template-areas: "meta meta . content content content content content content aside aside aside";
`;

const MetaSection = styled.div`
  grid-area: meta;
`;

const AuthorName = styled.p`
  font-family: ${({ theme }) => theme.font.sectionName.family};
  font-weight: ${({ theme }) => theme.font.sectionName.weight};
  font-style: ${({ theme }) => theme.font.sectionName.weight};
  font-size: ${({ theme }) => theme.font.sectionName.size};
  color: ${({ theme }) => theme.color.gray};
  margin-bottom: 20px;
`;

const Date = styled.p`
  font-family: ${({ theme }) => theme.font.tag.family};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  font-style: ${({ theme }) => theme.font.tag.weight};
  font-size: 20px;
  color: ${({ theme }) => theme.color.gray};
  margin-bottom: 30px;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 144px;
  margin-bottom: 80px;
`;

const SocialIcon = styled.a`
  display: block;
  img {
    width: 22px;
    height: 22px;
  }
`;

const ArticleContent = styled.div`
  grid-area: content;
  p {
    font-family: ${({ theme }) => theme.font.paragraph.family};
    font-weight: ${({ theme }) => theme.font.paragraph.weight};
    font-style: ${({ theme }) => theme.font.paragraph.weight};
    font-size: ${({ theme }) => theme.font.paragraph.size};
    line-height: 39px;
    color: ${({ theme }) => theme.color.gray};
    margin-right: 21px;
    margin-bottom: 46px;
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
  ::after {
    display: block;
    content: "";
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    width: 33%;
    transform: translateX(100%);
    margin-bottom: 30px;
  }
`;

const Aside = styled.div`
  grid-area: aside;
`;

const WpPostTemplate = ({ data: { wpPost, allWpTag, allWpPost } }) => {
  const handleCategoryNode = post =>
    !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;

  return (
    <>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
      <Helmet>
        <title>{wpPost.title}</title>
        <meta name="description" content={wpPost.excerpt} />
      </Helmet>
      <Layout>
        <ArticleWrapper>
          <HeadingSection>
            <ArticleInfo>
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
              <img
                srcSet={wpPost.featuredImage.node.srcSet}
                alt={wpPost.featuredImage.altText}
              />
            </FeaturedImg>
          </HeadingSection>
          <ArticleMain>
            <MetaSection>
              <AuthorName>{wpPost.author.node.name}</AuthorName>
              <Date>{wpPost.dateGmt}</Date>
              <Socials>
                <SocialIcon
                  href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.SITE_URL}${wpPost.slug}`}
                >
                  <img src={facebook} />
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
                    <img src={twitter} />
                  </a>
                </SocialIcon>
                <SocialIcon>
                  <img src={share} />
                </SocialIcon>
              </Socials>
              <div>
                <TagBox tags={wpPost.tags} />
              </div>
            </MetaSection>
            <ArticleContent>{ReactHtmlParser(wpPost.content)}</ArticleContent>
            <Aside>
              <AsideSection title="tagi">
                <div>
                  <TagBox tags={allWpTag} />
                </div>
              </AsideSection>
              <AsideSection title="ostatnie">
                {allWpPost.nodes.map(node => (
                  <PostSmall
                    key={node.title}
                    title={node.title}
                    category={node.categories.nodes[handleCategoryNode(node)]}
                    tags={node.tags}
                    img={node.featuredImage}
                    slug={node.slug}
                  />
                ))}
              </AsideSection>
            </Aside>
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
      }
      featuredImage {
        node {
          srcSet
          altText
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
      tags {
        nodes {
          name
          slug
        }
      }
      excerpt
      content
      dateGmt(locale: "pl", formatString: "d MMMM yyyy")
    }
    allWpTag {
      nodes {
        name
        slug
      }
    }
    allWpPost(filter: { id: { ne: $id } }, limit: 3) {
      nodes {
        title
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

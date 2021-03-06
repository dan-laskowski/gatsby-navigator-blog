import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { document } from "browser-monads";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Category from "atoms/category";
import { Heading, Subheading } from "atoms/heading";
import Meta from "organisms/meta";

const ArticleTitleWrapper = styled.section`
  width: 100%;
`;
const ArticleTitleContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "t i";
  column-gap: 30px;
  overflow: hidden;
  background: ${({ background }) => background};
  @media only screen and (max-width: 670px) {
    background: none;
    grid-template-columns: 1fr;
    column-gap: 24px;
    grid-template-areas:
      "t"
      "i";
    margin-top: 44px;
  }
`;
const TextContainer = styled.div`
  padding-left: calc((100vw - 1645px) / 2);
  padding-right: 10%;
  min-height: 33vw;
  grid-area: t;
  display: flex;
  flex-direction: column;
  justify-content: center;
  * {
    color: ${({ theme }) => theme.color.offWhite};
  }
  @media only screen and (max-width: 1720px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: 1520px) {
    min-height: 40vw;
  }
  @media only screen and (max-width: 1180px) {
    min-height: 300px;
  }
  @media only screen and (max-width: 710px) {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  @media only screen and (max-width: 670px) {
    padding-left: 0;
    padding-right: 0;
    margin-left: 24px;
    margin-right: 24px;
    min-height: 0px;
    margin-bottom: 18px;
    * {
      color: ${({ theme }) => theme.color.black};
    }
  }
`;
const ArticleCategory = styled(Category)`
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 12px;
  @media only screen and (max-width: 670px) {
    margin-bottom: 4px;
  }
`;
const ArticleTitle = styled(Heading)`
  font-size: clamp(26px, 6.4vw - 1.6rem, 60px);
  line-height: clamp(30px, 6.4vw - 1.6rem, 65px);
  margin-bottom: 14px;
  margin-top: 0;
`;
const ArticleSubtitle = styled(Subheading)`
  font-size: clamp(16px, 1.5vw, 24px);
  line-height: clamp(19px, 1.5vw, 38px);
  font-weight: 300;
  margin-bottom: 0;
`;
const MobileMeta = styled(Meta)`
  display: none;
  content-visibility: hidden;
  @media only screen and (max-width: 670px) {
    display: block;
    content-visibility: visible;
    margin: 0 24px 30px 24px;
    .content {
      max-width: unset;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
const ImageContainer = styled.div`
  .gatsby-image-wrapper {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    height: 100%;
  }
`;
const ArticleImageDescription = styled.caption`
  display: block;
  font-family: ${({ theme }) => theme.font.subheading.family};
  color: ${({ theme }) => theme.color.gray};
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  margin-top: 12px;
  margin-bottom: 90px;
  padding-left: calc((100vw - 1645px) / 2);
  @media only screen and (max-width: 1720px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: 670px) {
    margin-bottom: 22px;
  }
`;

const ArticleTitleSection = ({ wpPost }) => {
  const image = getImage(wpPost.featuredImage.node.localFile);
  const handleCategoryNode = post =>
    !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;
  return (
    <ArticleTitleWrapper>
      <ArticleTitleContent background={wpPost.subtitle.kolorTlaTytulu}>
        <TextContainer>
          <ArticleCategory
            name={wpPost.categories.nodes[handleCategoryNode(wpPost)].name}
            slug={wpPost.categories.nodes[handleCategoryNode(wpPost)].slug}
          />
          <ArticleTitle text={wpPost.title} />
          <ArticleSubtitle text={wpPost.subtitle.podtytul} />
        </TextContainer>
        <MobileMeta
          author={wpPost.author.node.name}
          date={wpPost.dateGmt}
          tags={wpPost.tags}
          title={wpPost.title}
          url={document.URL}
        />
        <ImageContainer>
          <GatsbyImage image={image} alt={wpPost.featuredImage.altText || ``} />
        </ImageContainer>
      </ArticleTitleContent>
      <ArticleImageDescription>
        {ReactHtmlParser(wpPost.featuredImage.node.description)}
      </ArticleImageDescription>
    </ArticleTitleWrapper>
  );
};

export default ArticleTitleSection;

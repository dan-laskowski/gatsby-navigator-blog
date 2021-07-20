import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
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
    grid-template-areas:
      "t"
      "i";
    margin-top: 44px;
  }
`;
const TextContainer = styled.div`
  padding-left: calc((100vw - 1645px) / 2);
  padding-right: 10%;
  max-height: 640px;
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
    min-height: 280px;
  }
  @media only screen and (max-width: 670px) {
    * {
      color: ${({ theme }) => theme.color.black};
    }
  }
`;
const ArticleCategory = styled(Category)`
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 12px;
`;
const ArticleTitle = styled(Heading)`
  font-size: 60px;
  line-height: 65px;
  margin-bottom: 14px;
  margin-top: 0;
  @media only screen and (max-width: 1520px) {
    font-size: 3.2vw;
    line-height: 4.2vw;
  }
  @media only screen and (max-width: 1180px) {
    font-size: 3vw;
    line-height: 3.4vw;
  }
  @media only screen and (max-width: 670px) {
    font-size: 9vw;
    line-height: 8.4vw;
    margin-bottom: 18px;
  }
`;
const ArticleSubtitle = styled(Subheading)`
  font-size: 24px;
  line-height: 38px;
  @media only screen and (max-width: 1520px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media only screen and (max-width: 1180px) {
    font-size: 1.6vw;
    line-height: 2.2vw;
  }
  @media only screen and (max-width: 670px) {
    font-size: 2.4vw;
    line-height: 3.4vw;
  }
`;
const MobileMeta = styled(Meta)`
  display: none;
  content-visibility: hidden;
  @media only screen and (max-width: 670px) {
    display: block;
    content-visibility: visible;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
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

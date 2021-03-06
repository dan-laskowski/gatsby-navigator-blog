import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Category from "atoms/category";
import { Heading, Subheading } from "atoms/heading";
import Date from "atoms/date";
import truncate from "utils/truncate";

const PostWrapper = styled.article`
  overflow: hidden;
  display: ${({ horizontal }) => (horizontal ? `grid` : `flex`)};
  flex-direction: ${({ horizontal }) => (horizontal ? `unset` : `column`)};
  grid-template-columns: ${({ horizontal }) =>
    horizontal ? `1fr 1.02fr` : `unset`};
  column-gap: ${({ horizontal }) => (horizontal ? `120px` : `unset`)};
  border-bottom: ${({ horizontal, theme }) =>
    horizontal ? `1px solid ${theme.color.lightGray}` : `unset`};
  /* padding-top: ${({ horizontal }) => (horizontal ? `28px` : `unset`)}; */
  padding-bottom: ${({ horizontal }) => (horizontal ? `28px` : `unset`)};

  @media only screen and (max-width: 1380px) {
    column-gap: ${({ horizontal }) => (horizontal ? `60px` : `unset`)};
    grid-template-columns: ${({ horizontal }) =>
      horizontal ? `1fr 1.4fr` : `unset`};
  }
  @media only screen and (max-width: 930px) {
    grid-template-columns: ${({ horizontal }) =>
      horizontal ? `1.5fr 1.7fr` : `unset`};
    column-gap: ${({ horizontal }) => (horizontal ? `30px` : `unset`)};
  }
  @media only screen and (max-width: 600px) {
    padding-top: ${({ horizontal }) => (horizontal ? `20px` : `10px`)};
    padding-bottom: ${({ horizontal }) => (horizontal ? `20px` : `20px`)};
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    column-gap: ${({ horizontal }) => (horizontal ? `46px` : `unset`)};
    grid-template-columns: ${({ horizontal }) =>
      horizontal ? `2fr 1.02fr` : `unset`};
  }
  @media only screen and (max-width: 400px) {
    column-gap: ${({ horizontal }) => (horizontal ? `20px` : `unset`)};
    grid-template-columns: ${({ horizontal }) =>
      horizontal ? `1fr 100px` : `unset`};
  }
  .category {
    margin-top: ${({ horizontal }) => (horizontal ? `0` : `10px`)};
    @media only screen and (max-width: 1180px) {
      margin-bottom: 4px;
    }
    @media only screen and (max-width: 600px) {
      margin-bottom: 6px;
    }
  }
`;
const Text = styled.section`
  grid-area: ${({ horizontal }) => (horizontal ? 1 : `unset`)};
`;
const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;

  @media only screen and (max-width: 720px) {
    padding-top: ${({ horizontal }) => (horizontal ? `56.25%` : `56.25%`)};
  }
  @media only screen and (max-width: 600px) {
    padding-top: ${({ horizontal }) => (horizontal ? `50%` : `56.25%`)};
  }
`;
const Thumbnail = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  grid-column-start: ${({ horizontal }) => (horizontal ? 2 : `unset`)};
  grid-column-end: ${({ horizontal }) => (horizontal ? 3 : `unset`)};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const PostTitle = styled(Heading)`
  font-size: ${({ horizontal }) => (horizontal ? `24px` : `24px`)};
  line-height: ${({ horizontal }) => (horizontal ? `29px` : `29px`)};
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: ${({ horizontal }) => (horizontal ? `0` : `unset`)};

  @media only screen and (max-width: 1380px) {
    font-size: ${({ horizontal }) => (horizontal ? `24px` : `18px`)};
    line-height: ${({ horizontal }) => (horizontal ? `27px` : `20px`)};
  }
  @media only screen and (max-width: 1100px) {
    font-size: ${({ horizontal }) => (horizontal ? `18px` : `unset`)};
    line-height: ${({ horizontal }) => (horizontal ? `20px` : `unset`)};
  }
  @media only screen and (max-width: 930px) {
    -webkit-line-clamp: ${({ horizontal }) => (horizontal ? 2 : 3)};
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({ horizontal }) => (horizontal ? `14px` : `20px`)};
    line-height: ${({ horizontal }) => (horizontal ? `17px` : `24px`)};
    -webkit-line-clamp: 4;
    margin-bottom: 10px;
  }
`;
const PostSubtitle = styled(Subheading)`
  font-size: ${({ horizontal }) => (horizontal ? `20px` : `15px`)};
  font-weight: 300;
  line-height: ${({ horizontal }) => (horizontal ? `25px` : `20px`)};
  -webkit-line-clamp: ${({ horizontal }) => (horizontal ? 4 : 4)};
  overflow: hidden;

  @media only screen and (max-width: 1380px) {
    font-size: ${({ horizontal }) => (horizontal ? `17px` : `13px`)};
    line-height: ${({ horizontal }) => (horizontal ? `24px` : `16px`)};
    margin-bottom: ${({ horizontal }) => (horizontal ? `14px` : `19px`)};
    -webkit-line-clamp: ${({ horizontal }) => (horizontal ? 5 : 4)};
  }
  @media only screen and (max-width: 1200px) {
    -webkit-line-clamp: ${({ horizontal }) => (horizontal ? 4 : 4)};
  }
  @media only screen and (max-width: 1100px) {
    font-size: ${({ horizontal }) => (horizontal ? `12px` : `unset`)};
    line-height: ${({ horizontal }) => (horizontal ? `17px` : `unset`)};
    -webkit-line-clamp: ${({ horizontal }) => (horizontal ? 5 : 5)};
  }
  @media only screen and (max-width: 600px) {
    display: ${({ horizontal }) => (horizontal ? `none` : `-webkit-box`)};
    font-size: ${({ horizontal }) => (horizontal ? `unset` : `16px`)};
    line-height: ${({ horizontal }) => (horizontal ? `unset` : `20px`)};
    -webkit-line-clamp: ${({ horizontal }) => (horizontal ? `unset` : 2)};
    line-clamp: ${({ horizontal }) => (horizontal ? `unset` : 2)};
  }
`;
const StyledDate = styled(Date)`
  margin-bottom: ${({ horizontal }) => (horizontal ? `17px` : `unset`)};

  @media only screen and (max-width: 1380px) {
    font-size: 12px;
    line-height: 14px;
    margin-bottom: ${({ horizontal }) => (horizontal ? `0` : `unset`)};
  }
`;

const Post = ({ post, ...props }) => {
  const handleCategoryNode = post =>
    !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;
  const data = useStaticQuery(graphql`
    query PlaceholderImageQuery {
      placeholderImage: imageSharp(
        id: { eq: "a55c030f-3523-554d-a79b-16c592b980dd" }
      ) {
        id
        gatsbyImageData(
          quality: 76
          placeholder: TRACED_SVG
          formats: [AVIF, WEBP]
        )
      }
    }
  `);
  return (
    <Link
      className={props.bcorp}
      to={`/${post.slug}`}
      aria-label={post.title}
      {...props}
    >
      <PostWrapper horizontal={props.horizontal} className="article">
        <ThumbnailWrapper className="image image-wrapper">
          <Thumbnail
            className="image"
            loading={props.loading || "lazy"}
            horizontal={props.horizontal}
            image={
              post.featuredImage.node?.localFile?.childImageSharp
                ?.gatsbyImageData || data.placeholderImage.gatsbyImageData
            }
            alt={post.featuredImage.node.altText || ``}
          />
        </ThumbnailWrapper>
        <Text className="text" horizontal={props.horizontal}>
          <div>
            <Category
              className="category"
              name={post.categories.nodes[handleCategoryNode(post)].name}
              slug={post.categories.nodes[handleCategoryNode(post)].slug}
            />
            <PostTitle
              className="title"
              text={post.title}
              horizontal={props.horizontal}
            />
            {post.excerpt ? (
              <PostSubtitle
                className="subtitle"
                text={ReactHtmlParser(truncate(post.excerpt, 30))}
                horizontal={props.horizontal}
              />
            ) : null}
          </div>
          <StyledDate
            className="date"
            date={post.dateGmt}
            horizontal={props.horizontal}
          />
        </Text>
      </PostWrapper>
    </Link>
  );
};

export default Post;

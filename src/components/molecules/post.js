import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Category from "molecules/category";
import { Heading, Subheading } from "atoms/heading";
import TagBox from "molecules/tagBox";

const PostWrapper = styled.article`
  display: grid;
`;

const Text = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Thumbnail = styled(GatsbyImage)``;

const PostTitle = styled(Heading)``;

const PostSubtitle = styled(Subheading)``;

const Post = ({
  horizontal,
  post: { title, excerpt, categories, tags, slug, featuredImage },
  ...props
}) => {
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
    <PostWrapper as={Link} to={`/${slug}`} aria-label={title} {...props}>
      <Text>
        <div>
          <Category
            className="category"
            name={categories.nodes[handleCategoryNode(post)].name}
            slug={categories.nodes[handleCategoryNode(post)].slug}
          />
          <PostTitle className="title" text={title} />
          {excerpt ? (
            <PostSubtitle className="subtitle" text={excerpt} />
          ) : null}
        </div>
        <TagBox tags={tags} amount={2} />
      </Text>
      <Thumbnail
        image={
          featuredImage.node?.localFile?.childImageSharp?.gatsbyImageData ||
          data.placeholderImage.gatsbyImageData
        }
        alt={featuredImage.node.altText || ``}
      />
    </PostWrapper>
  );
};

export default Post;

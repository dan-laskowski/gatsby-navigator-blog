import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Heading, Subheading } from "atoms/heading";
import Tag from "atoms/tag";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 110px;
  margin-bottom: 20px;
  min-height: 110px;
  @media only screen and (max-width: 1370px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    article {
      order: 1;
    }
    img {
      order: 0;
    }
  }
`;
const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Category = styled(Link)`
  font-family: ${({ theme }) => theme.font.tag.family};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  font-style: ${({ theme }) => theme.font.tag.weight};
  font-size: ${({ theme }) => theme.font.tag.size};
  color: ${({ theme }) => theme.color.gray};
  text-transform: uppercase;
  margin-bottom: 8px;
  @media only screen and (max-width: 1370px) {
    font-size: 8px;
    line-height: 10px;
  }
`;
const StyledHeading = styled(Heading)`
  margin: 0;
  margin-top: 8px;
  margin-bottom: 10px;
  font-size: 20px;
  text-transform: uppercase;
  @media only screen and (max-width: 1370px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

const StyledSubheading = styled(Subheading)`
  display: none;
  font-size: 12px;
  line-height: 14px;
  @media only screen and (max-width: 1370px) {
    display: block;
  }
`;

const FeaturedImg = styled.div`
  overflow: hidden;
  .gatsby-image-wrapper {
    aspect-ratio: 16/9;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
  @media only screen and (max-width: 1370px) {
    order: 0;
  }
`;

const PostSmall = ({ title, category, tags, img, slug, excerpt }) => {
  return (
    <Wrapper as={Link} to={`/${slug}`} aria-label={title}>
      <Article>
        <div>
          <Category to={`/${category.slug}`}>{category.name}</Category>
          <StyledHeading text={title} />
          <StyledSubheading text={excerpt} />
        </div>
        <div>
          {tags.nodes.slice(0, 2).map(node => (
            <Tag key={node.slug} name={node.name} slug={node.slug} />
          ))}
          <Tag key="last" name="..." slug="tags" />
        </div>
      </Article>
      <FeaturedImg>
        <GatsbyImage
          image={img.node.localFile.childImageSharp.gatsbyImageData}
          alt={img.node.altText || ``}
        />
      </FeaturedImg>
    </Wrapper>
  );
};

export default PostSmall;

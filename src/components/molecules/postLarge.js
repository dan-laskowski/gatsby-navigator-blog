import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { Heading, Subheading } from "atoms/heading";
import TagBox from "molecules/tagBox";

const Wrapper = styled.section`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  padding-bottom: 18px;
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
  margin-bottom: 10px;
`;
const StyledHeading = styled(Heading)`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 58px;
`;
const StyledSubheading = styled(Subheading)`
  font-size: 24px;
  line-height: 32px;
  .more-link {
    display: none;
  }
`;
const FeaturedImg = styled.div`
  .gatsby-image-wrapper img {
    aspect-ratio: 16/9;
    object-fit: cover;
  }
`;
const TagSection = styled.div`
  margin-bottom: 17px;
`;

const PostLarge = ({ title, excerpt, category, tags, img, slug, ...props }) => {
  return (
    <Wrapper key={slug} as={Link} to={`/${slug}`} aria-label={title} {...props}>
      <Article className="text">
        <div>
          <Category to={`/${category.slug}`}>{category.name}</Category>
          <StyledHeading text={title} />
          <StyledSubheading text={ReactHtmlParser(excerpt)} />
        </div>
        <TagSection>
          <TagBox tags={tags} amount={2} />
        </TagSection>
      </Article>
      <FeaturedImg className="image">
        <GatsbyImage
          loading="eager"
          image={img.node.localFile.childImageSharp.gatsbyImageData}
          alt={img.node.altText || ``}
        />
      </FeaturedImg>
    </Wrapper>
  );
};

export default PostLarge;

import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Heading, Subheading } from "atoms/heading";
import TagBox from "molecules/tagBox";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(9, 122px);
  grid-gap: 16px;
  grid-template-rows: auto;
  grid-template-areas: "text text text text img img img img img";
  padding-bottom: 28px;
  margin-top: 30px;
`;
const Article = styled.article`
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FeaturedImg = styled.div`
  grid-area: img;
  overflow: hidden;
  margin-left: 108px;
  .gatsby-image-wrapper {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`;
const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;

  :nth-last-child() {
    display: flex;
    flex-direction: column;
  }
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
  margin-bottom: ${({ excerpt }) => (!excerpt ? "26px" : "10px")};
  font-size: 28px;
  text-transform: uppercase;
  @media only screen and (max-width: 787px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
const StyledSubheading = styled(Subheading)`
  @media only screen and (max-width: 787px) {
    font-size: 11px;
    line-height: 13px;
  }
`;
const TagSection = styled.div`
  margin-bottom: 17px;
`;
const PostMedium = ({
  title,
  category,
  tags,
  img,
  slug,
  excerpt,
  ...props
}) => {
  return (
    <Wrapper as={Link} to={`/${slug}`} aria-label={title} {...props}>
      <Article>
        <FeaturedImg>
          <GatsbyImage
            image={img.node.localFile.childImageSharp.gatsbyImageData}
            alt={img.node.altText || ``}
          />
        </FeaturedImg>
        <MetaWrapper>
          <div>
            <Category to={`/${category.slug}`}>{category.name}</Category>
            <StyledHeading text={title} excerpt={!!excerpt} />
            {excerpt ? <StyledSubheading text={excerpt} /> : null}
          </div>
          <TagSection>
            <TagBox tags={tags} amount={2} />
          </TagSection>
        </MetaWrapper>
      </Article>
    </Wrapper>
  );
};

export default PostMedium;

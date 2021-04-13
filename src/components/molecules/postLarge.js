import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { Heading, Subheading } from "atoms/heading";
import TagBox from "molecules/tagBox";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  /* padding-bottom: 28px; */
  margin-top: 30px;
  margin-bottom: 49px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
`;

const Article = styled.article`
  grid-area: text;
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
  margin-bottom: 26px;
  font-size: 28px;
  text-transform: uppercase;
  max-width: 603px;
  font-size: 60px;
`;

const StyledSubheading = styled(Subheading)`
  font-size: 28px;
  line-height: 34px;
  max-width: 525px;
  .more-link {
    display: none;
  }
`;

const FeaturedImg = styled.div`
  grid-area: img;
  overflow: hidden;
  max-width: 905px;
  max-height: 523px;
  img {
    width: 100%;
    height: 525px;
    overflow: hidden;
    object-fit: cover;
  }
`;

const TagSection = styled.div`
  margin-bottom: 17px;
`;

const PostLarge = ({ title, excerpt, category, tags, img, slug, ...props }) => {
  return (
    <Wrapper as={Link} to={`/${slug}`} {...props}>
      <Article {...props}>
        <div>
          <Category to={`/${category.slug}`}>{category.name}</Category>
          <StyledHeading text={title} />
          <StyledSubheading text={ReactHtmlParser(excerpt)} />
        </div>
        <TagSection>
          <TagBox tags={tags} amount={2} />
        </TagSection>
      </Article>
      <FeaturedImg>
        <img srcSet={img.node.srcSet} alt={img.node.altText} />
      </FeaturedImg>
    </Wrapper>
  );
};

export default PostLarge;

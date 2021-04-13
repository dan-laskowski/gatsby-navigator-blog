import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { Heading } from "atoms/heading";
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
  img {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
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
  margin-bottom: 26px;
  font-size: 28px;
  text-transform: uppercase;
`;

const TagSection = styled.div`
  margin-bottom: 17px;
`;

const PostMedium = ({ title, category, tags, img, slug, ...props }) => {
  return (
    <Wrapper as={Link} to={`/${slug}`} {...props}>
      <Article>
        <FeaturedImg>
          <img srcSet={img.node.srcSet} alt={img.node.altText} />
        </FeaturedImg>
        <div>
          <Category to={`/${category.slug}`}>{category.name}</Category>
          <StyledHeading text={title} />
          <TagSection>
            <TagBox tags={tags} amount={2} />
          </TagSection>
        </div>
      </Article>
    </Wrapper>
  );
};

export default PostMedium;

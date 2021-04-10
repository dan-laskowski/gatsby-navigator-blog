import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Heading } from "atoms/heading";
import Tag from "atoms/tag";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 110px;
  margin-bottom: 20px;
  min-height: 110px;
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
`;

const StyledHeading = styled(Heading)`
  margin: 0;
  margin-top: 8px;
  margin-bottom: 10px;
  font-size: 20px;
  text-transform: uppercase;
`;

const FeaturedImg = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`;

const PostSmall = ({ title, category, tags, img, slug }) => {
  return (
    <Wrapper as={Link} to={`/${slug}`}>
      <Article>
        <Category to={`/${category.slug}`}>{category.name}</Category>
        <StyledHeading text={title} />
        <div>
          {tags.nodes.slice(0, 2).map(node => (
            <Tag key={node.slug} name={node.name} slug={node.slug} />
          ))}
          <Tag key="last" name="..." slug="tags" />
        </div>
      </Article>
      <FeaturedImg>
        <img srcSet={img.node.srcSet} alt={img.node.altText} />
      </FeaturedImg>
    </Wrapper>
  );
};

export default PostSmall;

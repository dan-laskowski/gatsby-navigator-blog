import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { Heading, Subheading } from "atoms/heading";
import TagBox from "molecules/tagBox";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 28px;
  margin-top: 30px;
  margin-bottom: 49px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
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
  font-size: 28px;
  line-height: 33px;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 26px;
  text-transform: uppercase;
`;

const StyledSubheading = styled(Subheading)`
  font-size: 20px;
  line-height: 34px;
  .more-link,
  .screen-reader-text {
    display: none;
  }
  a:last-of-type {
    display: none;
  }
`;

const TagSection = styled.div`
  margin-bottom: 17px;
`;

const handleCategoryNode = post =>
  !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;

const SearchResult = ({ hit, ...props }) => {
  const category = hit.categories.nodes[handleCategoryNode(hit)];
  return (
    <Wrapper key={hit.slug} as={Link} to={`/${hit.slug}`} {...props}>
      <Article>
        <div>
          <Category to={`/${category.slug}`}>{category.name}</Category>
          <StyledHeading text={hit.title} />
          <StyledSubheading text={ReactHtmlParser(hit.excerpt)} />
        </div>
        <TagSection>
          <TagBox tags={hit.tags} />
        </TagSection>
      </Article>
    </Wrapper>
  );
};

export default SearchResult;

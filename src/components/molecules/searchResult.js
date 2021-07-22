import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import Date from "atoms/date";
import { Heading, Subheading } from "atoms/heading";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 28px;
  margin-top: 28px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
`;
const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .article {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .category {
    margin-top: 6px;
    margin-bottom: 6px;
  }
  .title {
    margin-bottom: 32px;
  }
  .subtitle {
    margin-bottom: 12px;
  }

  @media only screen and (max-width: 1100px) {
    .title {
      margin-bottom: 22px;
      -webkit-line-clamp: 2;
    }
    .subtitle {
      font-size: 16px;
      line-height: 18px;
      -webkit-line-clamp: 4;
    }
    .date {
      font-size: 12px;
      line-height: 15px;
    }
  }

  @media only screen and (max-width: 600px) {
    .article {
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .category {
      margin-top: 10px;
      margin-bottom: 6px;
    }
    .title {
      font-size: 20px;
      line-height: 24px;
      -webkit-line-clamp: 3;
      margin-bottom: 10px;
    }
    .subtitle {
      display: -webkit-box;
      font-size: 14px;
      line-height: 18px;
      -webkit-line-clamp: 3;
      margin-bottom: 10px;
    }
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
  font-size: 23px;
  line-height: 29px;
  -webkit-line-clamp: 2;
  text-transform: uppercase;
`;
const StyledSubheading = styled(Subheading)`
  font-size: 20px;
  line-height: 26px;
  font-weight: 300;
  -webkit-line-clamp: 4;
  .more-link,
  .screen-reader-text {
    display: none;
  }
  a:last-of-type {
    display: none;
  }
`;
const StyledDate = styled(Date)``;

const handleCategoryNode = post =>
  !post.categories.nodes[0].wpChildren.nodes.length ? 0 : 1;

const SearchResult = ({ hit, ...props }) => {
  const category = hit.categories.nodes[handleCategoryNode(hit)];
  return (
    <Wrapper
      key={hit.slug}
      as={Link}
      to={`/${hit.slug}`}
      aria-label={hit.title}
      {...props}
    >
      <Article>
        <div>
          <Category className="category" to={`/${category.slug}`}>
            {category.name}
          </Category>
          <StyledHeading className="title" text={hit.title} />
          <StyledSubheading
            className="subtitle"
            text={ReactHtmlParser(hit.excerpt)}
          />
        </div>
        <StyledDate className="date" date={hit.dateGmt} />
      </Article>
    </Wrapper>
  );
};

export default SearchResult;

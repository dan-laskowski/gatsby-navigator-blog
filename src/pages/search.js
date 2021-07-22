import React from "react";
import styled from "styled-components";
import { window } from "browser-monads";
import { navigate, graphql } from "gatsby";
import { Heading } from "atoms/heading";
import Seo from "molecules/seo";
import Aside from "organisms/aside";
import AsideSection from "molecules/asideSection";
import Layout from "organisms/layout";
import Post from "molecules/post";
import SearchResult from "molecules/searchResult";
import SearchPagination from "molecules/searchPagination";
import algoliasearch from "algoliasearch/lite";
import {
  Configure,
  InstantSearch,
  SearchBox,
  Hits,
  connectStateResults,
  connectPagination,
} from "react-instantsearch-dom";
import searchPhase from "assets/images/searchPhaseGray.svg";
import algoliaIcon from "assets/images/algolia.svg";

const GATSBY_ALGOLIA_APP_ID = process.env.GATSBY_ALGOLIA_APP_ID;
const GATSBY_ALGOLIA_SEACH_ONLY_API_KEY =
  process.env.GATSBY_ALGOLIA_SEACH_ONLY_API_KEY;
const GATSBY_ALGOLIA_INDEX_NAME = process.env.GATSBY_ALGOLIA_INDEX_NAME;

const searchClient = algoliasearch(
  GATSBY_ALGOLIA_APP_ID,
  GATSBY_ALGOLIA_SEACH_ONLY_API_KEY
);

const Wrapper = styled(InstantSearch)`
  min-height: 100vh;
  padding-top: 152px;
  @media only screen and (max-width: 850px) {
    padding-top: 136px;
  }
  @media only screen and (max-width: 616px) {
    padding-top: 94px;
  }
`;
const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 40px;
  max-width: 1645px;
  grid-template-areas:
    "c c c c c c c c . a a a"
    "p p p p p p p p p p p p";
  grid-template-rows: auto;
  margin: 0 auto;

  @media only screen and (max-width: 1745px) {
    margin-left: 30px;
    margin-right: 30px;
    column-gap: 30px;
  }
  @media only screen and (max-width: 574px) {
    display: block;
    margin: 0 24px;
  }
`;
const SearchBar = styled.div`
  padding-top: 152px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  margin-bottom: 41px;
  background: #f6f6f6;
  span {
    font-family: ${({ theme }) => theme.font.heading.family};
    color: #b7b5bd;
    font-size: 12px;
    margin-left: 360px;
    img {
      margin-left: 3px;
    }
  }
  @media only screen and (max-width: 850px) {
    height: 160px;
    padding-top: 136px;
    span {
      margin-left: 200px;
    }
  }
  @media only screen and (max-width: 616px) {
    span {
      margin-left: 125px;
      font-size: 10px;
      img {
        width: 40px;
      }
    }
    padding-top: 94px;
  }
`;
const StyledSearchBox = styled(SearchBox)`
  max-width: 540px;
  form {
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 540px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray};
    margin-bottom: 12px;
  }
  input,
  button {
    border: none;
    background: none;
  }
  input {
    width: 100%;
    font-family: ${({ theme }) => theme.font.menuItem.family};
    font-weight: ${({ theme }) => theme.font.menuItem.weight};
    font-style: ${({ theme }) => theme.font.menuItem.style};
    font-size: 36px;
    color: ${({ theme }) => theme.color.gray};
    text-transform: uppercase;
    margin-bottom: 20px;
    :focus {
      outline: none;
    }
  }
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-SearchBox-submit {
    margin-bottom: 17px;
  }
  @media only screen and (max-width: 850px) {
    input {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .ais-SearchBox-submit {
      margin-bottom: 10px;
    }
    .ais-SearchBox-submit img {
      width: 12px;
    }
  }
  @media only screen and (max-width: 616px) {
    margin-left: 24px;
    margin-right: 24px;
    input {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`;
const Results = connectStateResults(({ searchResults, children }) =>
  searchResults && searchResults.nbHits !== 0 ? (
    children
  ) : (
    <Heading text={`Nie znaleziono wyników dla podanego hasła`} />
  )
);
const PostsWrapper = styled.div`
  grid-area: c;
  a:first-child article {
    margin-top: 0;
    padding-top: 0;
  }
  .ais-Hits-list {
    li:last-child a {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
  @media only screen and (max-width: 720px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;
const PaginationWrapper = styled.nav`
  grid-area: p;
`;
const StyledAside = styled(Aside)`
  grid-area: a;
  margin-top: -19px;
  section {
    margin-bottom: 20px;
  }
  .tags {
    margin-bottom: 14px;
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;
const AsidePost = styled(Post)`
  .article {
    grid-template-columns: 1fr 110px;
    column-gap: 26px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
    border: none;
  }
  .category {
    margin-top: 0;
    margin-bottom: 8px;
  }
  .title {
    font-size: 20px;
    line-height: 24px;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .image-wrapper {
    /* aspect-ratio: 1/1; */
    padding-top: 0;
    height: 110px;
  }
  .date {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 1380px) {
    .article {
      grid-template-columns: 1fr;
    }
    .image-wrapper {
      display: none;
    }
  }

  @media only screen and (max-width: 1248px) {
    .title {
      font-size: 18px;
      line-height: 20px;
    }
  }

  @media only screen and (max-width: 900px) {
    .article {
      margin-bottom: 0;
    }
    .category {
      font-size: 10px;
      line-height: 12px;
      margin-bottom: 4px;
    }
    .title {
      font-size: 11px;
      line-height: 13px;
      margin-bottom: 4px;
    }
    .date {
      font-size: 10px;
      line-height: 12px;
    }
  }
`;
const CustomPagination = connectPagination(SearchPagination);

const Search = ({ data: { asideQuery } }) => {
  let params = new URLSearchParams(window.location.search.slice(1));
  const q = params.get("q") || "";
  const page = params.get("page");

  const handleFormSubmit = e => {
    e.preventDefault();
    const query = e.target.children[0].value;
    navigate(`/search?q=${query}&page=1`);
  };
  return (
    <Layout>
      <Seo
        title=" Wyszukiwanie | Navigator"
        description={q || `Strona wyszukiwania postów`}
      />
      <Wrapper
        searchClient={searchClient}
        indexName={GATSBY_ALGOLIA_INDEX_NAME}
      >
        <SearchBar>
          <StyledSearchBox
            onSubmit={handleFormSubmit}
            submit={<img src={searchPhase} alt="szukaj" />}
            defaultRefinement={q}
            searchAsYouType={false}
            translations={{
              placeholder: "Czego szukasz?",
            }}
          />
          <span>
            Search by
            <img src={algoliaIcon} alt="algolia" />
          </span>
        </SearchBar>
        <ContentWrapper>
          <PostsWrapper>
            <Results>
              <Configure hitsPerPage={6} />
              <Hits hitComponent={SearchResult} />
            </Results>
          </PostsWrapper>
          <StyledAside>
            <AsideSection title="ostatnie" to={`/`}>
              {asideQuery.nodes.map(node => (
                <AsidePost horizontal post={node} />
              ))}
            </AsideSection>
          </StyledAside>
        </ContentWrapper>
        <PaginationWrapper>
          <CustomPagination params={params} defaultRefinement={page} />
        </PaginationWrapper>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    asideQuery: allWpPost(limit: 3) {
      nodes {
        title
        slug
        dateGmt(locale: "pl", formatString: "DD MMMM yyyy")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 260
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                )
              }
            }
          }
        }
        categories {
          nodes {
            name
            slug
            wpChildren {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export default Search;

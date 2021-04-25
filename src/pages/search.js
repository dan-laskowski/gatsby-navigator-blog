import React from "react";
import { window } from "browser-monads";
import { navigate } from "gatsby";
import styled from "styled-components";
import { Heading } from "atoms/heading";
import Seo from "molecules/seo";
import SearchResult from "molecules/searchResult";
import SearchPagination from "molecules/searchPagination";
import Layout from "organisms/layout";
import Aside from "organisms/aside";
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
  display: flex;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  grid-template-areas: "results aside";
  max-width: 1645px;
  margin: 0 auto;
  .ais-Hits {
    width: 80%;
  }
  .ais-Hits-list {
    li:last-child a {
      border-bottom: none;
      margin-bottom: 0;
    }
  }
`;
const SearchBar = styled.div`
  grid-column-start: results;
  grid-column-end: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  margin-bottom: 41px;
  background: ${({ theme }) => theme.color.lightGray};
  span {
    font-family: ${({ theme }) => theme.font.heading.family};
    color: #b7b5bd;
    font-size: 12px;
    margin-left: 360px;
    img {
      margin-left: 3px;
    }
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
`;
const Results = connectStateResults(({ searchResults, children }) =>
  searchResults && searchResults.nbHits !== 0 ? (
    children
  ) : (
    <Heading text={`Nie znaleziono wyników dla podanego hasła`} />
  )
);
const PaginationWrapper = styled.nav`
  grid-column-start: results;
  grid-column-end: aside;
`;
const CustomPagination = connectPagination(SearchPagination);

const Search = () => {
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
        title="Wyszukiwanie | Navigator"
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
          <Results>
            <Configure hitsPerPage={6} />
            <Hits hitComponent={SearchResult} />
          </Results>
          <Aside search />
          <PaginationWrapper>
            <CustomPagination params={params} defaultRefinement={page} />
          </PaginationWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Search;

import React from "react";
import { window } from "browser-monads";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Subheading } from "atoms/heading";
import SearchResult from "molecules/searchResult";
import Layout from "organisms/layout";
import Aside from "organisms/aside";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom";
import searchPhase from "assets/images/searchPhaseGray.svg";
import exit from "assets/images/exit.svg";
import algoliaIcon from "assets/images/algolia.svg";

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEACH_ONLY_API_KEY
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

const Search = () => {
  const params = new URLSearchParams(window.location.search.slice(1));
  const q = params.get("q") || "";
  return (
    <Layout>
      <Helmet>
        <title>Wyszukiwanie | Navigator</title>
      </Helmet>
      <Wrapper
        searchClient={searchClient}
        indexName={process.env.ALGOLIA_INDEX_NAME}
      >
        <SearchBar>
          <StyledSearchBox
            submit={<img src={searchPhase} alt="szukaj" />}
            autoFocus
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
          <div>
            <Stats />
            <Hits hitComponent={SearchResult} />
          </div>
          <Aside />
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Search;

import React from "react";
import { window } from "browser-monads";
import { navigate } from "gatsby";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Heading } from "atoms/heading";
import SearchResult from "molecules/searchResult";
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
import arrowNext from "assets/images/arrowNext.svg";
import arrowPrev from "assets/images/arrowPrev.svg";
import searchPhase from "assets/images/searchPhaseGray.svg";
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

const StyledHeading = styled(Heading)`
  margin: 0 5px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 40;
  color: ${({ theme }) => theme.color.navy};
  img {
  }
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;
const StyledList = styled.ul`
  grid-column-start: results;
  grid-column-end: aside;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  margin-top: 29px;
  margin-bottom: 40px;
  border-top: 1px solid ${({ theme }) => theme.color.lightGray};
  *:nth-child(2) {
    display: flex;
    flex-direction: row;
  }
`;

const Results = connectStateResults(({ searchResults, children }) =>
  searchResults && searchResults.nbHits !== 0 ? (
    children
  ) : (
    <Heading text={`Nie znaleziono wyników dla podanego hasła`} />
  )
);

const Pagination = ({ currentRefinement, nbPages, params }) =>
  nbPages > 1 && (
    <StyledList>
      <li>
        <StyledButton
          onClick={e => {
            if (params.get("page") > 1) {
              e.preventDefault();
              params.set("page", currentRefinement - 1);
              navigate(`/search?${params.toString()}`);
            }
          }}
          style={{
            pointerEvents: params.get("page") > 1 ? "unset" : "none",
          }}
        >
          <img src={arrowPrev} alt="poprzednie" />
          <StyledHeading text="poprzednie" />
        </StyledButton>
      </li>
      <li>
        {new Array(nbPages).fill(null).map((_, index) => {
          const page = index + 1;
          const style = {
            color:
              currentRefinement === page
                ? `rgb(240,117,56)`
                : `rgb(45, 48, 72)`,
          };
          return (
            <StyledButton
              key={index}
              onClick={e => {
                e.preventDefault();
                params.set("page", page);
                navigate(`/search?${params.toString()}`);
              }}
            >
              <StyledHeading style={style} text={page} />
            </StyledButton>
          );
        })}
      </li>
      <li>
        <StyledButton
          onClick={e => {
            if (params.get("page") < nbPages) {
              e.preventDefault();
              console.log(nbPages);
              params.set("page", currentRefinement + 1);
              navigate(`/search?${params.toString()}`);
            }
          }}
          style={{
            pointerEvents: params.get("page") < nbPages ? "unset" : "none",
          }}
        >
          <StyledHeading text="następne" />
          <img src={arrowNext} alt="następne" />
        </StyledButton>
      </li>
    </StyledList>
  );

const CustomPagination = connectPagination(Pagination);

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
      <Helmet>
        <title>Wyszukiwanie | Navigator</title>
      </Helmet>
      <Wrapper
        searchClient={searchClient}
        indexName={process.env.ALGOLIA_INDEX_NAME}
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
            <Configure hitsPerPage={3} />
            <Hits hitComponent={SearchResult} />
          </Results>
          <Aside />
          <CustomPagination params={params} defaultRefinement={page} />
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Search;

import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import PaginationButton from "atoms/paginationButton";
import { Heading } from "atoms/heading";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1745px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1645px;
  padding-top: 40px;
  margin-top: 29px;
  margin-bottom: 40px;
  border-top: 1px solid ${({ theme }) => theme.color.lightGray};
  *:nth-child(2) {
    display: flex;
    flex-direction: row;
  }
`;
const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;
const StyledHeading = styled(Heading)`
  margin: 0 5px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 40;
  color: ${({ theme }) => theme.color.navy};
`;

const SearchPagination = ({ nbPages, params }) => {
  const currentPage = params.get("page");

  const handleClick = (e, next) => {
    e.preventDefault();
    params.set("page", next ? +currentPage + 1 : +currentPage - 1);
    navigate(`/search?${params.toString()}`);
  };
  return (
    nbPages > 1 && (
      <Wrapper>
        <StyledList>
          <li>
            <PaginationButton
              aria-label="Poprzednia strona"
              prev
              active={params.get("page") > 1}
              onClick={e => {
                if (params.get("page") > 1) {
                  handleClick(e, false);
                }
              }}
            />
          </li>
          <li>
            {new Array(nbPages).fill(null).map((_, index) => {
              const page = index + 1;
              const style = {
                color:
                  +currentPage === page ? `rgb(240,117,56)` : `rgb(45, 48, 72)`,
              };
              return (
                <StyledButton
                  aria-label={`Strona numer ${page}`}
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
            <PaginationButton
              aria-label="Następna strona"
              prev={false}
              active={params.get("page") < nbPages}
              onClick={e => {
                if (params.get("page") < nbPages) {
                  handleClick(e, true);
                }
              }}
            />
          </li>
        </StyledList>
      </Wrapper>
    )
  );
};

export default SearchPagination;

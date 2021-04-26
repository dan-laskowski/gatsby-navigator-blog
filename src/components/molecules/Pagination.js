import React from "react";
import styled from "styled-components";
import { Heading } from "atoms/heading";
import { Link } from "gatsby";
import PaginationButton from "atoms/paginationButton";

const Wrapper = styled.nav`
  margin: 40px auto;
  max-width: 1645px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const StyledHeading = styled(Heading)`
  margin: 0 5px;
  font-size: 14px;
  letter-spacing: 40;
`;

const Pagination = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = pageContext;

  return (
    <Wrapper>
      {numberOfPages > 1 && (
        <>
          <PaginationButton
            aria-label="Poprzednia strona"
            as={Link}
            to={previousPagePath ? previousPagePath : ``}
            prev
            active={+humanPageNumber > 1}
          />
          <div className="pagination-location">
            <StyledHeading
              text={`STRONA ${humanPageNumber} z ${numberOfPages}`}
            />
          </div>
          <PaginationButton
            aria-label="Następna strona"
            as={Link}
            to={nextPagePath}
            active={+humanPageNumber < numberOfPages}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Pagination;

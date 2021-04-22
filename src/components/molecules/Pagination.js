import React from "react";
import styled from "styled-components";
import { Heading } from "atoms/heading";
import NavButton from "atoms/navButton";

const Wrapper = styled.nav`
  margin: 40px auto;
  max-width: 1645px;
  display: flex;
  justify-content: space-between;
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
          <NavButton to={previousPagePath ? previousPagePath : ``} prev />
          <div className="pagination-location">
            <StyledHeading
              text={`STRONA ${humanPageNumber} z ${numberOfPages}`}
            />
          </div>
          <NavButton to={nextPagePath} />
        </>
      )}
    </Wrapper>
  );
};

export default Pagination;

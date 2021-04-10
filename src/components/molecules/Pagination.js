import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Pagination = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = pageContext;

  console.log(previousPagePath);
  console.log(nextPagePath);
  console.log(humanPageNumber);
  console.log(numberOfPages);

  return (
    <nav className="pagination" role="navigation">
      <div>
        {previousPagePath && (
          <Link to={previousPagePath} rel="prev">
            Poprzednia
          </Link>
        )}
      </div>
      {numberOfPages > 1 && (
        <div className="pagination-location">
          Strona {humanPageNumber} z {numberOfPages}
        </div>
      )}
      <div>
        {nextPagePath && (
          <Link to={nextPagePath} rel="next">
            Następna
          </Link>
        )}
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Pagination;

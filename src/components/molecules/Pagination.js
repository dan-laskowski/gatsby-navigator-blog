import React from "react";
import { Link } from "gatsby";

const Pagination = ({
  pageContext: previousPagePath,
  nextPagePath,
  humanPageNumber,
  numberOfPages,
}) => {
  return (
    <nav>
      <div>
        {previousPagePath && (
          <Link to={previousPagePath} rel="prev">
            Poprzednia
          </Link>
        )}
      </div>
      {numberOfPages > 1 && (
        <div>
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
export default Pagination;

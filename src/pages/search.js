import React from "react";
import Layout from "organisms/layout";
import { useStaticQuery, graphql } from "gatsby";
import SearchResults from "molecules/searchResults";

const SearchPage = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allWordpressWpSearchResults {
  //       edges {
  //         node {
  //           id
  //           pathname # the full pathname, so you can link to it in the view, eg https://localhost:8000/a-post-about-bagels
  //           post_title # the title of the page/post
  //           post_type # will return "post" or "page", so you can treat them differently if you need to
  //           searchData # will include all the rich text content, including ACF text
  //         }
  //       }
  //     }
  //   }
  // `);

  return <Layout>{/* <SearchResults data={data} /> */}</Layout>;
};

export default SearchPage;

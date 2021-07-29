import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import StaticPage from "templates/staticPage";
import bcorpNavData from "data/bcorpNav";

const meta = {
  title: "Jak zostać B Corpem?",
  description: "Dowiedz się jak zostać B Corpem.",
};

const HowToBecomeABcorp = () => {
  const { wpPage } = useStaticQuery(graphql`
    query HowToBecomeABcorpQuery {
      wpPage(title: { eq: "Jak zostać B Corpem?" }) {
        title
        content
      }
    }
  `);
  return (
    <StaticPage meta={meta} content={wpPage.content} data={bcorpNavData} />
  );
};

export default HowToBecomeABcorp;

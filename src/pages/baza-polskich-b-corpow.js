import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import StaticPage from "templates/staticPage";
import bcorpNavData from "data/bcorpNav";

const meta = {
  title: "Baza polskich B Corpów",
  description:
    "Dowiedz się które z polskich firm otrzymały certyfikację B Corp",
};

const PolishBCorps = () => {
  const { wpPage } = useStaticQuery(graphql`
    query PolishBCorpsQuery {
      wpPage(title: { eq: "Baza polskich B Corpów" }) {
        title
        content
      }
    }
  `);
  return (
    <StaticPage meta={meta} content={wpPage.content} data={bcorpNavData} />
  );
};

export default PolishBCorps;

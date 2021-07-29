import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import StaticPage from "templates/staticPage";
import navigatorNavData from "data/navigatorNav";

const meta = {
  title: "Polityka Prywatności",
  description: "Dowiedz się na jakich zasadach działa nasz portal",
};

const TermsofService = () => {
  const { wpPage } = useStaticQuery(graphql`
    query TermsOfServiceQuery {
      wpPage(title: { eq: "Polityka prywatności" }) {
        title
        content
      }
    }
  `);
  return (
    <StaticPage meta={meta} content={wpPage.content} data={navigatorNavData} />
  );
};

export default TermsofService;

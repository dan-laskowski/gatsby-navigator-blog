import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import StaticPage from "templates/staticPage";
import navigatorNavData from "data/navigatorNav";

const meta = {
  title: "Nasza historia",
  description: "Poznaj historię jak kształtował się nasz zespół",
};

const OurHistory = () => {
  const { wpPage } = useStaticQuery(graphql`
    query OurHistoryQuery {
      wpPage(title: { eq: "Nasza historia" }) {
        title
        content
      }
    }
  `);
  return (
    <StaticPage meta={meta} content={wpPage.content} data={navigatorNavData} />
  );
};

export default OurHistory;

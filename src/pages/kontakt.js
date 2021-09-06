import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import StaticPage from "templates/staticPage";
import navigatorNavData from "data/navigatorNav";

const meta = {
  title: "Kontakt",
  description: "Skontaktuj się z nami!",
};

const Contact = () => {
  const { wpPage } = useStaticQuery(graphql`
    query ContactQuery {
      wpPage(title: { eq: "Kontakt" }) {
        title
        content
      }
    }
  `);
  return (
    <StaticPage meta={meta} content={wpPage.content} data={navigatorNavData} />
  );
};

export default Contact;

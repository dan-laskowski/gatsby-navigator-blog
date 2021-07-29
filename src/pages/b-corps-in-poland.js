import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import StaticPage from "templates/staticPage";
import engNav from "data/engNav";

const meta = {
  title: "What is a B Corp?",
  description: "What is a B Corp?",
};

const WhatBcorpEng = () => {
  const { wpPage } = useStaticQuery(graphql`
    query WhatBCorpQuery {
      wpPage(title: { eq: "B Corps in Poland" }) {
        title
        content
      }
    }
  `);
  return <StaticPage meta={meta} content={wpPage.content} data={engNav} />;
};

export default WhatBcorpEng;

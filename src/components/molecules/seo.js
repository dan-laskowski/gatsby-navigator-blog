import React from "react";
import { Helmet } from "react-helmet";
import truncate from "utils/truncate";
import { window } from "browser-monads";
import betterLogo from "assets/images/betterLogo.svg";

const Seo = ({ title, description, image }) => {
  const tagImage = image || betterLogo;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={truncate(description, 15)} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={truncate(description, 15)} />
      <meta property="og:image" content={tagImage} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={truncate(description, 15)}
      />
      <meta property="twitter:image" content={tagImage} />
    </Helmet>
  );
};

export default Seo;

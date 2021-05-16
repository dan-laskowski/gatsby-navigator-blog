import React from "react";
import { Helmet } from "react-helmet";
import truncate from "utils/truncate";
import { window } from "browser-monads";

const Seo = ({ title, description, image, children }) => {
  if (typeof image === "undefined") {
    image = `https://i.imgur.com/ElSdyuJ.png`;
  }
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index" />
      <meta name="AdsBot-Google" content="index" />
      <meta name="description" content={truncate(description)} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <html lang="pl" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DTLQYJPM7M"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-DTLQYJPM7M');
      </script>
      {children}
    </Helmet>
  );
};

export default Seo;

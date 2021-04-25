import * as React from "react";
import Seo from "molecules/seo";
import Layout from "organisms/layout";

const NotFoundPage = () => (
  <Layout>
    <Seo
      title="Nie znaleziono strony"
      description="Niestety strona o podanym adresie nie istnieje!"
    />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_SITE_URL,
    title: `Navigator blog`,
    description: `This barebones starter ships with the main Gatsby configuration files you might need.`,
    url: `https://navigator82042.gtsb.io`,
    author: `@daniello110`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        assets: path.join(__dirname, "src/assets"),
        images: path.join(__dirname, "src/assets/images"),
        pages: path.join(__dirname, "src/pages"),
        templates: path.join(__dirname, "src/templates"),
        atoms: path.join(__dirname, "src/components/atoms"),
        molecules: path.join(__dirname, "src/components/molecules"),
        organisms: path.join(__dirname, "src/components/organisms"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://daniello110.usermd.net/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries: require("./src/utils/algolia-queries"),
        skipIndexing: false,
        // enablePartialUpdates: true,
        // matchFields: ["dateGmt"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Navigator blog`,
        short_name: `Navigator`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f07538`,
        icon: "./src/assets/images/gatsby-icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://navigator82042.gtsb.io`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-DTLQYJPM7M`],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-preact`,
    `gatsby-plugin-gatsby-cloud`,
  ],
};

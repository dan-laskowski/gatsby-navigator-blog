const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: `Navigator blog`,
    description: `This barebones starter ships with the main Gatsby configuration files you might need.`,
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
        url: process.env.WP_ENDPOINT,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
};

import React from "react";
import "@fontsource/chivo/700.css";
import "@fontsource/chivo/400.css";
import "@fontsource/inria-serif/700.css";
import "@fontsource/inria-serif/400.css";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from "assets/styles/globalStyle";
import theme from "assets/styles/theme";
import ScrollToTopButton from "molecules/scrollToTopButton";
import Header from "molecules/header";
import Footer from "molecules/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ScrollToTopButton />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;

import React from "react";
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

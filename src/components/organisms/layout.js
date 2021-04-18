import React from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from "assets/styles/globalStyle";
import theme from "assets/styles/theme";
import Header from "molecules/header";

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;

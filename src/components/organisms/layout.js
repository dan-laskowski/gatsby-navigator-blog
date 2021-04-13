import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from "assets/styles/globalStyle";
import theme from "assets/styles/theme";
import Header from "molecules/header";

const MainWrapper = styled.main``;

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

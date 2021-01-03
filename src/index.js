import React from "react";
import { render } from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Root from "#root/components/Root";
import * as theme from "#root/config/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.jade};
    font-family: "Lato", sans-serif;
  }
`;

render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Root />
  </ThemeProvider>,
  document.getElementById("app")
);

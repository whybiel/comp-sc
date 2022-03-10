import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lobster', cursive;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

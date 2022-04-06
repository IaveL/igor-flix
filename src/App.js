import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  li{
    list-style-type: none;
  }
`;
const TopContainerNav = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  background-color: #292929;
`
const TopNavBar = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: white;
`
const TopNavItem = styled.li`
 :hover {
    cursor: pointer;
    background-color: rgba(139,0,0, 0.4);
    font-size: 1.5em;
  }
`
const Anchor = styled(Link)`
  text-decoration: none;
  font-size: 1.3em;
  color: white;
  & :hover {
    background-color: rgba(139,0,0, 0.4);
    font-size: 1.5em;
  }
  /* & :visited {
    text-decoration: none;
  } */
`
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <TopContainerNav>
          <TopNavBar>
            <li>
              <Anchor to="/movies">Filmes</Anchor>
            </li>
            <li>
              <Anchor to="/">Home</Anchor>
            </li>
            <li>
             <Anchor to="/Shows">Séries</Anchor>
            </li>
          </TopNavBar>
        </TopContainerNav>
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
        </Routes>
      </Router>
    );
  }
}

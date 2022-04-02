import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const mbdApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=d45dd8e1f959a529e42c037fad5f2ea6&language=en-US&page=1"
});

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  li {
    text-decoration: none;
  }
`
const MainContainer = styled.section`
  background-color: #292929;
  ` 
const Show = styled.div`
  border: solid red;
  text-align: center;
  height: 40vh;
  width: 50%;
  `
const Wrapper = styled.div`
  border: solid blue;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Movie = styled.div`
  /* border: solid red; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 50%;
  `
const Poster = styled.img`
  width: 350px;
  height: 300px;
`
const MovieWrapper = styled.div`
  /* border: yellow solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 60vh;
`
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin: 0 0 15px 0;
  color: #fff;
`
const Overview = styled.p `
  background-color:  rgba(139,0,0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #FFF;
  font-weight: bolder;
  width: 700px;
  height: 300px;
  text-align: center;
  display: flex;
  align-items: center;
`
const ItemTitle = styled.h2`
  background-color:  rgba(139,0,0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #FFF;
`

export default class Shows extends React.Component {
  state = {
    showList: []
  };

  async componentDidMount() {
    const response = await mbdApi.get();
    // console.log(response.data.results);

    const shows = response.data.results.map((item) => {
      return {
        ...item, //->... é o spread.
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });
    this.setState({
      showList: shows
    });
  }

  render() {
    return (
        <MainContainer>
        <GlobalStyle/>
        <Title>Possíveis escolhas de série:</Title>
        <Wrapper>
        {this.state.showList.map((item) => (
          <Movie>
            <MovieWrapper>
              <ItemTitle>{item.name}</ItemTitle>
              <Poster src={item.poster_path} alt={item.title}/>
              <Overview>{item.overview}</Overview>
              </MovieWrapper>
          </Movie>
        ))}
        </Wrapper>
      </MainContainer>
    );
  }
}

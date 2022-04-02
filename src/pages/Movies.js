import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const mbdApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=d45dd8e1f959a529e42c037fad5f2ea6&language=pt-BR&page=1",
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
`;
const MainContainer = styled.section`
  background-color: #292929;
`;
const Movie = styled.div`
  /* border: solid red; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 50%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Poster = styled.img`
  width: 350px;
  height: 300px;
`;
const MovieWrapper = styled.div`
  /* border: yellow solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 60vh;
`;
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin: 0 0 15px 0;
  color: #fff;
`;
const Overview = styled.p`
  background-color: rgba(139, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
  font-weight: bolder;
  width: 700px;
  height: 300px;
  text-align: center;
  display: flex;
  align-items: center;
`;
const ItemTitle = styled.h2`
  background-color: rgba(139, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
`;
export default class Movies extends React.Component {
  state = {
    movieList: [],
  };

  async componentDidMount() {
    const response = await mbdApi.get();
    // console.log(response.data.results);

    const movies = response.data.results.map((item) => {
      return {
        ...item, //->... é o spread.
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      };
    });
    this.setState({
      movieList: movies,
    });
  }

  filterMovies = (event) => {
    const { movieList } = this.state;

    const filteredMovies = movieList.filter((item) => {
      if (item.title.includes(event.target.value)) {
        return true;
      }
    });
    this.setState({
      filterList: filteredMovies,
    });
  };

  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        <Title>Possíveis escolhas de filme:</Title>
        {/* <input onChange={this.filterMovies} value={} / */}
        <Wrapper>
          {this.state.movieList.map((item) => (
            <Movie>
              <MovieWrapper>
                <ItemTitle>{item.title}</ItemTitle>
                <Poster src={item.poster_path} alt={item.title} />
                <Overview>{item.overview}</Overview>
              </MovieWrapper>
            </Movie>
          ))}
        </Wrapper>
      </MainContainer>
    );
  }
}

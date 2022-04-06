import React, {useState} from "react";
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
  body{
    background-color: #292929;
  }
`;
const MainContainer = styled.section`
  
`;
const Movie = styled.div`
  /* border: solid red; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65vh;
  width: 33%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Poster = styled.img`
  width: 20vw;
  height: 20vw;
`;
const MovieWrapper = styled.div`
  border: yellow solid;
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
const ItemTitle = styled.h2`
  background-color: rgba(139, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin-bottom: 20px;
  color: #fff;
`;
const SearchBar = styled.input`
    width: 28vw;
    padding: 11px;
     font-size: 20px;
     border-width: 1px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: solid;
     border-radius: 50px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.75);
     text-shadow: 0px 0px 5px rgba(66,66,66,.75);
`
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0 25px 0;
`
export default class Movies extends React.Component {
  state = {
    movieList: [],
    filterList: []
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
      filterList: movies
    });
  }

  filterMovies = (event) => {
    const { movieList } = this.state;

    const filteredMovies = movieList.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
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
        <SearchWrapper>
        <SearchBar 
        onChange={this.filterMovies}
        placeholder="Pesquise aqui o filme que deseja assistir! :)" />
        </SearchWrapper>
        <Wrapper>
          {this.state.filterList.map((item) => (
            <Movie>
              {/* <MovieWrapper> */}
                <ItemTitle>{item.title}</ItemTitle>
                <Poster src={item.poster_path} alt={item.title} />
                {/* <Overview>{item.overview}</Overview> */} 
                {/* deixei sem sinopse por que tava quebrando mt o design que eu queria :/ */}
              {/* </MovieWrapper> */}
            </Movie>
          ))}
        </Wrapper>
      </MainContainer>
    );
  }
}

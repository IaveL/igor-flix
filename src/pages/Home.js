import React from "react";
import styled from "styled-components";

const MainContainer = styled.section`
  height: 100vh;;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #000000; */
  background-image: url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  background-repeat: no-repeat;
  background-size: cover;
`;
const ButtonBox = styled.div`
    width: 25vw;
    display: flex;
    justify-content: space-around;
`
const TextBox = styled.div`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    height: 20vh;
    text-align: center;
    width: 75%;
    color: white;
`
const Wrapper = styled.div`
    height: 100vh;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Title = styled.h1`
    color: #c42222;
    margin-bottom: 30px;
`
const Paragraph = styled.p`
  background-color: rgba(41,41,41, 0.6)
`
export default class Main extends React.Component {
  render() {
    return (
      <MainContainer>
          <Wrapper>
          <TextBox>
        <Title>Bem vindo ao Igor-flix!</Title>
        <Paragraph>
          Esse site tem como intuito te guiar em escolhas de filmes ou séries
          (porque no fim, somos todos indeciso/as com o que assistir) se
          baseando em uma API dos filmes e séries mais populares!
        </Paragraph>
        </TextBox>
        </Wrapper>
      </MainContainer>
    );
  }
}

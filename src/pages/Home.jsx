import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Logo = styled.img`
  width: 600px;
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  color: white;
  border: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgb(204, 0, 0);
  }
`;

const Home = () => {
  return (
    <Container>
      <Logo src={logo} />
      <Link to="/dex">
        <StartButton>포켓몬 도감 시작하기</StartButton>
      </Link>
    </Container>
  );
};

export default Home;

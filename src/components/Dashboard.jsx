import React from "react";
import styled from "styled-components";
import pokeball from "../img/pokeball.png";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: rgb(255, 0, 0);
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
`;

const ListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const ImgWrap = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const PokeImg = styled.img`
  width: 50px;
  height: 50px;
`;

const Dashboard = () => {
  const myPokemon = useSelector((state) => state.myPokemon);

  const displayPokemons = () => {
    const pokemons = [...myPokemon];

    while (pokemons.length < 6) {
      pokemons.push({ id: null });
    }
    return pokemons;
  };

  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <ListWrap>
        {displayPokemons().map((card, index) => (
          <div key={index}>
            {card.id === null ? (
              <ImgWrap>
                <PokeImg src={pokeball} />
              </ImgWrap>
            ) : (
              <Link to={`/pokemon/${card.id}`} key={card.id}>
                <PokemonCard card={card} toggle={false} />
              </Link>
            )}
          </div>
        ))}
      </ListWrap>
    </Container>
  );
};

export default Dashboard;

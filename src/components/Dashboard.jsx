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

  // myPokemon 배열을 복사하여 6개로 채워 반환하는 함수
  const displayPokemons = () => {
    const pokemons = [...myPokemon];

    // pokemons 배열의 길이가 6이 될 때까지 { id: null } 객체를 추가
    while (pokemons.length < 6) {
      pokemons.push({ id: null });
    }
    return pokemons;
  };

  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <ListWrap>
        {/* displayPokemons 함수에서 반환된 포켓몬 카드 배열을 순회 */}
        {displayPokemons().map((card, index) => (
          // 각 카드가 없을 경우 기본 이미지를, 있을 경우 나의 포켓몬 카드를 표시
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

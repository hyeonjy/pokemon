import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../data/MOCK_DATA";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;

const PokemonList = () => {
  return (
    <Container>
      {/* MOCK_DATA 배열을 순회하여 각 포켓몬 카드를 생성 */}
      {MOCK_DATA.map((card) => (
        <Link to={`/pokemon/${card.id}`} key={card.id}>
          <PokemonCard card={card} toggle={true} />
        </Link>
      ))}
    </Container>
  );
};

export default PokemonList;

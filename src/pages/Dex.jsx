import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Dex = () => {
  const [myPokemon, setMyPokemon] = useState([]);

  return (
    <Container>
      <Dashboard myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
      <PokemonList myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
    </Container>
  );
};

export default Dex;

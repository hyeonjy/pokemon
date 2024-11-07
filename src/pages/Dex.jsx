import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Dex = () => {
  const [myPokemon, setMyPokemon] = useState(() => {
    const savedMyPokemon = localStorage.getItem("MyPokemon");
    return savedMyPokemon ? JSON.parse(savedMyPokemon) : [];
  });

  return (
    <Container>
      <PokemonContext.Provider value={{ myPokemon, setMyPokemon }}>
        <Dashboard />
        <PokemonList />
      </PokemonContext.Provider>
    </Container>
  );
};

export default Dex;

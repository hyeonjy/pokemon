import { createContext, useState, useEffect } from "react";
import { usePokemonActions } from "../components/usePokemonActions";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [myPokemon, setMyPokemon] = useState(() => {
    const savedPokemons = localStorage.getItem("MyPokemon");
    return savedPokemons ? JSON.parse(savedPokemons) : [];
  });

  useEffect(() => {
    localStorage.setItem("MyPokemon", JSON.stringify(myPokemon));
  }, [myPokemon]);

  const { handleAdd, handleDelete } = usePokemonActions(
    myPokemon,
    setMyPokemon
  );

  return (
    <PokemonContext.Provider
      value={{ myPokemon, setMyPokemon, handleAdd, handleDelete }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

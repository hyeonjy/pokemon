import MOCK_DATA from "../MOCK_DATA";
import { toast } from "react-toastify";
import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";

export const usePokemonActions = () => {
  const { myPokemon, setMyPokemon } = useContext(PokemonContext);

  const handleAdd = (e, id) => {
    e.preventDefault();

    const isIncluded = myPokemon.some((pokemon) => pokemon.id === +id);
    if (isIncluded) {
      toast.success("이미 추가된 포켓몬입니다!");
      return;
    }
    if (myPokemon.length < 6) {
      const newPokemon = MOCK_DATA.find((list) => list.id === +id);
      setMyPokemon((prev) => [...prev, newPokemon]);
    } else {
      toast.success("6개까지만 가능!");
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setMyPokemon(myPokemon.filter((list) => list.id !== +id));
  };

  return { handleAdd, handleDelete };
};

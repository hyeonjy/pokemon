import { toast } from "react-toastify";
import MOCK_DATA from "../data/MOCK_DATA";

export const usePokemonActions = ({ myPokemon, setMyPokemon }) => {
  // 나만의 포켓몬 카드 추가
  const handleAdd = (e, id) => {
    e.preventDefault();

    // 이미 추가된 포켓몬 인지 확인
    const isIncluded = myPokemon.some((pokemon) => pokemon.id === id);
    if (isIncluded) {
      toast.success("이미 추가된 포켓몬입니다!");
      return;
    }

    // 포켓몬 카드 개수가 6개 이하인지 확인
    if (myPokemon.length < 6) {
      const newPokemon = MOCK_DATA.find((list) => list.id === id);
      setMyPokemon((prev) => {
        const updatedPokemons = [...prev, newPokemon];
        localStorage.setItem("MyPokemon", JSON.stringify(updatedPokemons));
        return updatedPokemons;
      });
    } else {
      toast.success("6개까지만 가능!");
    }
  };

  // 나만의 포켓몬 카드 삭제
  const handleDelete = (e, id) => {
    e.preventDefault();
    setMyPokemon(() => {
      const updatedPokemons = myPokemon.filter((list) => list.id !== id);
      localStorage.setItem("MyPokemon", JSON.stringify(updatedPokemons));
      return updatedPokemons;
    });
  };

  return { handleAdd, handleDelete };
};

import MOCK_DATA from "../data/MOCK_DATA";
import { toast } from "react-toastify";

export const usePokemonActions = (myPokemon, setMyPokemon) => {
  const handleAdd = (e, id) => {
    e.preventDefault();

    // 이미 추가된 포켓몬인지 확인
    const isIncluded = myPokemon.some((pokemon) => pokemon.id === +id);
    if (isIncluded) {
      toast.success("이미 추가된 포켓몬입니다!");
      return;
    }

    // 포켓몬 카드 개수가 6개 이하인지 확인
    if (myPokemon.length < 6) {
      const newPokemon = MOCK_DATA.find((list) => list.id === +id);
      setMyPokemon((prev) => [...prev, newPokemon]);
    } else {
      toast.success("6개까지만 가능!");
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setMyPokemon((prev) => prev.filter((list) => list.id !== +id));
  };

  return { handleAdd, handleDelete };
};

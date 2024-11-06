import { useDispatch, useSelector } from "react-redux";
import MOCK_DATA from "../MOCK_DATA";
import { add, remove } from "../reducer";
import { toast } from "react-toastify";

export const usePokemonActions = () => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.myPokemon);

  const handleAdd = (e, id) => {
    e.preventDefault();

    const isIncluded = myPokemon.some((pokemon) => pokemon.id === +id);
    if (isIncluded) {
      toast.success("이미 추가된 포켓몬입니다!");
      return;
    }
    if (myPokemon.length < 6) {
      const newPokemon = MOCK_DATA.find((list) => list.id === +id);
      dispatch(add(newPokemon));
    } else {
      toast.success("6개까지만 가능!");
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(remove(id));
  };

  return { handleAdd, handleDelete };
};

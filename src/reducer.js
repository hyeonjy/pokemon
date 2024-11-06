import { createSlice } from "@reduxjs/toolkit";

const myPokemonSlice = createSlice({
  name: "myPokemon",
  initialState: { myPokemon: [] },
  reducers: {
    add: (state, action) => {
      state.myPokemon.push({
        img_url: action.payload.img_url,
        korean_name: action.payload.korean_name,
        id: action.payload.id,
        types: action.payload.types,
        description: action.payload.description,
      });
    },
    remove: (state, action) => {
      return {
        myPokemon: state.myPokemon.filter((list) => list.id !== action.payload),
      };
    },
  },
});

export default myPokemonSlice.reducer;
export const { add, remove } = myPokemonSlice.actions;

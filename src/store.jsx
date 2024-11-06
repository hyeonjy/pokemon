import { configureStore } from "@reduxjs/toolkit";
import myPokemonReducer from "./reducer.js";

const store = configureStore({ reducer: myPokemonReducer });

export default store;

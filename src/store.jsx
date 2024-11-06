import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./reducer.js";

const store = configureStore({ reducer: toDoReducer });

export default store;

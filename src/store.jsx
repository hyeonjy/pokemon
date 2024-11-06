import { configureStore } from "@reduxjs/toolkit";
import myPokemonReducer from "./reducer.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "myPokemon",
  storage,
};

const persistedReducer = persistReducer(persistConfig, myPokemonReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

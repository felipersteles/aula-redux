import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const reducers = combineReducers({
  numeros: (state, action) => {
    console.log("num", state, ",", action);
    return { min: 1, max: 10 };
  },

  nomes: (state, action) => {
    console.log("nome", state, ",", action);
    return ["fElipe", "rodrigo"];
  },
});

const store = configureStore({
  reducer: reducers,
});

export default store;

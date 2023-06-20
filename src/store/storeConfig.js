import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { numerosReducer } from "./reducers/numeros";

const reducers = combineReducers({
  numeros: numerosReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

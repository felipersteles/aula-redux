import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "../action";

const estadoInicial = {
  min: 1,
  max: 10,
};

export const numerosReducer = (state = estadoInicial, action) => {
  // console.log("reducer numeros");
  // console.log("num", state, ",", action);

  switch (action.type) {
    case NUM_MIN_ALTERADO:
      return {
        ...state,
        min: action.payload,
      };
    case NUM_MAX_ALTERADO:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
};

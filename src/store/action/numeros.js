// action creator

import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "./actionTypes";

// recebe o novo numero e altera a
export const alterarMin = (value) => {
  return {
    type: NUM_MIN_ALTERADO,
    payload: value,
  };
};

export const alterarMax = (value) => {
  return {
    type: NUM_MAX_ALTERADO,
    payload: value,
  };
};

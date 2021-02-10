import {
  SET_CURRENT_PALETTE,
  SET_FORMAT,
  SET_LEVEL,
  CREATE_NEW_PALETTE,
  UPDATED_PALETTE,
} from "./actionType";
import paletteCollection from "../Utils/seedcolors";

const initState = {
  level: 500,
  format: "hex",
  palette: [],
  palettes: JSON.parse(window.localStorage.getItem("palettes"))
    ? JSON.parse(window.localStorage.getItem("palettes"))
    : paletteCollection,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_LEVEL:
      return {
        ...state,
        level: payload,
      };
    case SET_FORMAT:
      return {
        ...state,
        format: payload,
      };
    case SET_CURRENT_PALETTE:
      return {
        ...state,
        palette: payload,
      };

    case CREATE_NEW_PALETTE:
      return {
        ...state,
        palettes: [...state.palettes, payload],
      };
    case UPDATED_PALETTE:
      return {
        ...state,
        palettes: payload,
      };
    default:
      return state;
  }
};

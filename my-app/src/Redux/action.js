import {
  SET_CURRENT_PALETTE,
  SET_FORMAT,
  SET_LEVEL,
  CREATE_NEW_PALETTE,
  UPDATED_PALETTE,
} from "./actionType";

export const setLevel = (level) => {
  return {
    type: SET_LEVEL,
    payload: level,
  };
};

export const setFormat = (format) => {
  return {
    type: SET_FORMAT,
    payload: format,
  };
};

export const setCurrentPalette = (palette) => {
  return {
    type: SET_CURRENT_PALETTE,
    payload: palette,
  };
};

export const createNewPalette = (newPalette) => {
  return {
    type: CREATE_NEW_PALETTE,
    payload: newPalette,
  };
};

export const updatePalette = (newPalette) => {
  return {
    type: UPDATED_PALETTE,
    payload: newPalette,
  };
};

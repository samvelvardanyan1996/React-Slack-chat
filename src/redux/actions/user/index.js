import * as actionTypes from "../../types";

export const setUser = (userName) => {
  return {
    type: actionTypes.SET_USER,
    payload: userName
  }
};

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER,
  }
};
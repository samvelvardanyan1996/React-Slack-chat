import * as actionTypes from "../../types";

export const putData = (dataFromServer) => {
  return {
    type: actionTypes.PUT_DATA,
    payload: dataFromServer,
  }
};

export const loadData = () => {
  return {
    type: actionTypes.LOAD_DATA,
  }
}
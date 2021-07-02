import * as actionTypes from "../../types";

const initialUserState = {
  currentUser: null,
  isLoading: true
};

export const user_reducer = (state = initialUserState, action) => {
  switch(action.type){
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload,
        isLoading: false
      };
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false
      }
    default: {
      return state;
    }
  }
}
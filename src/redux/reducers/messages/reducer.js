import * as actionTypes from "../../types";

const initialChannelsState = {
  allMessages: []
};

export const messages_reducer = (state = initialChannelsState, action) => {
  switch(action.type){
    case actionTypes.PUT_MESSAGES_DATA:
      return {
        ...state,
        allMessages: action.payload
      };
    default: {
      return state;
    }
  }

}
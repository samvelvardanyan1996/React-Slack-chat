import * as actionTypes from "../../types";

const initialChannelsState = {
  allChannels: []
};

export const channels_reducer = (state = initialChannelsState, action) => {
  switch(action.type){
    case actionTypes.PUT_DATA:
      return {
        ...state,
        allChannels: action.payload
      };
    default: {
      return state;
    }
  }

}
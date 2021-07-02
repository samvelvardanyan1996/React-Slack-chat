import * as actionTypes from "../../types";

const initialChannelNameState = {
  activeChannel: "",
  channelName:   "",
  channelDetails: "",
};

export const channel_reducer = (state = initialChannelNameState, action) => {
  switch(action.type){
    case actionTypes.SET_ACTIVE_CHANNEL:
      return {
        ...state,
        activeChannel: action.payload
      };
    case actionTypes.SET_CHANNEL_NAME:
      return {
        ...state,
        channelName: action.payload
      };
    case actionTypes.SET_CHANNEL_DETAILS:
      return {
        ...state,
        channelDetails: action.payload
      };
    default: {
      return state;
    }
  }

}
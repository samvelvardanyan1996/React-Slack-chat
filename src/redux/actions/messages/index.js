import * as actionTypes from "../../types";

export const putMessagesData = (dataFromServer) => {
  return {
    type: actionTypes.PUT_MESSAGES_DATA,
    payload: dataFromServer,
  }
};

export const loadMessagesData = (channelId) => {
  return {
    type: actionTypes.LOAD_MESSAGES_DATA,
    payload: channelId
  }
}
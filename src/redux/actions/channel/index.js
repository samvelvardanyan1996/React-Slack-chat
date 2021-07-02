import * as actionTypes from "../../types";

export const setActiveChannel = (nameChannel) => {
  return {
    type: actionTypes.SET_ACTIVE_CHANNEL,
    payload: nameChannel,
  }
};

export const setChannelName = (nameChannel) => {
  return {
    type: actionTypes.SET_CHANNEL_NAME,
    payload: nameChannel,
  }
};

export const setChannelDetails = (channelDetails) => {
  return {
    type: actionTypes.SET_CHANNEL_DETAILS,
    payload: channelDetails,
  }
};
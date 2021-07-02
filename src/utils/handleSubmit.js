import { loadData } from "../redux/actions/channels";
import { isFormValid } from "../utils/isFormValid";
import { addChannel } from "./addChannel";

export const handleSubmit = (event, sendObj) => {
  const { channelName, channelDetails, dispatch } = sendObj;
  event.preventDefault();
  if( isFormValid(channelName, channelDetails) ){
    addChannel(sendObj);
    dispatch(loadData())
  }
}
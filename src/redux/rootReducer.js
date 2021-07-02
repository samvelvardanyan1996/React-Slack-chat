import { combineReducers } from "redux";
import { user_reducer } from "./reducers/user/reducer";
import { channels_reducer } from "./reducers/channels/reducer";
import { messages_reducer } from "./reducers/messages/reducer";
import { channel_reducer } from "./reducers/channel/reducer";


const rootReducer = combineReducers({
  user:     user_reducer,
  channels: channels_reducer,
  messages: messages_reducer,
  channel:  channel_reducer,
});



export default rootReducer;
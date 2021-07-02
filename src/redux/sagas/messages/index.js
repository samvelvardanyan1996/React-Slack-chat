import { takeEvery, put, call } from "@redux-saga/core/effects";
import { LOAD_MESSAGES_DATA } from "../../types";
import { putMessagesData } from "../../actions/messages";


function fetchData(channelId){
  return ( 
    fetch("https://react-firebase-32f50-default-rtdb.firebaseio.com/messages/" + channelId + ".json")
      .then(response => response.json())
  );
}

function* workerLoadMessagesData(data){
  let LoadMessagesData = yield fetchData(data.payload);
  if(LoadMessagesData === null || LoadMessagesData === undefined || LoadMessagesData === {}){
    LoadMessagesData = {empty: "empty"};
  }
  else{
    LoadMessagesData = Object.values(LoadMessagesData);
  }
  yield put(putMessagesData(LoadMessagesData));
}

export function* watchLoadMessagesData(){
  yield takeEvery (LOAD_MESSAGES_DATA, workerLoadMessagesData)
}

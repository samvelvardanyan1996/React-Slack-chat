import { takeEvery, put, call } from "@redux-saga/core/effects";
import { LOAD_DATA } from "../../types";
import { putData } from "../../actions/channels";

function fetchData(){
  return ( 
    fetch('https://react-firebase-32f50-default-rtdb.firebaseio.com/channels.json')
      .then(response => response.json())
  );
}

function* workerLoadData(){
  let data = yield call(fetchData);
  if(data === null || data === undefined || data === {}){
    data = {empty: "empty"};
  }
  else{
    data = Object.values(data);
  }
  yield put(putData(data));
}

export function* watchLoadData(){
  yield takeEvery(LOAD_DATA, workerLoadData);
}
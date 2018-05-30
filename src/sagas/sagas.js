import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { CLICK_UPDATE_VALUE } from "../constants/click";

export function* watcherSaga() {
  yield takeLatest(CLICK_UPDATE_VALUE, workerSaga);
}

function* workerSaga(action) {
  console.log("Hello there!");
  console.log("We are on saga middleware");
  console.log("action", action);
}

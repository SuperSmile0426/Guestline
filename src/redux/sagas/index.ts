import { all } from "redux-saga/effects";

import hotelSagas from "./hotel";
import roomSagas from "./room";

function* rootSaga() {
  yield all([...hotelSagas, ...roomSagas]);
}

export default rootSaga;


import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { AppActions } from "redux/store";

import { makeAPIRequst } from "utils";

import * as AppActionTypes from "../../types";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getRoomsRequestSaga(
  action: PayloadAction<AppActionTypes.Room.IGetRoomsOfHotel2RequestAction>
) {
  try {
    const result: ResponseGenerator = yield call(async () => {
      return await makeAPIRequst("roomRates/OBMNG/OBMNG2", "GET");
    });

    yield put(AppActions.room.getRoomsOfHotel2Success(result.data));

    if (action.payload.next) {
      action.payload.next();
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const reasonCode: string = error.request?.data.reason;
      if (reasonCode && action.payload.errors) {
        const errorHandler: () => void = action.payload.errors[reasonCode];
        errorHandler();
      }
    }
  }
}

export default (function* () {
  yield takeEvery("room/getRoomsOfHotel2Request", getRoomsRequestSaga);
})();

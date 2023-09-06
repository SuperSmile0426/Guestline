import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddlware from "redux-saga";

import {
  loadingReducer,
  loadingActions,
} from "./slices";

const reducer = combineReducers({
  loading: loadingReducer,
});

const sagaMiddleware = createSagaMiddlware();

export const store = configureStore({
  preloadedState: {},
  reducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware
    )
});

export const AppActions = {
  loading: loadingActions,
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
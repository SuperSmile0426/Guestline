import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IHotel } from "models";

import * as AppActionTypes from "../types";

type HotelState = {
  hotels: IHotel[];
};

const initialState: HotelState = {
  hotels: [] as IHotel[],
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState: initialState,
  reducers: {
    getHotelsRequest(
      _state: HotelState,
      _action: PayloadAction<AppActionTypes.Hotel.IGetHotelsRequestAction>
    ) {},
    getHotelsSuccess(
      state: HotelState,
      action: PayloadAction<AppActionTypes.Hotel.IGetHotelsSuccessAction>
    ) {
      state.hotels = [...action.payload];
    },
    getHotelsFailure(_state: HotelState) {},
  },
});

export const actions = hotelSlice.actions;
export const reducer = hotelSlice.reducer;

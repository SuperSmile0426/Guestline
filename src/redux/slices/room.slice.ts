import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IRoom } from "models";

import * as AppActionTypes from "../types";

type RoomState = {
  roomsOfHotel1: IRoom[];
  roomsOfHotel2: IRoom[];
  roomsOfHotel3: IRoom[];
  roomsOfHotel4: IRoom[];
};

const initialState: RoomState = {
  roomsOfHotel1: [],
  roomsOfHotel2: [],
  roomsOfHotel3: [],
  roomsOfHotel4: [],
};

const roomSlice = createSlice({
  name: "room",
  initialState: initialState,
  reducers: {
    // getRoomsOfHotel1
    getRoomsOfHotel1Request(
      _state: RoomState,
      _action: PayloadAction<AppActionTypes.Room.IGetRoomsOfHotel1RequestAction>
    ) {},
    getRoomsOfHotel1Success(
      state: RoomState,
      action: PayloadAction<AppActionTypes.Room.IGetRoomsOfHotel1SuccessAction>
    ) {
      state.roomsOfHotel1 = action.payload.rooms;
    },
    getRoomsOfHotel1Failure(_state: RoomState) {},

    // getRoomsOfHotel2
    getRoomsOfHotel2Request(
      _state: RoomState,
      _action: PayloadAction<AppActionTypes.Room.IGetRoomsOfHotel2RequestAction>
    ) {},
    getRoomsOfHotel2Success(
      state: RoomState,
      action: PayloadAction<AppActionTypes.Room.IGetRoomsOfHotel2SuccessAction>
    ) {
      state.roomsOfHotel2 = action.payload.rooms;
    },
    getRoomsOfHotel2Failure(_state: RoomState) {},

    // getRoomsOfHotel3
    getRoomsOfHotel3Request(
      _state: RoomState,
      _action: PayloadAction<AppActionTypes.Room.IGetRoomsOfHotel3RequestAction>
    ) {},
    getRoomsOfHotel3Success(
      state: RoomState,
      action: PayloadAction<AppActionTypes.Room.IGetRoomsOfHotel3SuccessAction>
    ) {
      state.roomsOfHotel3 = action.payload.rooms;
    },
    getRoomsOfHotel3Failure(_state: RoomState) {},

    // getRoomsOfHotel4
    getRoomsOfHotel4Request(
      _state: RoomState,
      _action: PayloadAction<AppActionTypes.Room.IGetRoomsOfHotel4RequestAction>
    ) {},
    getRoomsOfHotel4Success(
      state: RoomState,
      action: PayloadAction<AppActionTypes.Room.IGetRoomsOfHotel4SuccessAction>
    ) {
      state.roomsOfHotel4 = action.payload.rooms;
    },
    getRoomsOfHotel4Failure(_state: RoomState) {},
  },
});

export const actions = roomSlice.actions;
export const reducer = roomSlice.reducer;

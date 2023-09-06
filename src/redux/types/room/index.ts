import { IRoom } from "models";

import { IAction } from "../action";

export type IGetRoomsOfHotel1RequestAction = IAction;
export type IGetRoomsOfHotel1SuccessAction = IAction & { rooms: IRoom[] };

export type IGetRoomsOfHotel2RequestAction = IAction;
export type IGetRoomsOfHotel2SuccessAction = IAction & { rooms: IRoom[] };

export type IGetRoomsOfHotel3RequestAction = IAction;
export type IGetRoomsOfHotel3SuccessAction = IAction & { rooms: IRoom[] };

export type IGetRoomsOfHotel4RequestAction = IAction;
export type IGetRoomsOfHotel4SuccessAction = IAction & { rooms: IRoom[] };

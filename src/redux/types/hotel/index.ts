import { IHotel } from "models";

import { IAction } from "../action";

export type IGetHotelsRequestAction = IAction;
export type IGetHotelsSuccessAction = IHotel[];

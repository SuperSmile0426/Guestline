import { IOccupancy } from "./occupancy.model";

export interface IRoom {
  id: string;
  name: string;
  occupancy: IOccupancy;
  longDescription: string;
}

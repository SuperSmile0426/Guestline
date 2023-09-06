import { IImage } from "./image.model";

export interface IHotel {
  id: string;
  name: string;
  address1: string;
  address2: string;
  starRating: string;
  images: IImage[];
}

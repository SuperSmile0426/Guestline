import React from "react";

import { IHotel } from "models";

import { DashboardViewStyle } from "./index.style";

import { ControlBarComponent, CardComponent, LoaderComponent } from "components/common";

export const DashboardView: React.FC = () => {
  const [rating, setRating] = React.useState<number>(0);
  const [adult, setAdult] = React.useState<number>(0);
  const [children, setChildren] = React.useState<number>(0);

  const setRatingHandler = (value: number) => {
    setRating(value);
  }

  const setAdultHandler = (value: number) => {
    setAdult(value);
  }

  const setChildrenHandler = (value: number) => {
    setChildren(value);
  }

  const mockUpHotelData: IHotel = {
    id: "OBMNG1",
    name: "DBM Hotel 1",
    address1: "Cajarc Blue Hotel",
    address2: "51 Bedford St",
    starRating: "4",
    images: [
      {
        "url": "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG1/282214329.jpeg"
      },
      {
          "url": "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG1/london-hotels-with-a-view-1614348818.jpeg"
      },
      {
          "url": "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG1/Hotel1.JPG"
      }
    ]
  }
  return(
    <DashboardViewStyle>
      <div className="controlbar-container">
        <ControlBarComponent setRating={setRatingHandler} setAdult={setAdultHandler} setChildren={setChildrenHandler} />
      </div>
      <div className="content-container">
        <CardComponent hotels={mockUpHotelData} />
      </div>
    </DashboardViewStyle>
  )
}
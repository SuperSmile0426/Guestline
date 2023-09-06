import React from "react";

import { IHotel } from "models";

import { CarouselComponent, RatingComponent } from "components";

import { CardComponentStyle } from "./index.style";

type CardComponentProps = {
  hotels: IHotel,
}

export const CardComponent: React.FC<CardComponentProps> = ({ hotels }) => {
  return (
    <CardComponentStyle>
      <div className="card-header">
        <div className="left-section">
          <CarouselComponent images={hotels.images} />
        </div>
        <div className="right-section">
          <div className="title">
            <h1>{hotels.name}</h1>
            <h3>{hotels.address1}</h3>
            <h3>{hotels.address2}</h3>
          </div>
          <div className="rating">
            <RatingComponent rating={hotels.starRating} readOnly={true} />
          </div>
        </div>
      </div>
      <div className="card-footer" />
    </CardComponentStyle>
  )
}


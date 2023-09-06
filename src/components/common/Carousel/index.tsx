import React from "react";
import Carousel from "react-material-ui-carousel";

import { IImage } from "models";

import { CarouselComponentStyle } from "./index.style";

type CarouselComponentProps = {
  images: IImage[]
}

export const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  return (
    <CarouselComponentStyle>
      <Carousel duration={1}>
        {images.map((item, index) => (
          <img className="carousel-img" alt="images" key={index} src={item.url} />
        ))}
      </Carousel>
    </CarouselComponentStyle>
  )
}
import React from "react";

import { CounterComponent } from "./Counter";
import { RatingComponent } from "components";

import { ControlBarComponentStyle } from "./index.style";

type ControlBarComponentProps = {
  setRating: (value: number) => void;
  setAdult: (value: number) => void;
  setChildren: (value: number) => void;
};

export const ControlBarComponent: React.FC<ControlBarComponentProps> = ({
  setRating,
  setAdult,
  setChildren
}) => {
  return (
    <ControlBarComponentStyle>
      <RatingComponent setRating={setRating} readOnly={false} />
      <CounterComponent setAdult={setAdult} title="Adult" />
      <CounterComponent setChildren={setChildren} title="Children" />
    </ControlBarComponentStyle>
  )
}
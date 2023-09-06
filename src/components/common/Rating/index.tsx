import React from "react";
import Rating from "@mui/material/Rating/Rating";

import { RatingComponentStyle } from "./index.style";

type RatingComponentProps = {
  rating?: string
  readOnly: boolean
  setRating?: (value: number) => void
}

export const RatingComponent: React.FC<RatingComponentProps> = ({ rating, readOnly, setRating }) => {
  const [value, setValue] = React.useState<number | null>(0);

  const onChangeHandler = (event: React.SyntheticEvent<Element, Event>, newValue: React.SetStateAction<number | null>) => {
    setValue(newValue);
    setRating && setRating(newValue as number);
  }

  return (
    <RatingComponentStyle>
      {
        readOnly ?
          <Rating
            name="rating-contoller"
            value={Number(rating)}
            readOnly
          />
          :
          <Rating
            name="rating-contoller"
            value={value}
            onChange={onChangeHandler}
          />
      }
    </RatingComponentStyle>
  )
}
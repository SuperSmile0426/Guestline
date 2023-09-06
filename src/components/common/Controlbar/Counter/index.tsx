import React from "react";
import { IconButton, Typography } from "@mui/material"
import { AddCircle, RemoveCircle } from '@mui/icons-material';

import { CounterComponentStyle } from "./index.style";

type CounterComponentProps = {
  title: string;
  setAdult?: (value: number) => void;
  setChildren?: (value: number) => void;
}

export const CounterComponent: React.FC<CounterComponentProps> = ({ title, setAdult, setChildren }) => {
  const [count, setCount] = React.useState<number>(0);

  const increaseCountHandler = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const decreaseCountHandler = () => {
    setCount((prevCount) => prevCount - 1);
  }

  React.useEffect(() => {
    if (title === "Adult" && setAdult) {
      setAdult(count);
    } else if (setChildren) {
      setChildren(count);
    }
  }, [count, setAdult, setChildren, title]);

  return (
    <CounterComponentStyle>
      <div className="increase">
        <label htmlFor="">{title}: </label>
        <IconButton color="success" aria-label="add an alarm" onClick={increaseCountHandler}>
          <AddCircle />
        </IconButton>
      </div>
      <div className="value">
        <Typography>{count}</Typography>
      </div>
      <div className="decrease">
        {count === 0 ?
          <IconButton color="error" aria-label="add an alarm" onClick={decreaseCountHandler} disabled>
            <RemoveCircle />
          </IconButton>
          :
          <IconButton color="error" aria-label="add an alarm" onClick={decreaseCountHandler}>
            <RemoveCircle />
          </IconButton>
        }
      </div>
    </CounterComponentStyle>
  )
}
import { styled } from "@mui/material";

import { BDTheme } from "types";

export const RatingComponentStyle = styled("div")(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    display: "flex",
    alignItems: "center",
  };
});

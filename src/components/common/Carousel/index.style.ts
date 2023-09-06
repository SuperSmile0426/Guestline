import { styled } from "@mui/material";

import { BDTheme } from "types";

export const CarouselComponentStyle = styled("div")(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    ".carousel-img": {
      borderRadius: "7px",
      width: bdTheme.primaryImageWidth,
      height: bdTheme.primaryImageHeight,
    },

    ".css-1m9128y": {
      position: "absolute",
      bottom: "5px",
      zIndex: "1000",
    },
  };
});

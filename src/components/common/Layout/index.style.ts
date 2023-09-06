import { styled } from "@mui/material";

import { BDTheme } from "types";

export const LayoutComponentStyle = styled("div")(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    display: "flex",
    flexDirection: "column",

    ".container": {
      display: "flex",
      flexDirection: "column",
      padding: "2.5rem",
    },
  };
});

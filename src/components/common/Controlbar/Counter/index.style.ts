import { styled } from "@mui/material";

import { BDTheme } from "types";

export const CounterComponentStyle = styled("div")(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    display: "flex",
    flexDirection: "row",
    gap: "5px",

    ".increase": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "5rem",
    },

    ".value": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "2rem",
    },

    ".decrease": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "2rem",
    },
  };
});

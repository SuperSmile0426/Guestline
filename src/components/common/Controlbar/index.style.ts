import { styled } from "@mui/material";

import { BDTheme } from "types";

export const ControlBarComponentStyle = styled("div")(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2rem",
    backgroundColor: bdTheme.colors.lightBlue,
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    padding: "0 50px 0 50px",

    [bdTheme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "15rem",
      gap: "1px",
      padding: "5px",
    },
  };
});

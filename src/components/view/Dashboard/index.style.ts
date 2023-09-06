import { styled } from "@mui/material";

import { BDTheme } from "types";

export const DashboardViewStyle = styled("div")(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",

    ".controlbar-container": {
      display: "flex",
      justifyContent: "center",
      position: "sticky",
      top: "10px",
      zIndex: "10000",
    },

    ".content-container": {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
  };
});

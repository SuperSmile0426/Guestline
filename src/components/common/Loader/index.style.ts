import { styled, keyframes } from "@mui/material";

import { BDTheme } from "types";

export const LoaderComponentStyle = styled("div")(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  const pageLoagingKeyFrame = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;
  return {
    display: "flex",
    justifyContent: "center",

    ".loader-container": {
      display: "inline-block",
      position: "relative",
      top: "200px",
      width: "80px",
      height: "80px",

      [bdTheme.breakpoints.down("md")]: {
        top: "175px",
      },

      [bdTheme.breakpoints.down("sm")]: {
        top: "150px",
      },

      "&::after": {
        content: '" "',
        display: "block",
        width: "64px",
        height: "64px",
        margin: "8px",
        borderRadius: "50%",
        border: `6px solid ${bdTheme.colors.iris}`,
        borderColor: `${bdTheme.colors.iris} transparent ${bdTheme.colors.iris} transparent`,
        animation: `${pageLoagingKeyFrame} 1.2s linear infinite`,
      },
    },
  };
});

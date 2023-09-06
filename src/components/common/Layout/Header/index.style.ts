import { styled } from "@mui/material";

import { BDTheme } from "types";

export const HeaderSectionStyle = styled("div")(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    width: "100%",
    backgroundColor: bdTheme.colors.iris,
    padding: "50px 0 50px 37px",
    color: bdTheme.colors.white,
    boxSizing: "border-box",
    boxShadow:
      "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  };
});

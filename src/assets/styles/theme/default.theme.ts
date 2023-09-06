import { createTheme } from "@mui/material/styles";

import { defaultColors } from "./default";
import { ImageURLs, ImageSize, ThemeColors } from "types";

const themeColors: ThemeColors = {
  colors: {
    ...defaultColors,
  },

  textFont: {
    mainFont: "Helvetica",
    oneFont: "Articulat CF",
  },

  textWeight: {
    light: "300",
    regular: "500",
    semibold: "700",
  },
};

const imageURLs: ImageURLs = {
  primaryLogoImg:
    "https://www.guestline.com/wp-content/uploads/2019/02/logo-white.png",
};

const imageSize: ImageSize = {
  primaryImageWidth: "100%",
  primaryImageHeight: "150px",
};

export const defaultTheme = createTheme({
  ...themeColors,
  ...imageURLs,
  ...imageSize,
  palette: {
    mode: "light",
  },
});

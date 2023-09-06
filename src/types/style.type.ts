import { Theme } from "@mui/material";

export type ThemeColors = {
  colors: Record<string, string>;
  textFont: {
    mainFont: string;
    oneFont: string;
  };
  textWeight: {
    light: string;
    regular: string;
    semibold: string;
  };
};

export type ImageURLs = {
  primaryLogoImg: string;
};

export type ImageSize = {
  primaryImageWidth: string;
  primaryImageHeight: string;
};

export interface BDTheme extends Theme, ThemeColors, ImageURLs, ImageSize {}

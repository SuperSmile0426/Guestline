import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles";

import { PATH } from "./consts";
import { DashboardPage } from "pages";

import { defaultTheme } from "assets";

export const App: React.FC = () => {
  const theme: Theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={PATH.INDEX} element={<DashboardPage />} />
      </Routes>
    </ThemeProvider>
  )
}
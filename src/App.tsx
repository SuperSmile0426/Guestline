import React from "react";
import { Routes, Route } from "react-router-dom";

import { PATH } from "./consts";
import { DashboardPage } from "pages";

export const App: React.FC = () => {
  return (
      <Routes>
        <Route path={PATH.INDEX} element={<DashboardPage />} />
      </Routes>
  )
}
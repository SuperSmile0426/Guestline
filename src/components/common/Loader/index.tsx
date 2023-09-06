import React from "react";

import { LoaderComponentStyle } from "./index.style";

export const LoaderComponent: React.FC = () => {
  return (
    <LoaderComponentStyle>
      <div className="loader-container"></div>
    </LoaderComponentStyle>
  )
}
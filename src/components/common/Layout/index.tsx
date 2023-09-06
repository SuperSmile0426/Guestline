import React from "react";

import { LayoutComponentStyle } from "./index.style";

import { HeaderSection } from "./Header";

interface LayoutProps {
  children?: React.ReactNode
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutComponentStyle>
      <HeaderSection />
      <div className="container">{children}</div>
    </LayoutComponentStyle>
  )
}

export const WithLayout = (Component: React.FC) => () => {
  return (
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  )
}
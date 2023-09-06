import React from "react";

import { DashboardContainer } from "containers";

import { WithLayout } from "components/common";

const Dashboard: React.FC = () => {
  return (
    <div>
      <DashboardContainer />
    </div>
  )
}

export const DashboardPage = WithLayout(Dashboard);
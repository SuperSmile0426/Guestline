import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppActions, AppDispatch } from "redux/store";

import { DashboardView } from "components";

export const DashboardContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { hotels } = useSelector((state: RootState) => state.hotel);

  React.useEffect(() => {
    dispatch(AppActions.hotel.getHotelsRequest({}));
  }, [dispatch]);

  return (
    <div>
      <DashboardView hotels={hotels} />
    </div>
  )
}
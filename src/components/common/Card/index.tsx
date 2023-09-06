import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppActions, AppDispatch } from "redux/store";

import { IHotel } from "models";

import { CarouselComponent, RatingComponent } from "components";

import { CardComponentStyle } from "./index.style";

type CardComponentProps = {
  hotels: IHotel,
  index: number,
  adult: number,
  children: number
}

export const CardComponent: React.FC<CardComponentProps> = ({ hotels, index, adult, children }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { roomsOfHotel1 } = useSelector((state: RootState) => state.room);
  const { roomsOfHotel2 } = useSelector((state: RootState) => state.room);
  const { roomsOfHotel3 } = useSelector((state: RootState) => state.room);
  const { roomsOfHotel4 } = useSelector((state: RootState) => state.room);

  React.useEffect(() => {
    dispatch(AppActions.room.getRoomsOfHotel1Request({}));
    dispatch(AppActions.room.getRoomsOfHotel2Request({}));
    dispatch(AppActions.room.getRoomsOfHotel3Request({}));
    dispatch(AppActions.room.getRoomsOfHotel4Request({}));
  }, [dispatch, hotels]);

  return (
    <CardComponentStyle>
      <div className="card-header">
        <div className="left-section">
          <CarouselComponent images={hotels.images} />
        </div>
        <div className="right-section">
          <div className="title">
            <h1>{hotels.name}</h1>
            <h3>{hotels.address1}</h3>
            <h3>{hotels.address2}</h3>
          </div>
          <div className="rating">
            <RatingComponent rating={hotels.starRating} readOnly={true} />
          </div>
        </div>
      </div>
      {
        hotels.id === "OBMNG1" ? (
          <div>
            {
              !!roomsOfHotel1.length && roomsOfHotel1.map((room, index) =>
                <div key={index}>
                  {
                    room.occupancy.maxAdults >= adult && room.occupancy.maxChildren >= children ? (
                      <div className="card-body">
                        <div className="room">
                          <div className="room-title">
                            <h3>{room.name}</h3>
                            <h5>Adults: {room.occupancy.maxAdults}</h5>
                            <h5>Children: {room.occupancy.maxChildren}</h5>
                          </div>
                          <div className="room-info">
                            <p>
                              {room.longDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )
                  }
                </div>
              )
            }
          </div>
        ) : (
          hotels.id === "OBMNG2" ? (
            <div>
              {
                !!roomsOfHotel2.length && roomsOfHotel2.map((room, index) =>
                  <div key={index}>
                    {
                      room.occupancy.maxAdults >= adult && room.occupancy.maxChildren >= children ? (
                        <div className="card-body">
                          <div className="room">
                            <div className="room-title">
                              <h3>{room.name}</h3>
                              <h5>Adults: {room.occupancy.maxAdults}</h5>
                              <h5>Children: {room.occupancy.maxChildren}</h5>
                            </div>
                            <div className="room-info">
                              <p>
                                {room.longDescription}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )
                    }
                  </div>
                )
              }
            </div>
          ) : (
            hotels.id === "OBMNG3" ? (
              <div>
                {
                  !!roomsOfHotel3.length && roomsOfHotel3.map((room, index) =>
                    <div key={index}>
                      {
                        room.occupancy.maxAdults >= adult && room.occupancy.maxChildren >= children ? (
                          <div className="card-body">
                            <div className="room">
                              <div className="room-title">
                                <h3>{room.name}</h3>
                                <h5>Adults: {room.occupancy.maxAdults}</h5>
                                <h5>Children: {room.occupancy.maxChildren}</h5>
                              </div>
                              <div className="room-info">
                                <p>
                                  {room.longDescription}
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )
                      }
                    </div>
                  )
                }
              </div>
            ) : (
              hotels.id === "OBMNG4" ? (
                <div>
                  {
                    !!roomsOfHotel4.length && roomsOfHotel4.map((room, index) =>
                      <div key={index}>
                        {
                          room.occupancy.maxAdults >= adult && room.occupancy.maxChildren >= children ? (
                            <div className="card-body">
                              <div className="room">
                                <div className="room-title">
                                  <h3>{room.name}</h3>
                                  <h5>Adults: {room.occupancy.maxAdults}</h5>
                                  <h5>Children: {room.occupancy.maxChildren}</h5>
                                </div>
                                <div className="room-info">
                                  <p>
                                    {room.longDescription}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div></div>
                          )
                        }
                      </div>
                    )
                  }
                </div>
              ) : (
                <div></div>
              )
            )
          )
        )
      }
      <div className="card-footer" /><div />
    </CardComponentStyle>
  )
}


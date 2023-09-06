import { makeInstance } from "./instance";

export const mainApiInstance = makeInstance(
  process.env.REACT_APP_SERVER_API || ""
);

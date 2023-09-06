export type IAction = {
  next?: (...args: any) => void;
  errors?: any;
};

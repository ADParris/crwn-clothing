import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";

const loggerMiddleware: Middleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    if (!action.type) {
      return next(action);
    }

    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("currentState: ", store.getState());

    next(action);

    console.log("nextState: ", store.getState());
  };

export default loggerMiddleware;

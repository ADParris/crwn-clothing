import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// const loggerMiddleware = (store: RootState) => (next: any) => (action: any) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("currentState: ", store.getState());

//   next(action);

//   console.log("nextState: ", store.getState());
// };

const middlewares = [logger];

const composedMiddlewares = compose(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, undefined, composedMiddlewares);

export type RootState = ReturnType<typeof rootReducer>;

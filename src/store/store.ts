import {
  Middleware,
  Store,
  applyMiddleware,
  compose,
  createStore,
} from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { RootState, rootReducer } from "./root-reducer";

interface PersistConfig {
  key: string;
  storage: typeof storage;
  whitelist: string[];
}

const persistConfig: PersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares: Middleware[] =
  process.env.NODE_ENV !== "production" ? [logger, thunk] : [];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedMiddlewares = composeEnhancer(applyMiddleware(...middlewares));

export const store: Store<RootState> = createStore(
  persistedReducer,
  undefined,
  composedMiddlewares
);

export const persistor = persistStore(store);

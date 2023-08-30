import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const anchorPointRoot = document.getElementById("root");
const root = anchorPointRoot ? createRoot(anchorPointRoot) : null;
root?.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

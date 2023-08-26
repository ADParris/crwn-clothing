import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { UserProvider } from "./contexts/user.context";
import "./index.scss";

const anchorPointRoot = document.getElementById("root");
const root = anchorPointRoot ? createRoot(anchorPointRoot) : null;
root?.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);

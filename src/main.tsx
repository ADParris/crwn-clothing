import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const anchorPointRoot = document.getElementById("root");
const root = anchorPointRoot ? createRoot(anchorPointRoot) : null;
root?.render(
  <StrictMode>
    <App />
  </StrictMode>
);

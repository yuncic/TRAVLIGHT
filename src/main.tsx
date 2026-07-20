import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./Root";
import { initAnalytics } from "./lib/analytics";
import "./index.css";

initAnalytics();

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("#root element not found");

createRoot(rootEl).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import CounterState from "./context/CounterState";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CounterState>
      <App />
    </CounterState>
  </StrictMode>
);

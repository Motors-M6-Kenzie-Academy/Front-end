import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AdsProvider from "./contexts/AdsContexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AdsProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </AdsProvider>
  </React.StrictMode>
);

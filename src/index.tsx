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
<<<<<<< HEAD
    <AdsProvider>
    <BrowserRouter>
      <App/>
=======
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/private" element={<PrivateRout />} />
      </Routes>
>>>>>>> bbe8cb68ff97ed56dc8242f3fb05141a757748a0
    </BrowserRouter>
    </AdsProvider>
  </React.StrictMode>
);

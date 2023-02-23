import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/globalStyles";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Imports dos components das rotas
import { SignIn } from "./pages/SignIn";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { PrivateRout } from "./pages/PrivateRoute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/private" element={<PrivateRout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

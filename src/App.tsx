import GlobalStyle from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Register } from "./pages/Register";
import { PrivateRout } from "./pages/PrivateRoute";
import AdsProvider from "./contexts/AdsContexts";
import UserProvider from "./contexts/UserContexts";
import AdPage from "./pages/Ad";
import CommnetsProvider from "./contexts/CommentsContext";

function App() {
  return (
    <UserProvider>
      <AdsProvider>
        <CommnetsProvider>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ad" element={<AdPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/private" element={<PrivateRout />} />
          </Routes>
        </CommnetsProvider>
      </AdsProvider>
    </UserProvider>
  );
}

export default App;

import GlobalStyle from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Register } from "./pages/Register";
import { PrivateRout } from "./pages/PrivateRoute";
import AdsProvider from "./contexts/AdsContexts";
import UserProvider from "./contexts/UserContexts";
import AdPage from "./pages/Ad";

function App() {
  return (
    <UserProvider>
      <AdsProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ad" element={<AdPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/private" element={<PrivateRout />} />
        </Routes>
      </AdsProvider>
    </UserProvider>
  );
}

export default App;

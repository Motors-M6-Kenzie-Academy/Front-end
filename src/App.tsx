import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ModalImg from "./components/ModalImg";
import ProductCardAuction from "./components/ProductCardAuction";
import { Button } from "./components/Button";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/globalStyles";
import InputContainer from "./components/Imputs";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <InputContainer
        label="Email"
        placeHolder="email@email.com"
        typeInput="email"
      />
      {/* <ProductCard /> */}
      {/* <ProductCardAuction />  */}
      <Footer />
      {/* <ModalImg /> */}
    </>
  );
}

export default App;

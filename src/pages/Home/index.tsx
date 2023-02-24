import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductCardAuction from "../../components/ProductCardAuction";
import { Button, Container, MainContainer } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Navbar />
      <MainContainer>
        <div className="top">
          <h1>
            Velocidade e experiência em um <span>lugar feito para você</span>
          </h1>
          <p>Um ambiente feito para você explorar o seu melhor</p>
          <div>
            <Link to={"#cars"}>
              <Button bgColor="transparent" txColor="white" border={true}>
                Carros
              </Button>
            </Link>
            <Link to={"#motorsbike"}>
              <Button bgColor="transparent" txColor="white" border={true}>
                Motos
              </Button>
            </Link>
          </div>
        </div>

        <div className="leilao" id="leilao">
          <h2 className="title-section">Leilão</h2>
          <div className="scroll-card">
            <ProductCardAuction />
            <ProductCardAuction />
            <ProductCardAuction />
            <ProductCardAuction />
            <ProductCardAuction />
            <ProductCardAuction />
          </div>
        </div>
        <div className="cars" id="cars"></div>
        <div className="motorsbike" id="motorsbike"></div>
      </MainContainer>
      <Footer />
    </Container>
  );
};

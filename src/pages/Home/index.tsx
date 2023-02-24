import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
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
            <Link to={"/"}>
              <Button
                bgColor="transparent"
                txColor="white"
                border={true}
                onClick={() =>
                  window.scrollTo({ left: 0, top: 1200, behavior: "smooth" })
                }
              >
                Carros
              </Button>
            </Link>
            <Link to={"/"}>
              <Button
                bgColor="transparent"
                txColor="white"
                border={true}
                onClick={() =>
                  window.scrollTo({ left: 0, top: 2000, behavior: "smooth" })
                }
              >
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
          </div>
        </div>
        <div className="cars" id="cars">
          <h2 className="title-section">Carros</h2>
          <div className="scroll-card-cars">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="motorsbike" id="motorsbike">
          <h2 className="title-section">Motos</h2>
          <div className="scroll-card-motorsbike">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </MainContainer>
      <Footer />
    </Container>
  );
};

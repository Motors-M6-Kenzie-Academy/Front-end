import { useContext } from "react";
import { Link } from "react-router-dom";
import BannerCreateAds from "../../components/BannerCreateAds";
import Footer from "../../components/Footer";
import Modal from "../../components/ModalAds";
import Navbar from "../../components/Navbar";
import ProductCardAuction from "../../components/ProductCardAuction";
import { UserContext } from "../../contexts/UserContexts";
import ProductCard from "../../components/ProductCard";
import { Button, Container, MainContainer } from "./styles";

export const Home = () => {
  const { isTokenAdd } = useContext(UserContext);

  return (
    <Container>
      <Navbar />
      <MainContainer>

        {isTokenAdd ? (
          <BannerCreateAds />
        ) : (
           <div className="top">
          <h1>
            Velocidade e experiência em um <span>lugar feito para você</span>
          </h1>
          <p>Um ambiente feito para você explorar o seu melhor</p>
          <div>
            <Link to={"/"}>
              <Button bgColor="transparent" txColor="white" border={true}>
                Carros
              </Button>
            </Link>
            <Link to={"/"}>
              <Button bgColor="transparent" txColor="white" border={true}>
                Motos
              </Button>
            </Link>
          </div>
        </div>
        )}

        <div className="leilao" id="leilao">
          <h2 className="title-section">Leilão</h2>
          <div className="scroll-card-leilao">

            <ProductCardAuction />
            <ProductCardAuction />
            <ProductCardAuction />
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
            <ProductCard />
            <ProductCard />
          </div>
        </div>

      </MainContainer>
      <Footer />
      <Modal />
    </Container>
  );
};

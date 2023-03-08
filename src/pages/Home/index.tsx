import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BannerCreateAds from "../../components/BannerCreateAds";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductCardAuction from "../../components/ProductCardAuction";
import { UserContext } from "../../contexts/UserContexts";
import ProductCard from "../../components/ProductCard";
import { Button, Container, MainContainer } from "./styles";
import { AdsContext } from "../../contexts/AdsContexts";

import { ModalContainer } from "../../components/UI Components/ModalContainer";
import { ModalCreateAds } from "../../components/UI Modal/ModalCreateAds";
import { ModalUpdateAds } from "../../components/UI Modal/ModalUpdateAds";
import { ModalDeleteAds } from "../../components/UI Modal/ModalDeleteAds";
import { UIMessage } from "../../components/UI Components/Message";

export const Home = () => {
  const { userLogged } = useContext(UserContext);
  const { listCars, listMotorbikes } = useContext(AdsContext);
  const [createAds, setCreateAds] = useState(false);
  const [updateAds, setUpdateAds] = useState(false);
  const [deleteAds, setDeleteAds] = useState(false);

  const handleModalDeleteAds = () => {
    setUpdateAds(!updateAds);
    setDeleteAds(!deleteAds);
  };
  const handleModalCreateAds = () => {
    setCreateAds(!createAds);
  };
  const handleModalUpdateAds = () => {
    setUpdateAds(!updateAds);
  };

  return (
    <>
      <Container>
        <Navbar />
        <MainContainer>
          {userLogged ? (
            <BannerCreateAds setStatement={handleModalCreateAds} />
          ) : (
            <div className="top">
              <h1>
                Velocidade e experiência em um{" "}
                <span>lugar feito para você</span>
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
              {Object.keys(listCars).length > 0 ? (
                listCars?.map((ad) => (
                  <ProductCard info={ad} key={ad.id} type="cars" />
                ))
              ) : (
                <span className="empty-products">
                  Não há produtos no momento.
                </span>
              )}
            </div>
          </div>
          <div className="motorsbike" id="motorsbike">
            <h2 className="title-section">Motos</h2>
            <div className="scroll-card-motorsbike">
              {Object.keys(listMotorbikes).length ? (
                listMotorbikes?.map((ad) => (
                  <ProductCard info={ad} key={ad.id} type="bike" />
                ))
              ) : (
                <span className="empty-products">
                  Não há produtos no momento.
                </span>
              )}
            </div>
          </div>
        </MainContainer>
        <Footer />
      </Container>

      {createAds && (
        <ModalContainer>
          <ModalCreateAds setStatement={handleModalCreateAds} />
        </ModalContainer>
      )}

      {updateAds && (
        <ModalContainer>
          <ModalUpdateAds
            setStatement={handleModalUpdateAds}
            setConfirmDelete={handleModalDeleteAds}
          />
        </ModalContainer>
      )}

      {deleteAds && (
        <ModalContainer>
          <ModalDeleteAds setStatement={handleModalDeleteAds} />
        </ModalContainer>
      )}
    </>
  );
};

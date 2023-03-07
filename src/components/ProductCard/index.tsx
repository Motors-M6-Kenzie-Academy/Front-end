import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Car from "../../assets/car.svg";
import Bike from "../../assets/moto.svg";
import { AdsContext } from "../../contexts/AdsContexts";
import { CommentsContext } from "../../contexts/CommentsContext";
import { UserContext } from "../../contexts/UserContexts";
import { Button } from "../Button";
import { ModalContainer } from "../UI Components/ModalContainer";
import { ModalUpdateAds } from "../UI Modal/ModalUpdateAds";

import { ContainerCard, ContainerIsActive } from "./styles";

const ProductCard = (info: any) => {
  const [createAds, setCreateAds] = useState(false);
  const [updateAds, setUpdateAds] = useState(false);
  const [deleteAds, setDeleteAds] = useState(false);

  const {
    id,
    title,
    description,
    typeVehicle,
    typeAds,
    releaseYear,
    mileage,
    price,
    cover,
    gallery_image,
    isPublished,
    user,
  } = info.info;

  const { userLogged } = useContext(UserContext);
  const { setAdsId, getComments, setIsLoading } = useContext(CommentsContext);

  const navigate = useNavigate();

  const view = () => {
    setAdsId(id);
    setIsLoading(true);
    getComments(id);
    navigate(`/ad/${id}`);
  };

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
      <ContainerCard>
        {isPublished ? (
          <ContainerIsActive
            backgroundColor="var(--brand1)"
            color="var(--white)"
          >
            {"Ativo"}
          </ContainerIsActive>
        ) : (
          <ContainerIsActive
            backgroundColor="var(--gray4)"
            color="var(--white)"
          >
            {"Inativo"}
          </ContainerIsActive>
        )}

        <div className="container--img">
          {info.type === "cars" ? (
            <img src={Car} alt="car" />
          ) : (
            <img src={Bike} alt="motorbike" />
          )}
        </div>
        <div className="container--content">
          <h2>{title}</h2>
          <p className="container--description">{description}</p>
          {userLogged ? null : (
            <div className="container--announcer">
              <div className="avatar">{user?.name[0]}</div>
              <p>{user?.name}</p>
            </div>
          )}
          <div className="container--tag--price">
            <div className="container--tags">
              <div className="tag">{mileage}</div>
              <div className="tag">{releaseYear}</div>
            </div>
            <strong>R${price}</strong>
          </div>
        </div>
        {userLogged && (
          <div className="container--buttons--edit">
            <Button
              backgroud="var(--white)"
              color="var(--black)"
              border={true}
              borderColor="var(--black)"
              isHeight={true}
              height="38px"
            >
              Editar
            </Button>
            <Button
              backgroud="var(--white)"
              color="var(--black)"
              border={true}
              borderColor="var(--black)"
              isHeight={true}
              height="38px"
              onClick={() => view()}
            >
              Ver como
            </Button>
          </div>
        )}
      </ContainerCard>
      {updateAds && (
        <ModalContainer>
          <ModalUpdateAds
            setStatement={handleModalUpdateAds}
            setConfirmDelete={handleModalDeleteAds}
          />
        </ModalContainer>
      )}
    </>
  );
};

export default ProductCard;

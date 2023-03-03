import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Car from "../../assets/car.svg";
import Bike from "../../assets/moto.svg";
import { CommentsContext } from "../../contexts/CommentsContext";
import { UserContext } from "../../contexts/UserContexts";
import { Button } from "../Button";

import { ContainerCard, ContainerIsActive } from "./styles";

const ProductCard = (info: any) => {
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
    user,
  } = info.info;

  const announcer = "Natália";
  const { userLogged } = useContext(UserContext);
  const { adsId, setAdsId, getComments } = useContext(CommentsContext);
  const navigate = useNavigate();

  const view = () => {
    setAdsId(id);
    console.log(adsId);
    getComments();
    navigate("/ad");
  };

  return (
    <ContainerCard>
      {/* <ContainerIsActive backgroundColor="var(--brand1)" color="var(--white)">
        {obj.isActive ? "Ativo" : "Inativo"} 
        Ativo
      </ContainerIsActive> */}
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
            <div className="avatar">{user.name[0]}</div>
            <p>{user.name}</p>
          </div>
        )}

        <div className="container--tag--price">
          <div className="container--tags">
            <div className="tag">{mileage}</div>
            <div className="tag">{releaseYear}</div>
          </div>
          <strong>R${price}</strong>
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
      </div>
    </ContainerCard>
  );
};

export default ProductCard;

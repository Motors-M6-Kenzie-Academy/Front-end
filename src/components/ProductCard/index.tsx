import { useContext } from "react";
import Car from "../../assets/car.svg";
import Bike from "../../assets/moto.svg";
import { UserContext } from "../../contexts/UserContexts";
import { Button } from "../Button";

import { ContainerCard, ContainerIsActive } from "./styles";

const ProductCard = (info: any) => {
  const {
    title,
    description,
    typeVehicle,
    typeAds,
    releaseYear,
    mileage,
    price,
    cover,
    gallery_image,
  } = info.info;

  const announcer = "Natália";
  const { isTokenAdd } = useContext(UserContext);

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
        {isTokenAdd ? null : (
          <div className="container--announcer">
            <div className="avatar">{announcer[0]}</div>
            <p>{announcer}</p>
          </div>
        )}

        <div className="container--tag--price">
          <div className="container--tags">
            <div className="tag">{mileage}</div>
            <div className="tag">{releaseYear}</div>
          </div>
          <strong>R${price}</strong>
        </div>
        {isTokenAdd && (
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

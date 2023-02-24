import Car from "../../assets/car.svg";
import Bike from "../../assets/moto.svg";

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

  return (
    <ContainerCard>
      <ContainerIsActive backgroundColor="var(--brand1)" color="var(--white)">
        {/* {obj.isActive ? "Ativo" : "Inativo"} */}
        Ativo
      </ContainerIsActive>
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
        <div className="container--announcer">
          <div className="avatar">{announcer[0]}</div>
          <p>{announcer}</p>
        </div>
        <div className="container--tag--price">
          <div className="container--tags">
            <div className="tag">{mileage}</div>
            <div className="tag">{releaseYear}</div>
          </div>
          <strong>R${price}</strong>
        </div>
      </div>
    </ContainerCard>
  );
};

export default ProductCard;

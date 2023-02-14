import Car from "../../assets/car.svg";
import { ContainerCard, ContainerIsActive } from "./styles";

const ProductCard = () => {
  const obj = {
    title:
      "Product title stays here - max 1 line Product title stays here - maximum 1 line",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    announcer: "Anunciante",
    year: "2013",
    milage: "0 KM",
    price: "78.500,00",
    isActive: true,
  };

  return (
    <ContainerCard>
      <ContainerIsActive backgroundColor="var(--brand1)" color="var(--white)">
        {obj.isActive ? "Ativo" : "Inativo"}
      </ContainerIsActive>
      <div className="container--img">
        <img src={Car} alt="car" />
      </div>
      <div className="container--content">
        <h2>{obj.title}</h2>
        <p className="container--description">{obj.description}</p>
        <div className="container--announcer">
          <div className="avatar">{obj.announcer[0]}</div>
          <p>{obj.announcer}</p>
        </div>
        <div className="container--tag--price">
          <div className="container--tags">
            <div className="tag">{obj.milage}</div>
            <div className="tag">{obj.year}</div>
          </div>
          <strong>R${obj.price}</strong>
        </div>
      </div>
    </ContainerCard>
  );
};

export default ProductCard;

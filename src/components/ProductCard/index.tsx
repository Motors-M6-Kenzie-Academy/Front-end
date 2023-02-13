import Car from "../../assets/car.svg";
import { ContainerCard, ContainerIsActive } from "./styles";

const ProductCard = () => {
  const name = "Anunciante";
  const avatar = name[0];

  return (
    <ContainerCard>
      <ContainerIsActive backgroundColor="var(--brand1)" color="var(--white)">
        Ativo
      </ContainerIsActive>
      <div className="container--img">
        <img src={Car} alt="car" />
      </div>
      <div className="container--content">
        <h2>
          Product title stays here - max 1 line Product title stays here -
          maximum 1 line
        </h2>
        <p className="container--description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </p>
        <div className="container--announcer">
          <div className="avatar">{avatar}</div>
          <p>{name}</p>
        </div>
        <div className="container--tag--price">
          <div className="container--tags">
            <div className="tag">0 KM</div>
            <div className="tag">2019</div>
          </div>
          <strong>R$00.000,00</strong>
        </div>
      </div>
    </ContainerCard>
  );
};

export default ProductCard;

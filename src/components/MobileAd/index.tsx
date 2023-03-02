import { Button } from "../Button";
import Car from "../../assets/car.svg";
import { MobileContainer } from "./styles";

const MobileAd = () => (
  <MobileContainer>
    <div className="container--cover--image">
      <div className="cover--image">
        <img src={Car} alt="Carro" />
      </div>
    </div>
    <div className="container--card--info">
      <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h2>
      <div className="container--tag--price">
        <div className="container--tags">
          <div className="tag">mileage</div>
          <div className="tag">releaseYear</div>
        </div>
        <strong>R$price</strong>
      </div>
      <Button
        backgroud="var(--brand1)"
        color="var(--white)"
        isWidth={true}
        width="110px"
      >
        Comprar
      </Button>
    </div>
    <div className="container--card--info">
      <h2>Descrição</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
    <div className="container--card--info">
      <h2>Fotos</h2>
      <div className="container--pictures">
        <img src={Car} alt="Carro" /> <img src={Car} alt="Carro" />{" "}
        <img src={Car} alt="Carro" /> <img src={Car} alt="Carro" />{" "}
        <img src={Car} alt="Carro" /> <img src={Car} alt="Carro" />
      </div>
    </div>
    <div className="container--card--info center--content">
      <div className="container--announcer">
        <div className="avatar">N</div>
        <strong>Natalia</strong>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>
      <Button
        backgroud="var(--gray0)"
        color="var(--white)"
        isWidth={true}
        width="200px"
      >
        Ver todos os anúncios
      </Button>
    </div>
  </MobileContainer>
);

export default MobileAd;

import { useContext } from "react";
import { useParams } from "react-router-dom";

import { Button } from "../Button";
import Car from "../../assets/car.svg";
import Motorbike from "../../assets/moto.svg";
import { MobileContainer } from "./styles";
import ListComments from "../CommentsList";
import BoxComment from "../BoxComment";
import { AdsContext } from "../../contexts/AdsContexts";

const MobileAd = () => {
  const { listAds } = useContext(AdsContext);
  const params = useParams();

  const adFound = listAds.find((ad) => ad.id === params.id);

  const sigla = [];
  const userName = [];
  const userLastName = [];

  if (adFound) {
    userName.push(adFound.user?.name.split(" ")[0]);
    userLastName.push(adFound.user?.name.split(" ")[1]);

    sigla.push(userName[0]?.substring(0, 1));

    if (userLastName[0]) {
      sigla.push(userLastName[0].substring(0, 1));
    }
  }
  return (
    <MobileContainer>
      <div className="container--cover--image">
        <div className="cover--image">
          {adFound && adFound.typeVehicle === "car" ? (
            <img src={Car} alt="Carro" />
          ) : (
            <img src={Motorbike} alt="Moto" />
          )}
        </div>
      </div>
      <div className="container--card--info">
        <h2>{adFound && adFound.title}</h2>
        <div className="container--tag--price">
          <div className="container--tags">
            <div className="tag">{adFound && adFound.mileage}</div>
            <div className="tag">{adFound && adFound.releaseYear}</div>
          </div>
          <strong>R$ {adFound && adFound.price}</strong>
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
        <p>{adFound && adFound.description}</p>
      </div>
      <div className="container--card--info">
        <h2>Fotos</h2>
        <div className="container--pictures">
          {adFound && adFound.typeVehicle === "car" ? (
            <>
              <img src={Car} alt="Carro" /> <img src={Car} alt="Carro" />{" "}
              <img src={Car} alt="Carro" /> <img src={Car} alt="Carro" />{" "}
              <img src={Car} alt="Carro" /> <img src={Car} alt="Carro" />
            </>
          ) : (
            <>
              <img src={Motorbike} alt="Moto" />{" "}
              <img src={Motorbike} alt="Moto" />{" "}
              <img src={Motorbike} alt="Moto" />{" "}
              <img src={Motorbike} alt="Moto" />{" "}
              <img src={Motorbike} alt="Moto" />{" "}
              <img src={Motorbike} alt="Moto" />
            </>
          )}
        </div>
      </div>
      <div className="container--card--info center--content">
        <div className="container--announcer">
          <div className="avatar">{sigla}</div>
          <strong>{adFound && adFound.user?.name}</strong>
        </div>
        <p>{adFound && adFound.user?.description}</p>
        <Button
          backgroud="var(--gray0)"
          color="var(--white)"
          isWidth={true}
          width="200px"
        >
          Ver todos os anúncios
        </Button>
      </div>

      <ListComments />
      <BoxComment />
    </MobileContainer>
  );
};

export default MobileAd;

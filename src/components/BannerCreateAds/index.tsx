import { useContext } from "react";
import { AdsContext } from "../../contexts/AdsContexts";
import { Button } from "../Button";
import { ContainerBannerCreateAds } from "./styles";

const BannerCreateAds = () => {
  const { setIsOpenModal } = useContext(AdsContext);

  const obj = {
    name: "Natalia",
    email: "usuario@gmail.com",
    phoneNumber: "+55(11)91234-1234",
    cpf: "000.000.000-00",
    password: "123456",
    birthDate: "07/04/1997",
    accountType: "Anunciante",
    roadName: "Rua tal tal",
    houseNumber: 301,
    city: "São Paulo",
    complement: "complemento tal",
    zipCode: "60873-905",
    state: "SP",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  };

  return (
    <ContainerBannerCreateAds>
      <div className="background--blue"></div>
      <div className="container--create--ads">
        <div className="container--announcer">
          <div className="avatar">{obj.name[0]}</div>
          <div className="container--name--type">
            <strong>{obj.name}</strong>
            <p className="tag">{obj.accountType}</p>
          </div>
        </div>
        <p className="paragraph--description">{obj.description}</p>
        <Button
          backgroud="var(--white)"
          color="var(--brand1)"
          border={true}
          borderColor="var(--brand1)"
          isWidth={true}
          width="160px"
          onClick={() => setIsOpenModal(true)}
        >
          Criar anúncio
        </Button>
        <div></div>
      </div>
    </ContainerBannerCreateAds>
  );
};

export default BannerCreateAds;

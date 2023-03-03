import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { Button } from "../Button";
import { ContainerBannerCreateAds } from "./styles";

type ModalCreateAdsProps = {
  setStatement: () => void;
};

const BannerCreateAds = ({ setStatement }: ModalCreateAdsProps) => {
  const { userLogged } = useContext(UserContext);

  return (
    <ContainerBannerCreateAds>
      <div className="background--blue"></div>
      <div className="container--create--ads">
        <div className="container--announcer">
          <div className="avatar">{userLogged!.name[0]}</div>
          <div className="container--name--type">
            <strong>{userLogged!.name}</strong>
            <p className="tag">{userLogged!.accountType}</p>
          </div>
        </div>
        <p className="paragraph--description">{userLogged!.description}</p>
        <Button
          backgroud="var(--white)"
          color="var(--brand1)"
          border={true}
          borderColor="var(--brand1)"
          isWidth={true}
          width="160px"
          onClick={setStatement}
        >
          Criar anúncio
        </Button>
        <div></div>
      </div>
    </ContainerBannerCreateAds>
  );
};

export default BannerCreateAds;

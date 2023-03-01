import { useContext } from "react";
import { AdsContext } from "../../contexts/AdsContexts";
import { UserContext } from "../../contexts/UserContexts";
import { Button } from "../Button";
import { ContainerBannerCreateAds } from "./styles";

type ModalCreateAdsProps = {
  setStatement: () => void;
};

const BannerCreateAds = ({ setStatement }: ModalCreateAdsProps) => {
  const { setIsOpenModal } = useContext(AdsContext);
  const { user } = useContext(UserContext);

  return (
    <ContainerBannerCreateAds>
      <div className="background--blue"></div>
      <div className="container--create--ads">
        <div className="container--announcer">
          <div className="avatar">{user!.name[0]}</div>
          <div className="container--name--type">
            <strong>{user!.name}</strong>
            <p className="tag">{user!.accountType}</p>
          </div>
        </div>
        <p className="paragraph--description">{user!.description}</p>
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

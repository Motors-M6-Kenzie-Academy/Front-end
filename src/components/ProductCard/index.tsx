import Car from "../../assets/car.svg";
import Bike from "../../assets/moto.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { IAds } from "../../interfaces/Ads";
import { Button } from "../Button";
import { ContainerCard, ContainerIsActive } from "./styles";
import { CommentsContext } from "../../contexts/CommentsContext";
import { useNavigate } from "react-router";

type ProductCardProps = {
  handleButtonToggle: () => void;
  type: string;
  info: IAds;
};

const ProductCard = ({ handleButtonToggle, info, type }: ProductCardProps) => {
  const { userLogged } = useContext(UserContext);
  const {
    id,
    title,
    description,
    releaseYear,
    mileage,
    price,
    user,
    isPublished,
  } = info;

  const { setAdsId, getComments, setIsLoading } = useContext(CommentsContext);
  const navigate = useNavigate();

  const view = () => {
    setAdsId(id);
    setIsLoading(true);
    getComments(id);
    navigate(`/ad/${id}`);
  };

  return (
    <>
      <ContainerCard>
        {isPublished ? (
          <ContainerIsActive
            backgroundColor="var(--brand1)"
            color="var(--white)"
          >
            {"Ativo"}
          </ContainerIsActive>
        ) : (
          <ContainerIsActive
            backgroundColor="var(--gray4)"
            color="var(--white)"
          >
            {"Inativo"}
          </ContainerIsActive>
        )}

        <div className="container--img">
          {type === "car" ? (
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
              <div className="avatar">{user?.name[0]}</div>
              <p>{user?.name}</p>
            </div>
          )}
          <div className="container--tag--price">
            <div className="container--tags">
              <div className="tag">{mileage}</div>
              <div className="tag">{releaseYear}</div>
            </div>
            <strong>R${price}</strong>
          </div>
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
              onClick={handleButtonToggle}
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
      </ContainerCard>
    </>
  );
};

export default ProductCard;

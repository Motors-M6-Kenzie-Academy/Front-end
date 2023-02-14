import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

import { ContainerCardAuction, ContainerCardAuctionButton } from "./styles";

const ProductCardAuction = () => {
  const obj = {
    title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    announcer: "Rodrigo",
    year: "2013",
    milage: "0 KM",
    price: "78.500,00",
  };
  return (
    <ContainerCardAuctionButton>
      <ContainerCardAuction>
        <div className="container--time">
          {" "}
          <AiOutlineClockCircle />
          01:58:00
        </div>
        <h2>{obj.title}</h2>
        <div className="container--description">
          <p>{obj.description}</p>
        </div>
        <div className="container--announcer">
          <div className="avatar">{obj.announcer[0]}</div>
          <p>{obj.announcer}</p>
        </div>
        <div className="container--tag--price">
          <div className="container--tags">
            <div className="tag">0 KM</div>
            <div className="tag">2019</div>
          </div>
          <strong>R${obj.price}</strong>
        </div>
      </ContainerCardAuction>
      <div className="container--button">
        Acessar página do leilão
        <button>
          <BsArrowRight />
        </button>
      </div>
    </ContainerCardAuctionButton>
  );
};

export default ProductCardAuction;

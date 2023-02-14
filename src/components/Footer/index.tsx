import { ContainerFooter } from "./styles";
import ArrowUp from "../../assets/angle-up.svg";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <ContainerFooter>
      <h3>
        Motors <span className="subtitle">shop</span>
      </h3>
      <p>
        <BiCopyright /> 2022 - Todos os direitos reservados.
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <img src={ArrowUp} alt="arrow up" />
      </button>
    </ContainerFooter>
  );
};

export default Footer;

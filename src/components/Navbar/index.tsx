import { HeaderContainer } from "./styles";
import LogoImg from "../../assets/LogoImg.svg";

export default function NavBar2() {
  const handleHamburger = () => {
    const list = document.querySelector(".nav-bar");
    list?.classList.toggle("active");
  };

  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <img src={LogoImg} alt="Logo Motors" />
        </div>
        <div className="hamburger" onClick={() => handleHamburger()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <nav className="nav-bar">
          <ul>
            <li>
              <a href="/">Carros</a>
            </li>
            <li>
              <a href="/">Motos</a>
            </li>
            <li>
              <a href="/">Leilão</a>
            </li>
            <li>
              <a href="/">Fazer Login</a>
            </li>
            <li>
              <a href="/">Cadastrar</a>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
}

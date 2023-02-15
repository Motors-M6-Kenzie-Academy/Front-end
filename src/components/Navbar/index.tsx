import { HeaderContainer } from "./styles";
import LogoImg from "../../assets/LogoImg.svg";

export default function Navbar() {
  const handleHamburger = () => {
    const list = document.querySelector(".nav-bar");
    list?.classList.toggle("active");
  };

  const handleUser = () => {
    const list = document.querySelector(".user-settings");
    list?.classList.toggle("active");
  };

  const sigla = [];
  const userName = [];
  const user = {
    name: "Samuel Leão",
  };

  userName.push(user.name.split(" ")[0]);
  userName.push(user.name.split(" ")[1]);

  sigla.push(userName[0].substring(0, 1));
  sigla.push(userName[1].substring(0, 1));

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
            {user ? (
              <div className="container-user" onClick={() => handleUser()}>
                <div className="circle">{sigla}</div>
                <span className="user-name">{user.name}</span>
                <ul className="user-settings">
                  <li>
                    <a href="/">Editar Perfil</a>
                  </li>
                  <li>
                    <a href="/">Editar Endereço</a>
                  </li>
                  <li>
                    <a href="/">Minhas Compras</a>
                  </li>
                  <li>
                    <a href="/">Sair</a>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <li>
                  <a href="/">Fazer Login</a>
                </li>
                <li>
                  <a href="/">Cadastrar</a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
}

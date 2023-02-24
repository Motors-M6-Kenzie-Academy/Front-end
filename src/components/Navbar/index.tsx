import { HeaderContainer } from "./styles";
import LogoImg from "../../assets/LogoImg.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleHamburger = () => {
    const list = document.querySelector(".nav-bar");
    list?.classList.toggle("active");
  };

  const handleExit = () => {
    localStorage.removeItem("@user");
    navigate("/");
  };

  const handleUser = () => {
    const list = document.querySelector(".user-settings");
    list?.classList.toggle("active");
  };

  // Apenas para Teste
  type UserProps = {
    name?: string;
    active?: boolean;
  };
  const user: UserProps = {};
  const sigla: any = [];
  const userName: any = [];
  const token = localStorage.getItem("@user");

  if (token) {
    user["name"] = JSON.parse(token);
    user["active"] = true;

    // userName.push(user.name?.split(" ")[0]);
    // userName.push(user.name?.split(" ")[1]);

    // sigla.push(userName[0].substring(0, 1));
    // sigla.push(userName[1].substring(0, 1));
  }
  // user["name"] = "rrrr";

  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <Link to={"/"}>
            <img src={LogoImg} alt="Logo Motors" />
          </Link>
        </div>
        <div className="hamburger" onClick={() => handleHamburger()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <nav className="nav-bar">
          <ul>
            <li>
              <Link to={"/"}>Carros</Link>
            </li>
            <li>
              <Link to={"/"}>Motos</Link>
            </li>
            <li>
              <Link to={"/"}>Leilão</Link>
            </li>
            {user.active ? (
              <div className="container-user" onClick={() => handleUser()}>
                <div className="circle">{"SL"}</div>
                <span className="user-name">{"Samuel Leão"}</span>
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
                    <a href="/" onClick={handleExit}>
                      Sair
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <li>
                  <a href="/signin">Fazer Login</a>
                </li>
                <li>
                  <a href="/register">Cadastrar</a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
}

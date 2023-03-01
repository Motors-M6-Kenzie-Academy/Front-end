import { HeaderContainer } from "./styles";
import LogoImg from "../../assets/LogoImg.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContexts";
import { useContext } from "react";

export default function Navbar() {
  const handleHamburger = () => {
    const list = document.querySelector(".nav-bar");
    list?.classList.toggle("active");
  };

  const { user, logout } = useContext(UserContext);

  // const handleUser = () => {
  //   const list = document.querySelector(".user-settings");
  //   list?.classList.toggle("active");
  // };

  // const sigla: any = [];
  // const userName: any = [];
  // const user = {};

  // userName.push(user.name.split(" ")[0]);
  // userName.push(user.name.split(" ")[1]);

  // sigla.push(userName[0].substring(0, 1));
  // sigla.push(userName[1].substring(0, 1));

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
            {/* {user ? (
              <div className="container-user" onClick={() => handleUser()}>
                <div className="circle">{sigla}</div>
                <span className="user-name">{user?.name}</span>
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
            )} */}
            {user ? (
              <button onClick={() => logout()}>Logout</button>
            ) : (
              <>
                <li>
                  <Link to={"/signin"}>Fazer Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Cadastrar</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
}

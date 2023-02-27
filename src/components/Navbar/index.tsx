import {
  Container,
  ContainerDesktop,
  ContainerMobile,
  Logo,
  MenuHamburger,
} from "./styles";
import LogoImg from "../../assets/LogoImg.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState({ name: "Samuel Leão" });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSettingsUser, setIsOpenSettingsUser] = useState(false);

  const handleSettingsModal = () => {
    setIsOpenSettingsUser(!isOpenSettingsUser);
  };
  const handleHamburger = () => {
    setIsOpenModal(!isOpenModal);
  };

  const sigla: any = [];
  const userName: any = [];

  userName.push(user.name.split(" ")[0]);
  userName.push(user.name.split(" ")[1]);

  sigla.push(userName[0].substring(0, 1));
  sigla.push(userName[1].substring(0, 1));

  return (
    <Container>
      <Link to={"/"}>
        <Logo src={LogoImg} alt="Logo Motos" />
      </Link>
      <ContainerMobile>
        {isOpenModal &&
          (user ? (
            <nav>
              <Link to={"/"}>Editar Perfil</Link>
              <Link to={"/"}>Editar Endereço</Link>
              <Link to={"/"}>Meus Anúncios</Link>
              <Link to={"/"}>Excluir Perfil</Link>
              <Link to={"/"}>Sair</Link>
            </nav>
          ) : (
            <nav>
              <Link to={"/"}>Carros</Link>
              <Link to={"/"}>Motos</Link>
              <Link to={"/"}>Leilão</Link>
              <div>
                <Link to={"/signin"}>Fazer Login</Link>
                <Link to={"/register"}>Cadastrar</Link>
              </div>
            </nav>
          ))}
      </ContainerMobile>

      <ContainerDesktop>
        {user ? (
          <nav>
            <Link to={"/"}>Carros</Link>
            <Link to={"/"}>Motos</Link>
            <Link to={"/"}>Leilão</Link>
            <div className="user-info">
              <span className="user-sigla">{sigla}</span>
              <span onClick={handleSettingsModal}>{user?.name}</span>
            </div>
            {isOpenSettingsUser && (
              <div id="user-settings-desktop">
                <Link to={"/"}>Editar Perfil</Link>
                <Link to={"/"}>Editar Endereço</Link>
                <Link to={"/"}>Meus Anúncios</Link>
                <Link to={"/"}>Excluir Perfil</Link>
                <Link to={"/"}>Sair</Link>
              </div>
            )}
          </nav>
        ) : (
          <nav>
            <Link to={"/"}>Carros</Link>
            <Link to={"/"}>Motos</Link>
            <Link to={"/"}>Leilão</Link>
            <div>
              <Link to={"/signin"}>Fazer Login</Link>
              <Link to={"/register"}>Cadastrar</Link>
            </div>
          </nav>
        )}
      </ContainerDesktop>

      <MenuHamburger onClick={() => handleHamburger()}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </MenuHamburger>
    </Container>
  );
}

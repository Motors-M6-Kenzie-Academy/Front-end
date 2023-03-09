import {
  Container,
  ContainerDesktop,
  ContainerMobile,
  Logo,
  MenuHamburger,
} from "./styles";
import LogoImg from "../../assets/LogoImg.svg";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/UserContexts";
import { useContext } from "react";
import { useState } from "react";

import { ModalUpdateUser } from "../UI Modal/ModalUpdateUser";
import { ModalContainer } from "../UI Components/ModalContainer";
import { ModalUpdateAddress } from "../UI Modal/ModalUpdateAddress";
import { ModalSettingsUser } from "../UI Modal/ModalSettingsUser";
import { Navigation } from "../UI Components/Navigation";
import { ModalDeleteUser } from "../UI Modal/ModalDeleteUser";

export default function Navbar() {
  const { userLogged, logout } = useContext(UserContext);

  const [isOpenModalHamburger, setisOpenModalHamburger] = useState(false);
  const [isOpenSettingsUser, setIsOpenSettingsUser] = useState(false);

  const [updateUser, setUpdateUser] = useState(false);
  const [updateAddress, setUpdateAddress] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  const handleModalUpdateUser = () => {
    setUpdateUser(!updateUser);
  };
  const handleModalUpdateAddress = () => {
    setUpdateAddress(!updateAddress);
  };

  const handleModalDeleteUser = () => {
    setDeleteUser(!deleteUser);
  };

  const handleSettingsModal = () => {
    setIsOpenSettingsUser(!isOpenSettingsUser);
  };
  const handleHamburger = () => {
    setisOpenModalHamburger(!isOpenModalHamburger);
  };

  const sigla = [];
  const userName = [];
  const userLastName = [];

  if (userLogged) {
    userName.push(userLogged.name.split(" ")[0]);
    userLastName.push(userLogged.name.split(" ")[1]);

    sigla.push(userName[0].substring(0, 1));

    if (userLastName[0]) {
      sigla.push(userLastName[0].substring(0, 1));
    }
  }

  return (
    <>
      <Container>
        <Link to={"/"}>
          <Logo src={LogoImg} alt="Logo Motos" />
        </Link>
        <ContainerMobile>
          {isOpenModalHamburger &&
            (userLogged ? (
              <Navigation>
                <Link to={"#"} onClick={handleModalUpdateUser}>
                  Editar Perfil
                </Link>
                <Link to={"/"} onClick={handleModalUpdateAddress}>
                  Editar Endereço
                </Link>
                <Link to={"/"}>Meus Anúncios</Link>
                <Link to={"/"} onClick={handleModalDeleteUser}>
                  Excluir Perfil
                </Link>
                <button onClick={() => logout()}>Sair</button>
              </Navigation>
            ) : (
              <>
                <Navigation>
                  <a href="#cars">Carros</a>
                  <a href="#motorbikes">Motos</a>
                  <Link to={"/"}>Leilão</Link>
                  <Link to={"/signin"}>Fazer Login</Link>
                  <Link to={"/register"}>Cadastrar</Link>
                </Navigation>
              </>
            ))}
        </ContainerMobile>

        <ContainerDesktop>
          {userLogged ? (
            <Navigation>
              <a href="/#cars">Carros</a>
              <a href="/#motorbikes">Motos</a>
              <Link to={"/"}>Leilão</Link>
              <div className="user-container-auth">
                <span className="user-acronym">{sigla.join("")}</span>
                <span onClick={handleSettingsModal} className="user-name">
                  {userLogged?.name}
                </span>
              </div>
              {isOpenSettingsUser && (
                <ModalSettingsUser
                  setStatementProfile={handleModalUpdateUser}
                  setStatementAddress={handleModalUpdateAddress}
                  setStatementDeleteProfile={handleModalDeleteUser}
                />
              )}
            </Navigation>
          ) : (
            <Navigation>
              <a href="/#cars">Carros</a>
              <a href="/#motorbikes">Motos</a>
              <Link to={"/"}>Leilão</Link>
              <div className="settings-container">
                <Link to={"/signin"}>Fazer Login</Link>
                <Link to={"/register"}>Cadastrar</Link>
              </div>
            </Navigation>
          )}
        </ContainerDesktop>

        <MenuHamburger onClick={() => handleHamburger()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </MenuHamburger>
      </Container>

      {updateAddress && (
        <ModalContainer>
          <ModalUpdateAddress handleButtonToggle={handleModalUpdateAddress} />
        </ModalContainer>
      )}
      {updateUser && (
        <ModalContainer>
          <ModalUpdateUser handleButtonToggle={handleModalUpdateUser} />
        </ModalContainer>
      )}

      {deleteUser && (
        <ModalContainer>
          <ModalDeleteUser setStatement={handleModalDeleteUser} />
        </ModalContainer>
      )}
    </>
  );
}

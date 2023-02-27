import {
  Button,
  Container,
  ContainerDesktop,
  ContainerMobile,
  ContainerModal,
  Logo,
  MenuHamburger,
} from "./styles";
import LogoImg from "../../assets/LogoImg.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputContainer from "../Input";

type IUser = {
  name: string;
};

export default function Navbar() {
  const [user, setUser] = useState<IUser>({ name: "Bruno Azevedo" });
  const [isOpenModalHamburger, setisOpenModalHamburger] = useState(false);
  const [isOpenSettingsUser, setIsOpenSettingsUser] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const handleEditUserModal = () => {
    setIsOpenEditModal(!isOpenEditModal);
  };
  const handleSettingsModal = () => {
    setIsOpenSettingsUser(!isOpenSettingsUser);
  };
  const handleHamburger = () => {
    setisOpenModalHamburger(!isOpenModalHamburger);
  };

  const sigla = [];
  const userName = [];

  if (user) {
    userName.push(user?.name.split(" ")[0]);
    userName.push(user?.name.split(" ")[1]);

    sigla.push(userName[0].substring(0, 1));
    sigla.push(userName[1].substring(0, 1));
  }

  return (
    <>
      <Container>
        <Link to={"/"}>
          <Logo src={LogoImg} alt="Logo Motos" />
        </Link>
        <ContainerMobile>
          {isOpenModalHamburger &&
            (user ? (
              <nav>
                <Link to={"/"} onClick={handleEditUserModal}>
                  Editar Perfil
                </Link>
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
                  <Link to={"/"} onClick={handleEditUserModal}>
                    Editar Perfil
                  </Link>
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
      {isOpenEditModal && (
        <ContainerModal id="modal-edit-user">
          <div className="modal">
            <h3>Editar perfil</h3>
            <p>informações pessoais</p>
            <InputContainer
              label="Nome"
              placeHolder="Ex: Samuel Leão Silva"
              typeInput="text"
              key={"name"}
            />
            <InputContainer
              label="Email"
              placeHolder="samuel@kenzie.com.br"
              typeInput="email"
              key={"email"}
            />
            <InputContainer
              label="CPF"
              placeHolder="900.880.090-00"
              typeInput="number"
              key={"cpf"}
            />
            <InputContainer
              label="Celular"
              placeHolder="(084) 90909-9092"
              typeInput="text"
              key={"phoneNumber"}
            />
            <InputContainer
              label="Data de Nascimento"
              placeHolder="09/12/99"
              typeInput="text"
              key={"birthdate"}
            />
            <InputContainer
              label="Descrição"
              placeHolder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              typeInput="text"
              key={"description"}
            />
            <div>
              <Button
                bgColor="#DEE2E6"
                txColor="black"
                onClick={handleEditUserModal}
              >
                Cancelar
              </Button>
              <Button bgColor="blue" txColor="white">
                Salvar Alterações
              </Button>
            </div>
          </div>
        </ContainerModal>
      )}
    </>
  );
}

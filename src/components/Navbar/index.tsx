import { Container, Logo, MenuItems, Right, SignIn } from "./styles";
import LogoImg from "../../assets/LogoImg.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [burger_class, setBugerClass] = useState("buger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBugerClass("buger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBugerClass("buger-bar unclicked");
      setMenuClass("menu hidden");
    }
  };
  return (
    <>
      <Container>
        <Logo>
          <img src={LogoImg} alt="Logo Motors" />
        </Logo>
        <Right>
          <MenuItems>
            <a href="/">Carros</a>
            <a href="/">Motos</a>
            <a href="/">Leilão</a>
          </MenuItems>
          <SignIn>
            <button>Fazer Login</button>
            <button>Cadastrar</button>
          </SignIn>
        </Right>
        <AiOutlineMenu onClick={updateMenu} />
      </Container>
    </>
  );
}

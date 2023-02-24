// import { useContext } from "react";
// import { UserContext } from "../../contexts/UserContexts";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import InputContainer from "../../components/Imputs";
import Navbar from "../../components/Navbar";
import { Button, Container, FormContainer, MainContainer } from "./styles";

export const SignIn = () => {
  const navigate = useNavigate();
  // const { isTokenAdd, setIsTokenAdd } = useContext(UserContext);

  const handleLogin = () => {
    localStorage.setItem("@user", JSON.stringify({ name: "Samuel Leão" }));
    navigate("/");
  };

  return (
    <>
      <Container>
        <Navbar />
        <MainContainer>
          <FormContainer>
            <h2>Login</h2>
            <div className="formInputs">
              <InputContainer
                label="Email"
                placeHolder="Digitar Email"
                typeInput="email"
                key={"email"}
              />
              <InputContainer
                label="Senha"
                placeHolder="Digitar Senha"
                typeInput="password"
                key={"password"}
              />
            </div>
            <div className="formSubmit">
              <Link to={"/"}>
                <span className="tx-end">Esqueci minha senha</span>
              </Link>
              <Button
                type={"submit"}
                bgColor={"blue"}
                txColor={"white"}
                onClick={handleLogin}
              >
                Entrar
              </Button>

              <Link to={"/register"}>
                <span className="tx-center">Ainda não possui conta?</span>
              </Link>

              <Button
                type={"button"}
                bgColor={"transparent"}
                txColor={"black"}
                border={true}
              >
                <Link to={"/register"}>Cadastrar</Link>
              </Button>
            </div>
          </FormContainer>
        </MainContainer>
        <Footer />
      </Container>
    </>
  );
};

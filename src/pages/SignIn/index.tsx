// Imports React Native Functions
import { useState, useContext } from "react";

// Imports Components
import { Button, Container, FormContainer, MainContainer } from "./styles";
import { UILabel } from "../../components/UI Components/Label";
import { FormGroup } from "../../components/UI Components/FormGroup";
import { UIMessage } from "../../components/UI Components/Message";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// Imports Extras Libs
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// Imports Modais
import { ModalContainer } from "../../components/UI Components/ModalContainer";
import { ModalForgotPassword } from "../../components/UI Modal/ModalForgotPassword";

// Import Others Functions
import { ISignInRequest } from "../../interfaces/User";
import { loginSchema } from "../../validators/signin";
import { UserContext } from "../../contexts/UserContexts";

export const SignIn = () => {
  const navigate = useNavigate();
  const { loginUser, isError } = useContext(UserContext);
  const [forgotPassword, setForgotPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInRequest>({ resolver: yupResolver(loginSchema) });

  const handleModalForgotPassword = () => {
    setForgotPassword(!forgotPassword);
  };

  const handleGoToRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <Container>
        <Navbar />
        <MainContainer>
          <FormContainer onSubmit={handleSubmit(loginUser)}>
            <h2>Login</h2>
            <div className="formInputs">
              {isError && (
                <UIMessage
                  propMessage="Usuário ou Senha inválidos"
                  propIsError={true}
                />
              )}
              <label htmlFor="email">
                Email
                <input
                  className="info--input"
                  type="email"
                  placeholder="Digite o seu email aqui"
                  id="email"
                  {...register("email")}
                />
              </label>
              <UIMessage
                propMessage={errors.email?.message!}
                propIsError={true}
              />
              <label htmlFor="password">
                Senha
                <input
                  className="info--input"
                  type="password"
                  placeholder="Digite a sua senha aqui"
                  id="password"
                  {...register("password")}
                />
              </label>
              <UIMessage
                propMessage={errors.email?.message!}
                propIsError={true}
              />
            </div>
            <div className="formSubmit">
              <FormGroup propJustify="flex-end" propColumn="row">
                <UILabel onClick={handleModalForgotPassword}>
                  Esqueceu sua senha?
                </UILabel>
              </FormGroup>
              <Button type={"submit"} bgColor={"blue"} txColor={"white"}>
                Entrar
              </Button>
              <Link to={"/register"}>
                <span className="tx-center">Ainda não possui conta?</span>
              </Link>

              <Button
                type="button"
                bgColor={"transparent"}
                txColor={"black"}
                border={true}
                onClick={handleGoToRegister}
              >
                Cadastrar
              </Button>
            </div>
          </FormContainer>
        </MainContainer>
        <Footer />
      </Container>

      {forgotPassword && (
        <ModalContainer>
          <ModalForgotPassword setStatement={handleModalForgotPassword} />
        </ModalContainer>
      )}
    </>
  );
};

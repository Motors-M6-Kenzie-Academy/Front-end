import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ModalContainer } from "../../components/UI Components/ModalContainer";
import { ModalForgotPassword } from "../../components/UI Modal/ModalForgotPassword";
import { UILabel } from "../../components/UI Components/Label";
import { FormGroup } from "../../components/UI Components/FormGroup";

import { ISignInRequest } from "../../interfaces/User";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { Button, Container, FormContainer, MainContainer } from "./styles";

import { loginSchema } from "../../validators/signin";
import { UIMessage } from "../../components/UI Components/Message";
import { UserContext } from "../../contexts/UserContexts";
import { useContext } from "react";

export const SignIn = () => {
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
                type="submit"
                bgColor={"transparent"}
                txColor={"black"}
                border={true}
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

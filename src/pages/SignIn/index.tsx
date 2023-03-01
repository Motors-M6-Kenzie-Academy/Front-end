import { Link } from "react-router-dom";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { ISignInRequest } from "../../interfaces/User";
import Footer from "../../components/Footer";
import InputContainer from "../../components/Imputs";
import Navbar from "../../components/Navbar";
import { UserContext } from "../../contexts/UserContexts";
import { Button, Container, FormContainer, MainContainer } from "./styles";
import { loginSchema } from "../../validators/signin";

export const SignIn = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInRequest>({ resolver: yupResolver(loginSchema) });

  return (
    <>
      <Container>
        <Navbar />
        <MainContainer>
          <FormContainer onSubmit={handleSubmit(loginUser)}>
            <h2>Login</h2>
            <div className="formInputs">
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
              <p className="container--error">{errors.email?.message}</p>
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
              <p className="container--error">{errors.password?.message}</p>
            </div>
            <div className="formSubmit">
              <Link to={"/"}>
                <span className="tx-end">Esqueci minha senha</span>
              </Link>
              <Button type="submit" bgColor={"blue"} txColor={"white"}>
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
    </>
  );
};

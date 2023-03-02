import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import InputContainer from "../../components/Input";
import Navbar from "../../components/Navbar";
import { Button, Container, FormContainer, MainContainer } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ModalAdUpdate from "../../components/modalAdUpdate";
import { ModalContainer } from "../../components/UI Components/ModalContainer";
import { ModalForgotPassword } from "../../components/UI Modal/ModalForgotPassword";
import { UIButton } from "../../components/UI Components/Button";
import { UILabel } from "../../components/UI Components/Label";
import { FormGroup } from "../../components/UI Components/FormGroup";

export const SignIn = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const handleModalForgotPassword = () => {
    setForgotPassword(!forgotPassword);
  };
  return (
    <>
      <Container>
        <Navbar />
        <MainContainer>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
                {...register("password")}
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

      {forgotPassword && (
        <ModalContainer>
          <ModalForgotPassword setStatement={handleModalForgotPassword} />
        </ModalContainer>
      )}
    </>
  );
};

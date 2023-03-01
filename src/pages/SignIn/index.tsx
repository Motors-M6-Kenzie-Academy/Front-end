import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import InputContainer from "../../components/Input";
import Navbar from "../../components/Navbar";
import { Button, Container, FormContainer, MainContainer } from "./styles";
import { useForm } from "react-hook-form";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
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
              <Link to={"/"}>
                <span className="tx-end">Esqueci minha senha</span>
              </Link>
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
    </>
  );
};

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserFullRequest } from "../../interfaces/User";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  ButtonSelectType,
  Container,
  FormContainer,
  MainContainer,
  ButtonForm,
} from "./styles";
import { CreateAccountSchema } from "../../schemaYup/createAccount.schema";
import { UIMessage } from "../../components/UI Components/Message";

type AccounttypeProps = {
  accountType: string;
};

export const Register = () => {
  const [accountType, setAccountType] = useState<AccounttypeProps>();
  const [isError, setIsError] = useState<number>();
  const [isSuccess, setIsSuccess] = useState<boolean>();
  const navigate = useNavigate();

  const SubmitForm = async (data: any) => {
    data["accountType"] = accountType?.accountType;

    await axios
      .post(`http://localhost:3000/user`, data)
      .then((resp) => {
        setIsSuccess(true);
        navigate("/signin");
      })
      .catch((err) => {
        setIsError(err.response.status);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserFullRequest>({ resolver: yupResolver(CreateAccountSchema) });

  return (
    <Container>
      <Navbar />
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(SubmitForm)}>
          <div className="container--title">
            <h2>Cadastro</h2>
            <p>informações pessoais</p>
            {isSuccess && (
              <UIMessage
                propMessage="Usuário Cadastrado com Sucesso!"
                propIsSuccess={true}
              />
            )}
            {isError && (
              <UIMessage
                propMessage="Usuário já cadastrado"
                propIsError={true}
              />
            )}
          </div>
          <div className="container--inputs">
            <label htmlFor="name">
              Nome
              <input
                className="info--input"
                type="text"
                placeholder="Digite o seu nome aqui"
                id="name"
                {...register("name")}
              />
            </label>
            <p className="container--error">{errors.name?.message}</p>
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
            <label htmlFor="cpf">
              CPF
              <input
                className="info--input"
                type="text"
                placeholder="Ex: 000.000.000-00"
                id="cpf"
                {...register("cpf")}
              />
            </label>
            <p className="container--error">{errors.cpf?.message}</p>
            <label htmlFor="phoneNumber">
              Celular
              <input
                className="info--input"
                type="text"
                placeholder="Ex: +55(11)90000-0000"
                id="phoneNumber"
                {...register("phoneNumber")}
              />
            </label>
            <p className="container--error">{errors.phoneNumber?.message}</p>
            <label htmlFor="birthDate">
              Data de nascimento
              <input
                className="info--input"
                type="text"
                placeholder="00/00/0000"
                id="birthDate"
                {...register("birthDate")}
              />
            </label>
            <p className="container--error">{errors.birthDate?.message}</p>
            <label htmlFor="description">
              Descrição
              <input
                type="text"
                placeholder="Digitar descrição"
                id="description"
                {...register("description")}
              />
            </label>
            <p className="container--error">{errors.description?.message}</p>

            <p>informações de endereço</p>
            <label htmlFor="zipCode">
              CEP
              <input
                className="info--input"
                type="text"
                placeholder="00000-000"
                id="zipCode"
                {...register("zipCode")}
              />
            </label>
            <p className="container--error">{errors.zipCode?.message}</p>
            <label htmlFor="state">
              Estado
              <input
                type="text"
                placeholder="Digitar estado"
                id="state"
                {...register("state")}
              />
            </label>
            <p className="container--error">{errors.state?.message}</p>
            <label htmlFor="city">
              Cidade
              <input
                type="text"
                placeholder="Digitar cidade"
                id="city"
                {...register("city")}
              />
            </label>
            <p className="container--error">{errors.city?.message}</p>
            <label htmlFor="roadName">
              Rua
              <input
                className="info--input"
                type="text"
                placeholder="Digitar rua"
                id="roadName"
                {...register("roadName")}
              />
            </label>
            <p className="container--error">{errors.roadName?.message}</p>
            <label htmlFor="houseNumber">
              Número
              <input
                type="text"
                placeholder="Digitar número"
                id="houseNumber"
                {...register("houseNumber")}
              />
            </label>
            <p className="container--error">{errors.houseNumber?.message}</p>
            <label htmlFor="complement">
              Complement
              <input
                type="text"
                placeholder="Ex: apart 302"
                id="complement"
                {...register("complement")}
              />
            </label>
            <p className="container--error">{errors.complement?.message}</p>

            <p>Tipo de conta</p>
            <div className="form-account-type">
              <ButtonSelectType
                bgColor={
                  accountType?.accountType === "Comprador"
                    ? "var(--brand1)"
                    : "var(--white)"
                }
                textColor={
                  accountType?.accountType === "Comprador"
                    ? "var(--gray10)"
                    : "var(--gray1)"
                }
                border={true}
                type="button"
                onClick={() => setAccountType({ accountType: "Comprador" })}
              >
                Comprador
              </ButtonSelectType>
              <ButtonSelectType
                bgColor={
                  accountType?.accountType === "Anunciante"
                    ? "var(--brand1)"
                    : "var(--white)"
                }
                border={true}
                textColor={
                  accountType?.accountType === "Anunciante"
                    ? "var(--gray10)"
                    : "var(--gray1)"
                }
                type="button"
                onClick={() => setAccountType({ accountType: "Anunciante" })}
              >
                Anunciante
              </ButtonSelectType>
            </div>
            <label htmlFor="password">
              Senha
              <input
                className="info--input"
                type="password"
                placeholder="Digitar senha"
                id="password"
                {...register("password")}
              />
            </label>
            <p className="container--error">{errors.password?.message}</p>
            <label htmlFor="confirmPassword">
              Confirmar Senha
              <input
                className="info--input"
                type="password"
                placeholder="Digitar senha"
                id="confirmPassword"
                {...register("confirmPassword")}
              />
            </label>
            <p className="container--error">
              {errors.confirmPassword?.message}
            </p>
            <div>
              <ButtonForm bgColor="blue" txColor="white" type="submit">
                Finalizar Cadastro
              </ButtonForm>
            </div>
          </div>
        </FormContainer>
      </MainContainer>
      <Footer />
    </Container>
  );
};

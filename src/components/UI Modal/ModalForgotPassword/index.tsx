import { useState } from "react";
import { useForm } from "react-hook-form";
import { UIButton } from "../../UI Components/Button";
import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { FormTitle } from "../../UI Components/FormTitle";
import { UIInput } from "../../UI Components/Input";
import { UILabel } from "../../UI Components/Label";
import { UIMessage } from "../../UI Components/Message";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordSchema } from "../../../schemaYup/forgotPassword.modal.schema";
import { RequestAPI } from "../../../services/api";

type ModalForgotPasswordProps = {
  setStatement: () => void;
};

type IResponseApiError = {
  Error: string;
};
type IResponseApiSuccess = {
  0: object;
  1: string;
};

export const ModalForgotPassword = ({
  setStatement,
}: ModalForgotPasswordProps) => {
  const [isCodeRecive, setIsCodeRecive] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(true);
  const [isError, setIsError] = useState<IResponseApiError>();
  const [isSuccess, setIsSuccess] = useState<IResponseApiSuccess>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const handleReciveCode = () => {
    setIsEmailOpen(false);
    setIsCodeRecive(true);
  };

  const onSubmit = async (data: any) => {
    const resp = await RequestAPI("user/reset", "post", data);

    if (resp["Error"]) setIsError(resp);
    if (resp["0"]) setIsSuccess(resp);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormGroup propColumn="row" propJustify="space-between">
        <FormTitle>Recuperação de Senha</FormTitle>
        <UIButton
          onClick={setStatement}
          propBG="--transparent"
          propTextColor="--gray1"
        >
          X
        </UIButton>
      </FormGroup>
      {isEmailOpen && (
        <FormGroup>
          <UILabel>Email</UILabel>
          <UIInput
            placeholder="Insira seu Email"
            propBorder={true}
            {...register("email", { required: true })}
          />

          <UIButton propBG="--brand1" onClick={handleReciveCode}>
            Enviar
          </UIButton>
        </FormGroup>
      )}
      {isCodeRecive && (
        <FormGroup>
          <UILabel>Código de Verificação</UILabel>
          <UIInput
            placeholder="Insira seu Código"
            propBorder={true}
            {...register("resetCode", { required: true })}
          />
          {errors?.email && (
            <UIMessage
              propIsError={true}
              propMessage={errors.email?.message?.toString()!}
            />
          )}
          {errors?.resetCode && (
            <UIMessage
              propIsError={true}
              propMessage={errors.resetCode?.message?.toString()!}
            />
          )}
          {isSuccess && (
            <UIMessage
              propIsSuccess={true}
              propMessage={
                "Você receberá um novo email com uma senha provisória."
              }
            />
          )}
          {isError && (
            <UIMessage
              propIsError={true}
              propMessage={
                "Usuário não encontrado ou Código de verificação inválido."
              }
            />
          )}
          <UIButton
            propBG="--brand1"
            onClick={handleReciveCode}
            type={"submit"}
          >
            Enviar
          </UIButton>
        </FormGroup>
      )}
    </FormContainer>
  );
};

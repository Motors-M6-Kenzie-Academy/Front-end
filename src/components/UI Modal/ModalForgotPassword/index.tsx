import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UIButton } from "../../UI Components/Button";
import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { FormTitle } from "../../UI Components/FormTitle";
import { UIInput } from "../../UI Components/Input";
import { UILabel } from "../../UI Components/Label";
import { UIMessage } from "../../UI Components/Message";

type ModalForgotPasswordProps = {
  setStatement: () => void;
};

type ValidationsProps = {
  status: boolean;
  isSuccess?: object;
  isError?: object;
};

export const ModalForgotPassword = ({
  setStatement,
}: ModalForgotPasswordProps) => {
  const navigate = useNavigate();
  const [isEmailRecive, setIsEmailRecive] = useState<ValidationsProps>();
  const [isCodeRecive, setIsCodeRecive] = useState<ValidationsProps>();
  const [isNewPassRecive, setIsNewPassRecive] = useState<ValidationsProps>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleExitButton = () => {
    setStatement();
    navigate("/signin");
  };

  const onSubmitForm = async (data: any) => {
    console.log(data);

    if (data?.newPass) {
      const resp = await axios
        .post("http://localhost:3000/user/reset", data)
        .then((resp) => resp)
        .catch((err) => err);

      setIsNewPassRecive({
        status: resp?.data && true,
        isSuccess: resp?.data,
        isError: resp?.response,
      });

      return resp;
    }

    if (data?.code) {
      const resp = await axios
        .post("http://localhost:3000/user/reset", data)
        .then((resp) => resp)
        .catch((err) => err);
      console.log(resp);

      setIsCodeRecive({
        status: resp?.data && true,
        isSuccess: resp?.data,
        isError: resp?.response,
      });

      return resp;
    }

    if (data?.email) {
      const resp = await axios
        .post("http://localhost:3000/user/reset", data)
        .then((resp) => resp)
        .catch((err) => err);

      setIsEmailRecive({
        status: resp?.data && true,
        isSuccess: resp?.data,
        isError: resp?.response,
      });

      return resp;
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitForm)}>
      <FormGroup propColumn="row" propJustify="space-between">
        <FormTitle>Recuperação de Senha</FormTitle>
        <UIButton
          onClick={handleExitButton}
          propBG="--transparent"
          propTextColor="--gray1"
        >
          X
        </UIButton>
      </FormGroup>
      <FormGroup>
        <UILabel>Email</UILabel>
        <UIInput
          placeholder="Insira seu Email"
          propBorder={true}
          {...register("email", { required: true })}
          disabled={isEmailRecive?.status}
        />
        {isEmailRecive?.isSuccess && (
          <>
            <UIMessage
              propIsSuccess={true}
              propMessage={
                "Você receberá um código de verificação no seu email"
              }
            />
            <UILabel>Código de Verificação</UILabel>
            <UIInput
              placeholder="Insira seu Código"
              propBorder={true}
              {...register("code", { required: true })}
              disabled={isCodeRecive?.status}
            />
          </>
        )}
        {isEmailRecive?.isError && (
          <UIMessage
            propIsError={true}
            propMessage={"Email não foi encontrado."}
          />
        )}
        {isCodeRecive?.isError && (
          <UIMessage
            propIsError={true}
            propMessage={"Código de verificação inválido!"}
          />
        )}

        {isCodeRecive?.isSuccess && (
          <>
            <UIMessage
              propIsSuccess={true}
              propMessage={"Código de verificado com sucesso!"}
            />
            <UILabel>Nova Senha</UILabel>
            <UIInput
              placeholder="Insira sua nova senha"
              propBorder={true}
              {...register("newPass", { required: true })}
              disabled={isNewPassRecive?.status}
            />
          </>
        )}
        {isNewPassRecive?.isSuccess && (
          <UIMessage
            propIsSuccess={true}
            propMessage={"Nova senha alterada com sucesso!"}
          />
        )}

        <UIButton propBG="--brand1" type={"submit"}>
          Enviar
        </UIButton>
      </FormGroup>
    </FormContainer>
  );
};

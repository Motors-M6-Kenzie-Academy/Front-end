// Imports React Native Functions
import { useContext, useState } from "react";

// Imports Components UI
import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { UIButton } from "../../UI Components/Button";
import { UIInput } from "../../UI Components/Input";
import { UILabel } from "../../UI Components/Label";
import { FormTitle } from "../../UI Components/FormTitle";
import { FormParagraphy } from "../../UI Components/FormParagraphy";
import { UIMessage } from "../../UI Components/Message";

// Imports Extras Libs
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Imports Others Functions
import { editUserSchema } from "../../../validators/patch";
import { UserContext } from "../../../contexts/UserContexts";
import { getData } from "../../../utils/getData";

// Imports @Types
import {
  ISubmitFormData,
  ModalUpdateUserProps,
  UpdateStatement,
} from "./@types";

export const ModalUpdateUser = ({
  handleButtonToggle,
}: ModalUpdateUserProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitFormData>({
    resolver: yupResolver(editUserSchema),
  });

  const { userLogged } = useContext(UserContext);
  const [isUpdated, setIsUpdated] = useState<UpdateStatement>();

  const SubmitForm = async (data: any) => {
    const token = localStorage.getItem("@motors:token")!;

    await getData({
      endpoint: "user",
      data,
      method: "patch",
      token,
      id: userLogged?.id,
    }).then((resp) => {
      setIsUpdated({
        status: resp,
        message:
          resp === 200
            ? "Alterações realizadas com sucesso!"
            : "Verifique se os campos foram preenchidos corretamente.",
      });
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit(SubmitForm)}>
      <FormGroup propJustify="space-between" propColumn="row">
        <FormTitle>Editar perfil</FormTitle>
        <UIButton
          propBG="--transparent"
          propTextColor="--black"
          onClick={handleButtonToggle}
        >
          X
        </UIButton>
      </FormGroup>
      <FormParagraphy propTextColor="--gray1" propFontSize="0.9rem">
        informações pessoais
      </FormParagraphy>
      {isUpdated?.status && (
        <UIMessage
          propMessage={isUpdated.message}
          propIsError={isUpdated?.status === 404}
          propIsSuccess={isUpdated?.status === 200}
        />
      )}

      <FormGroup>
        <UILabel>Nome</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="Ex: Samuel Leão Silva"
          {...register("name")}
        />

        {errors.name && (
          <UIMessage
            propIsError={true}
            propMessage=" Esse campo deve conter apenas letras, sem acentuações"
          />
        )}
      </FormGroup>
      <FormGroup>
        <UILabel>Email</UILabel>
        <UIInput
          type={"email"}
          propBorder={true}
          placeholder="samuel@kenzie.com.br"
          {...register("email")}
        />

        {errors.email && (
          <UIMessage propIsError={true} propMessage="E-mail inválido" />
        )}
      </FormGroup>
      <FormGroup>
        <UILabel>CPF</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="900.880.090-00"
          {...register("cpf")}
        />

        {errors.cpf && (
          <UIMessage
            propIsError={true}
            propMessage="O CPF deve conter 11 números"
          />
        )}
      </FormGroup>
      <FormGroup>
        <UILabel>Celular</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="+55(99)99999-9999 "
          {...register("phoneNumber")}
        />

        {errors.phoneNumber && (
          <UIMessage
            propIsError={true}
            propMessage="O telefone deve conter 13 números"
          />
        )}
      </FormGroup>
      <FormGroup>
        <UILabel>Data de Nascimento</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="09/12/1990"
          {...register("birthDate")}
        />

        {errors.birthDate && (
          <UIMessage
            propIsError={true}
            propMessage="O formato de data é DD/MM/AAAA"
          />
        )}
      </FormGroup>
      <FormGroup>
        <UILabel>Descrição</UILabel>
        <UIInput
          propPadding="2rem"
          propBorder={true}
          type={"text"}
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          {...register("description")}
        />

        {errors.description && (
          <UIMessage
            propIsError={true}
            propMessage="Este campo deve conter no máximo 250 caracteres"
          />
        )}
      </FormGroup>

      <FormGroup propColumn="row" propJustify="flex-end">
        <UIButton
          propBG="--gray6"
          propTextColor="--gray2"
          onClick={handleButtonToggle}
          type="reset"
        >
          Cancelar
        </UIButton>
        <UIButton propBG="--brand1" type="submit">
          Salvar Alterações
        </UIButton>
      </FormGroup>
    </FormContainer>
  );
};

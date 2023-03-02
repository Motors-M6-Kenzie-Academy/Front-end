import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormContainer } from "../../UI Components/FormContainer";
import { FormTitle } from "../../UI Components/FormTitle";
import { FormParagraphy } from "../../UI Components/FormParagraphy";
import { FormGroup } from "../../UI Components/FormGroup";
import { UILabel } from "../../UI Components/Label";
import { UIInput } from "../../UI Components/Input";
import { UISpan } from "../../UI Components/Span";
import { UIButton } from "../../UI Components/Button";
import { editUserSchema } from "../../../validators/patch";

export interface ISubmitData {
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  birthDate: string;
  description: string;
}

type ModalUpdateUserProps = {
  setStatement: () => void;
};

export const ModalUpdateUser = ({ setStatement }: ModalUpdateUserProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitData>({
    resolver: yupResolver(editUserSchema),
  });

  const Submit = (data: any) => console.log(data);

  return (
    <FormContainer onSubmit={handleSubmit(Submit)}>
      <FormTitle>Editar perfil</FormTitle>
      <FormParagraphy>informações pessoais</FormParagraphy>
      <FormGroup>
        <UILabel>Nome</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="Ex: Samuel Leão Silva"
          {...register("name")}
        />
        {errors.name && (
          <UISpan>Esse campo deve conter apenas letras, sem acentuações</UISpan>
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
        {errors.email && <UISpan>E-mail inválido</UISpan>}
      </FormGroup>
      <FormGroup>
        <UILabel>CPF</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="900.880.090-00"
          {...register("cpf")}
        />
        {errors.cpf && <UISpan>O CPF deve conter 11 números</UISpan>}
      </FormGroup>
      <FormGroup>
        <UILabel>Celular</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="(084) 90909-9092"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <UISpan>O telefone deve conter 13 números</UISpan>
        )}
      </FormGroup>
      <FormGroup>
        <UILabel>Data de Nascimento</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="09/12/99"
          {...register("birthDate")}
        />
        {errors.birthDate && <UISpan>O formato de data é DD/MM/AAAA</UISpan>}
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
          <UISpan>Este campo deve conter no máximo 250 caracteres</UISpan>
        )}
      </FormGroup>

      <FormGroup propColumn="row" propJustify="flex-end">
        <UIButton
          propBG="--gray6"
          propTextColor="--gray2"
          onClick={setStatement}
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

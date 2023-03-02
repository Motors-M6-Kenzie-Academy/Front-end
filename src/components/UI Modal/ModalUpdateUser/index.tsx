import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormContainer } from "../../UI Components/FormContainer";
import { FormTitle } from "../../UI Components/FormTitle";
import { FormParagraphy } from "../../UI Components/FormParagraphy";
import { FormGroup } from "../../UI Components/FormGroup";
import { UILabel } from "../../UI Components/Label";
import { UIInput } from "../../UI Components/Input";
import { UIButton } from "../../UI Components/Button";
import { editUserSchema } from "../../../validators/patch";
import { UIMessage } from "../../UI Components/Message";

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
        {errors.name && <UIMessage propMessage="Esse campo recebe apenas letras, sem acentuações" propIsError={true} />}
      </FormGroup>
      <FormGroup>
        <UILabel>Email</UILabel>
        <UIInput
          type={"email"}
          propBorder={true}
          placeholder="samuel@kenzie.com.br"
          {...register("email")}
        />
        {errors.email && <UIMessage propMessage="E-mail inválido" propIsError={true} />}
      </FormGroup>
      <FormGroup>
        <UILabel>CPF</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="900.880.090-00"
          {...register("cpf")}
        />
        {errors.cpf && <UIMessage propMessage="O CPF deve conter 11 números" propIsError={true} />}
      </FormGroup>
      <FormGroup>
        <UILabel>Celular</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="(084) 90909-9092"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && <UIMessage propMessage="O telefone deve conter 13 números" propIsError={true} />}
      </FormGroup>
      <FormGroup>
        <UILabel>Data de Nascimento</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="09/12/99"
          {...register("birthDate")}
        />
        {errors.birthDate && <UIMessage propMessage="A data deve ser em formato de DD/MM/AAA" propIsError={true} />}
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
        {errors.description && <UIMessage propMessage="Este campo deve conter no máximo 250 caracteres" propIsError={true} />}
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

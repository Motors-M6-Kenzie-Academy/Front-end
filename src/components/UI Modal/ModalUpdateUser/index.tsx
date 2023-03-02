import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { UIButton } from "../../UI Components/Button";
import { UIInput } from "../../UI Components/Input";
import { UILabel } from "../../UI Components/Label";
import { FormTitle } from "../../UI Components/FormTitle";
import { FormParagraphy } from "../../UI Components/FormParagraphy";
import { UIMessage } from "../../UI Components/Message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserSchema } from "../../../validators/patch";
import axios from "axios";
import { UserContext } from "../../../contexts/UserContexts";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [isUpdated, setIsUpdated] = useState<number>();
  const { user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitData>({
    resolver: yupResolver(editUserSchema),
  });

  const SubmitForm = async (data: any) => {
    const token = localStorage.getItem("@motors:token");

    const resp = await axios
      .patch(`http://localhost:3000/user/${user?.id}`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then((resp) => {
        setIsUpdated(resp.status);
        return resp;
      })
      .catch((err) => {
        setIsUpdated(resp.response.status);
        return err;
      });
    navigate(0);
  };

  return (
    <FormContainer onSubmit={handleSubmit(SubmitForm)}>
      <FormTitle>Editar perfil</FormTitle>
      <FormParagraphy propTextColor="--gray1" propFontSize="0.9rem">
        informações pessoais
      </FormParagraphy>
      {isUpdated === 200 && (
        <UIMessage
          propMessage="Alterações realizadas com sucesso!"
          propIsSuccess={true}
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

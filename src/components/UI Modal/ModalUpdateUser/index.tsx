import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { UIButton } from "../../UI Components/Button";
import { UIInput } from "../../UI Components/Input";
import { UILabel } from "../../UI Components/Label";
import { FormTitle } from "../../UI Components/FormTitle";
import { FormParagraphy } from "../../UI Components/FormParagraphy";
import { useForm } from "react-hook-form";

type ModalUpdateUserProps = {
  setStatement: () => void;
};

export const ModalUpdateUser = ({ setStatement }: ModalUpdateUserProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Submit = (data: any) => console.log(data);

  return (
    <FormContainer onSubmit={handleSubmit(Submit)}>
      <FormTitle>Editar perfil</FormTitle>
      <FormParagraphy>informações pessoais</FormParagraphy>
      <FormGroup>
        <UILabel>Nome</UILabel>
        <UIInput
          type={"text"}
          placeholder="Ex: Samuel Leão Silva"
          {...register("name")}
        />
      </FormGroup>
      <FormGroup>
        <UILabel>Email</UILabel>
        <UIInput
          type={"email"}
          placeholder="samuel@kenzie.com.br"
          {...register("email")}
        />
      </FormGroup>
      <FormGroup>
        <UILabel>CPF</UILabel>
        <UIInput
          type={"text"}
          placeholder="900.880.090-00"
          {...register("cpf")}
        />
      </FormGroup>
      <FormGroup>
        <UILabel>Celular</UILabel>
        <UIInput
          type={"text"}
          placeholder="(084) 90909-9092"
          {...register("phoneNumber")}
        />
      </FormGroup>
      <FormGroup>
        <UILabel>Data de Nascimento</UILabel>
        <UIInput
          type={"text"}
          placeholder="09/12/99"
          {...register("birthdate")}
        />
      </FormGroup>
      <FormGroup>
        <UILabel>Descrição</UILabel>
        <UIInput
          propPadding="2rem"
          type={"text"}
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          {...register("description")}
        />
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

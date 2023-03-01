import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { UIButton } from "../../UI Components/Button";
import { UIInput } from "../../UI Components/Input";
import { UILabel } from "../../UI Components/Label";
import { FormTitle } from "../../UI Components/FormTitle";
import { FormParagraphy } from "../../UI Components/FormParagraphy";
import { useForm } from "react-hook-form";

type ModalUpdateAddressProps = {
  setStatement: () => void;
};

export const ModalUpdateAddress = ({
  setStatement,
}: ModalUpdateAddressProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Submit = (data: any) => console.log(data);

  return (
    <FormContainer onSubmit={handleSubmit(Submit)}>
      <FormTitle>Editar endereço</FormTitle>
      <FormParagraphy>informações de endereço</FormParagraphy>
      <FormGroup>
        <UILabel>CEP</UILabel>
        <UIInput
          type={"number"}
          propBorder={true}
          placeholder="89888.888"
          {...register("zipcode")}
        />
      </FormGroup>
      <FormGroup>
        <UILabel>Estado</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="Paraná"
          {...register("state")}
        />
      </FormGroup>
      <FormGroup>
        <UILabel>Cidade</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="9Curitiba"
          {...register("city")}
        />
      </FormGroup>
      <FormGroup>
        <UILabel>Rua</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="Rua do paraná"
          {...register("roadName")}
        />
      </FormGroup>
      <FormGroup>
        <UILabel>Número</UILabel>
        <UIInput
          type={"number"}
          propBorder={true}
          placeholder="1090"
          {...register("houseNumber")}
        />
      </FormGroup>
      <FormGroup>
        <UILabel>Complemento</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="Apart 12"
          {...register("complement")}
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

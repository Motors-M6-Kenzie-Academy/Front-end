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

// Imports Others Functions
import { UserContext } from "../../../contexts/UserContexts";
import { getData } from "../../../utils/getData";

// Imports @Types
import { ModalUpdateAddressProps, UpdateStatement } from "./@types";

export const ModalUpdateAddress = ({
  handleButtonToggle,
}: ModalUpdateAddressProps) => {
  const { register, handleSubmit } = useForm();
  const [isUpdated, setIsUpdated] = useState<UpdateStatement>();
  const { userLogged } = useContext(UserContext);

  const SubmitForm = async (data: any) => {
    const token = localStorage.getItem("@motors:token")!;
    await getData({
      endpoint: "address",
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
      <FormGroup propColumn="row" propJustify="space-between">
        <FormTitle>Editar endereço</FormTitle>
        <UIButton
          onClick={handleButtonToggle}
          propBG="--transparent"
          propTextColor="--gray1"
        >
          X
        </UIButton>
      </FormGroup>
      <FormParagraphy propTextColor="--gray1" propFontSize="0.8rem">
        informações de endereço
      </FormParagraphy>
      {isUpdated?.status && (
        <UIMessage
          propMessage={isUpdated.message}
          propIsError={isUpdated?.status === 404}
          propIsSuccess={isUpdated?.status === 200}
        />
      )}
      <FormGroup>
        <UILabel>CEP</UILabel>
        <UIInput
          type={"string"}
          propBorder={true}
          placeholder="89888-888"
          {...register("zipCode")}
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
          placeholder="Curitiba"
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

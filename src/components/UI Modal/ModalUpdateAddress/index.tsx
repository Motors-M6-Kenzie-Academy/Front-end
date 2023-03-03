import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { UIButton } from "../../UI Components/Button";
import { UIInput } from "../../UI Components/Input";
import { UILabel } from "../../UI Components/Label";
import { FormTitle } from "../../UI Components/FormTitle";
import { FormParagraphy } from "../../UI Components/FormParagraphy";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../../../contexts/UserContexts";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UIMessage } from "../../UI Components/Message";

type ModalUpdateAddressProps = {
  setStatement: () => void;
};

export const ModalUpdateAddress = ({
  setStatement,
}: ModalUpdateAddressProps) => {
  const navigate = useNavigate();
  const [isUpdated, setIsUpdated] = useState<number>();
  const { userLogged } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitForm = async (data: any) => {
    console.log(data);
    const token = localStorage.getItem("@motors:token");

    const resp = await axios
      .patch(`http://localhost:3000/address/${userLogged?.id}`, data, {
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
  };

  return (
    <FormContainer onSubmit={handleSubmit(SubmitForm)}>
      <FormGroup propColumn="row" propJustify="space-between">
        <FormTitle>Editar endereço</FormTitle>
        <UIButton
          onClick={setStatement}
          propBG="--transparent"
          propTextColor="--gray1"
        >
          X
        </UIButton>
      </FormGroup>
      <FormParagraphy propTextColor="--gray1" propFontSize="0.8rem">
        informações de endereço
      </FormParagraphy>
      {isUpdated === 200 && (
        <UIMessage
          propMessage="Alterações realizadas com sucesso!"
          propIsSuccess={true}
        />
      )}
      <FormGroup>
        <UILabel>CEP</UILabel>
        <UIInput
          type={"string"}
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

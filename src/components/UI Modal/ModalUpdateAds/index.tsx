import { useForm } from "react-hook-form";
import { UIButton } from "../../UI Components/Button";
import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { FormParagraphy } from "../../UI Components/FormParagraphy";
import { FormTitle } from "../../UI Components/FormTitle";
import { UIInput } from "../../UI Components/Input";
import { UILabel } from "../../UI Components/Label";

type ModalUpdateAdsProps = {
  setStatement: () => void;
  setConfirmDelete: () => void;
};
export const ModalUpdateAds = ({
  setStatement,
  setConfirmDelete,
}: ModalUpdateAdsProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Submit = (data: any) => console.log(data);
  return (
    <FormContainer onSubmit={handleSubmit(Submit)}>
      <FormGroup propColumn="row" propJustify="space-between">
        <FormTitle>Editar anúncio</FormTitle>
        <UIButton
          onClick={setStatement}
          propBG="--transparent"
          propTextColor="--gray1"
        >
          X
        </UIButton>
      </FormGroup>

      <FormTitle>Tipo de anúncio</FormTitle>
      <FormGroup propColumn="row" propJustify="center">
        <UIButton propBG="--brand1" propWidth="50%">
          Venda
        </UIButton>
        <UIButton
          propBG="--transparent"
          propBorder={true}
          propTextColor={"--gray1"}
          propWidth="50%"
        >
          Leilão
        </UIButton>
      </FormGroup>
      <FormTitle>Informações do Veículo</FormTitle>

      <FormGroup>
        <UILabel>Título</UILabel>
        <UIInput
          propBorder={true}
          type={"text"}
          placeholder="Digitar título"
          {...register("title")}
        />
      </FormGroup>
      <FormGroup propColumn="row" propJustify="flex-start">
        <FormGroup>
          <UILabel>Ano</UILabel>
          <UIInput
            propWidth="100%"
            propBorder={true}
            type={"text"}
            placeholder="Digitar ano"
            {...register("releaseYear")}
          />
        </FormGroup>
        <FormGroup>
          <UILabel>Quilometragem</UILabel>
          <UIInput
            propWidth="100%"
            propBorder={true}
            type={"text"}
            placeholder="0"
            {...register("mileage")}
          />
        </FormGroup>
        <FormGroup>
          <UILabel>Preço</UILabel>
          <UIInput
            propWidth="100%"
            propBorder={true}
            type={"text"}
            placeholder="Digitar preço"
            {...register("price")}
          />
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <UILabel>Descrição</UILabel>
        <UIInput
          propHeight="2rem"
          propBorder={true}
          type={"text"}
          placeholder="Digitar descrição"
          {...register("description")}
        />
      </FormGroup>

      <FormTitle>Tipo de veículo</FormTitle>

      <FormGroup propColumn="row" propJustify="center">
        <UIButton propBG="--brand1" propWidth="50%">
          Carro
        </UIButton>
        <UIButton
          propBG="--transparent"
          propBorder={true}
          propTextColor={"--gray1"}
          propWidth="50%"
        >
          Moto
        </UIButton>
      </FormGroup>

      <FormGroup>
        <UILabel>Imagem da Capa</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="Inserir URL da imagem"
          {...register("cover")}
        />
      </FormGroup>
      <FormGroup>
        <UILabel>1° Imagem da galeria</UILabel>
        <UIInput
          type={"text"}
          propBorder={true}
          placeholder="Inserir URL da imagem"
          {...register("gallery_image")}
        />
      </FormGroup>
      <FormGroup>
        <UIButton
          propBG="--gray7"
          propTextColor="--brand1"
          type="reset"
          propWidth="80%"
          propFontSize="0.8rem"
        >
          Adicionar campo para imagem da galeria
        </UIButton>
      </FormGroup>

      <FormGroup propColumn="row" propJustify="flex-end">
        <UIButton
          propBG="--gray6"
          propTextColor="--gray2"
          onClick={setConfirmDelete}
          type="reset"
        >
          Excluir Anúncio
        </UIButton>
        <UIButton propBG="--brand1" type="submit">
          Salvar Alterações
        </UIButton>
      </FormGroup>
    </FormContainer>
  );
};

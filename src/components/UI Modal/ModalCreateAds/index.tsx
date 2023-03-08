import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { UIButton } from "../../UI Components/Button";
import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { FormTitle } from "../../UI Components/FormTitle";
import { UIInput } from "../../UI Components/Input";
import { UILabel } from "../../UI Components/Label";
import { AdsContext } from "../../../contexts/AdsContexts";
import { UIMessage } from "../../UI Components/Message";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateAdsSchema } from "../../../schemaYup/createAds.schema";

type ModalCreateAdsProps = {
  setStatement: () => void;
};

type vehicleTypeProps = {
  vehicleType: string;
};

export const ModalCreateAds = ({ setStatement }: ModalCreateAdsProps) => {
  const { onSubmitAds } = useContext(AdsContext);
  const [vehicleType, setvehicleType] = useState<vehicleTypeProps>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateAdsSchema),
  });

  const Submit = (data: any) => {
    data["typeVehicle"] = vehicleType?.vehicleType;
    onSubmitAds(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(Submit)}>
      <FormGroup propColumn="row" propJustify="space-between">
        <FormTitle>Criar anúncio</FormTitle>
        <UIButton
          onClick={setStatement}
          propBG="--transparent"
          propTextColor="--gray1"
        >
          X
        </UIButton>
      </FormGroup>
      {/* {status && (
        <UIMessage
          propMessage="Anúncio foi criado com sucesso!"
          propIsSuccess={true}
        />
      )} */}
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
          type={"text"}
          placeholder="Digitar título"
          {...register("title")}
        />
        {errors.title && (
          <UIMessage
            propMessage={errors.title.message as string}
            propIsError={true}
          />
        )}
      </FormGroup>
      <FormGroup propColumn="row" propJustify="flex-start">
        <FormGroup>
          <UILabel>Ano</UILabel>
          <UIInput
            propWidth="100%"
            type={"text"}
            placeholder="Digitar ano"
            {...register("releaseYear")}
          />
          {errors.releaseYear && (
            <UIMessage
              propMessage={errors.releaseYear.message as string}
              propIsError={true}
            />
          )}
        </FormGroup>
        <FormGroup>
          <UILabel>Quilometragem</UILabel>
          <UIInput
            propWidth="100%"
            type={"text"}
            placeholder="0"
            {...register("mileage")}
          />
          {errors.mileage && (
            <UIMessage
              propMessage={errors.mileage.message as string}
              propIsError={true}
            />
          )}
        </FormGroup>
        <FormGroup>
          <UILabel>Preço</UILabel>
          <UIInput
            propWidth="100%"
            type={"text"}
            placeholder="Digitar preço"
            {...register("price")}
          />
          {errors.price && (
            <UIMessage
              propMessage={errors.price.message as string}
              propIsError={true}
            />
          )}
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <UILabel>Descrição</UILabel>
        <UIInput
          propHeight="2rem"
          type={"text"}
          placeholder="Digitar descrição"
          {...register("description")}
        />
        {errors.description && (
          <UIMessage
            propMessage={errors.description.message as string}
            propIsError={true}
          />
        )}
      </FormGroup>

      <FormTitle>Tipo de veículo</FormTitle>

      <FormGroup propColumn="row" propJustify="center">
        <UIButton
          propBG={
            vehicleType?.vehicleType === "car" ? "--brand1" : "--transparent"
          }
          propTextColor={
            vehicleType?.vehicleType === "car" ? "--white" : "--black"
          }
          propBorder={true}
          propWidth={"50%"}
          onClick={() => setvehicleType({ vehicleType: "car" })}
        >
          Carro
        </UIButton>
        <UIButton
          propBG={
            vehicleType?.vehicleType === "motorbike"
              ? "--brand1"
              : "--transparent"
          }
          propTextColor={
            vehicleType?.vehicleType === "motorbike" ? "--white" : "--black"
          }
          propBorder={true}
          propWidth={"50%"}
          onClick={() => setvehicleType({ vehicleType: "motorbike" })}
        >
          Moto
        </UIButton>
      </FormGroup>

      <FormGroup>
        <UILabel>Imagem da Capa</UILabel>
        <UIInput
          type={"text"}
          placeholder="Inserir URL da imagem"
          {...register("cover")}
        />
        {errors.cover && (
          <UIMessage
            propMessage={errors.cover.message as string}
            propIsError={true}
          />
        )}
      </FormGroup>
      <FormGroup>
        <UILabel>1° Imagem da galeria</UILabel>
        <UIInput
          type={"text"}
          placeholder="Inserir URL da imagem"
          {...register("gallery_image")}
        />
        {errors.gallery_image && (
          <UIMessage
            propMessage={errors.gallery_image.message as string}
            propIsError={true}
          />
        )}
      </FormGroup>
      <FormGroup>
        <UIButton
          propBG="--gray7"
          propTextColor="--brand1"
          type="reset"
          propWidth="70%"
          propFontSize="0.8rem"
        >
          Adicionar campo para imagem da galeria
        </UIButton>
      </FormGroup>

      <FormGroup propColumn="row" propJustify="flex-end">
        <UIButton
          propBG="--gray6"
          propTextColor="--gray2"
          type="reset"
          onClick={setStatement}
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

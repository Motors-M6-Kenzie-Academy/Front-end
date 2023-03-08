import { UIButton } from "../../UI Components/Button";
import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { FormParagraphy } from "../../UI Components/FormParagraphy";
import { FormTitle } from "../../UI Components/FormTitle";
import { useContext } from "react";
import { AdsContext } from "../../../contexts/AdsContexts";

type ModalDeleteAdsProps = {
  setStatement: () => void;
};

export const ModalDeleteAds = ({ setStatement }: ModalDeleteAdsProps) => {
  const { delAds, adsApi } = useContext(AdsContext);
  const id = adsApi.id;

  return (
    <FormContainer>
      <FormGroup propColumn="row" propJustify="space-between">
        <FormTitle>Excluir anúncio</FormTitle>
        <UIButton
          onClick={setStatement}
          propBG="--transparent"
          propTextColor="--gray1"
        >
          X
        </UIButton>
      </FormGroup>
      <FormGroup>
        <FormTitle>Tem certeza que deseja remover este anúncio? </FormTitle>
        <FormParagraphy
          propTextColor="--gray2"
          propWeight="400"
          propFontSize="0.8rem"
        >
          Essa ação não pode ser desfeita. Isso excluirá permanentemente o
          anúncio e removerá as informações do mesmo dos nossos servidores.
        </FormParagraphy>
      </FormGroup>
      <FormGroup propColumn="row" propJustify="flex-end">
        <UIButton propTextColor="--gray2">Cancelar</UIButton>
        <UIButton propTextColor="--alert1" onClick={() => delAds(id)}>
          Sim, excluir anúncio
        </UIButton>
      </FormGroup>
    </FormContainer>
  );
};

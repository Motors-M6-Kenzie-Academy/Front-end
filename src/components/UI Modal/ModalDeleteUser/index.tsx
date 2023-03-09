// Imports React Native Functions
import { useContext, useState } from "react";

// Imports Components UI
import { UIButton } from "../../UI Components/Button";
import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { FormTitle } from "../../UI Components/FormTitle";
import { UILabel } from "../../UI Components/Label";
import { UIInput } from "../../UI Components/Input";
import { UIMessage } from "../../UI Components/Message";

// Imports Extras Libs
import { useNavigate } from "react-router-dom";

// Imports Others Functions
import { UserContext } from "../../../contexts/UserContexts";
import { getData } from "../../../utils/getData";

type ModalDeleteUserProps = {
  setStatement: () => void;
};

export const ModalDeleteUser = ({ setStatement }: ModalDeleteUserProps) => {
  const navigate = useNavigate();
  const { userLogged } = useContext(UserContext);
  const [deleteUser, setDeleteUser] = useState<boolean>();

  const handleExitButton = () => {
    setStatement();
  };

  const SubmitForm = async (e: any) => {
    e.preventDefault();

    const token = localStorage.getItem("@motors:token")!;

    await getData({
      endpoint: "user",
      method: "delete",
      token,
      id: userLogged?.id,
    }).then((resp) => {
      localStorage.removeItem("@motors:token");
      setDeleteUser(true);
      setTimeout(() => navigate(0), 1000 * 2);
    });
  };
  return (
    <FormContainer onSubmit={(e) => SubmitForm(e)}>
      <FormGroup propColumn="row" propJustify="space-between">
        <FormTitle>Exclusão do usuário</FormTitle>

        <UIButton
          onClick={handleExitButton}
          propBG="--transparent"
          propTextColor="--gray1"
        >
          X
        </UIButton>
      </FormGroup>

      {deleteUser && (
        <UIMessage
          propMessage="Usuário excluido com sucesso!"
          propIsSuccess={true}
        />
      )}

      <UILabel>Deseja Excluir sua conta?</UILabel>
      <UIButton propBG="--alert1" type="submit">
        Excluir
      </UIButton>
    </FormContainer>
  );
};

import axios from "axios";
import { UIButton } from "../../UI Components/Button";
import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { FormTitle } from "../../UI Components/FormTitle";
import { UILabel } from "../../UI Components/Label";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UIInput } from "../../UI Components/Input";
import { UIMessage } from "../../UI Components/Message";
import { UserContext } from "../../../contexts/UserContexts";

type ModalDeleteUserProps = {
  setStatement: () => void;
};

export const ModalDeleteUser = ({ setStatement }: ModalDeleteUserProps) => {
  const { userLogged } = useContext(UserContext);
  const navigate = useNavigate();
  const [deleteUser, setDeleteUser] = useState<boolean>();
  const handleExitButton = () => {
    setStatement();
  };

  const SubmitForm = async (e: any) => {
    e.preventDefault();

    console.log(userLogged);

    const token = localStorage.getItem("@motors:token");

    await axios
      .delete(`http://localhost:3000/user/${userLogged?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        localStorage.removeItem("@motors:token");
        setDeleteUser(true);
        console.log(resp.data);
        navigate(0);
      })
      .catch((err) => err);
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
      <FormGroup>
        <UIInput
          placeholder="Agradeçemos o feedback!"
          propBorder={true}
          propHeight={"3rem"}
        />
      </FormGroup>
      <UIButton propBG="--alert1" type="submit">
        Excluir
      </UIButton>
    </FormContainer>
  );
};

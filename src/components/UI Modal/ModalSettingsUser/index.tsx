import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContexts";
import { ContainerSettingsUser } from "./styles";

type ModalSettingsUserProps = {
  setStatementProfile: () => void;
  setStatementAddress: () => void;
};

export const ModalSettingsUser = ({
  setStatementAddress,
  setStatementProfile,
}: ModalSettingsUserProps) => {
  const { logout } = useContext(UserContext);

  return (
    <ContainerSettingsUser>
      <button onClick={setStatementProfile}>Editar Perfil</button>
      <button onClick={setStatementAddress}>Editar Endereço</button>
      <button>Meus Anúncios</button>
      <button>Excluir Perfil</button>
      <button onClick={() => logout()}>Sair</button>
    </ContainerSettingsUser>
  );
};

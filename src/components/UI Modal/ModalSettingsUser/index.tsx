import { Link } from "react-router-dom";
import { ContainerSettingsUser } from "./styles";

type ModalSettingsUserProps = {
  setStatementProfile: () => void;
  setStatementAddress: () => void;
};

export const ModalSettingsUser = ({
  setStatementAddress,
  setStatementProfile,
}: ModalSettingsUserProps) => {
  return (
    <ContainerSettingsUser>
      <button onClick={setStatementProfile}>Editar Perfil</button>
      <button onClick={setStatementAddress}>Editar Endereço</button>
      <button>Meus Anúncios</button>
      <button>Excluir Perfil</button>
      <button>Sair</button>
    </ContainerSettingsUser>
  );
};

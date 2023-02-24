import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface IUserProviderData {
  isTokenAdd: boolean;
  setIsTokenAdd: Dispatch<SetStateAction<boolean>>;
}

interface IUserProviderProps {
  children: ReactNode;
}
export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [isTokenAdd, setIsTokenAdd] = useState(false);
  const navigate = useNavigate();

  return (
    <UserContext.Provider value={{ isTokenAdd, setIsTokenAdd }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

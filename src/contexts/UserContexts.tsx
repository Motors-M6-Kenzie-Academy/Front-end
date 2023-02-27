import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUserProviderData {
  isTokenAdd: boolean;
}

interface IUserProviderProps {
  children: ReactNode;
}
export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [isTokenAdd, setIsTokenAdd] = useState(true);
  const navigate = useNavigate();

  return (
    <UserContext.Provider value={{ isTokenAdd }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

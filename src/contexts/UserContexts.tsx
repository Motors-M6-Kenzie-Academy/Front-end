import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode, { JwtPayload } from "jwt-decode";

import {
  IListUser,
  ISignInRequest,
  ISignInResponse,
  IUserFullRequest,
} from "../interfaces/User";
import api from "../services/api";

interface IUserProviderData {
  isTokenAdd: boolean;
  createUser: (data: IUserFullRequest) => void;
  loginUser: (datas: ISignInRequest) => void;
  accountType: string;
  setAccountType: React.Dispatch<React.SetStateAction<string>>;
  logout: () => void;
  user?: IListUser;
}

interface IListUserRes {
  data: IListUser[];
}

interface IUserProviderProps {
  children: ReactNode;
}
export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [isTokenAdd, setIsTokenAdd] = useState(false);
  const [accountType, setAccountType] = useState("Anunciante");
  const [user, setUser] = useState<IListUser>();

  const navigate = useNavigate();

  const createUser = (data: IUserFullRequest) => {
    api
      .post("/user", data)
      .then(() => {
        navigate("/signin");
        // toast.success("Conta criada com sucesso.");
      })
      .catch(() => {
        // toast.error("Não foi possível realizar o cadastro.");
      });
  };

  const loginUser = async (datas: ISignInRequest) => {
    try {
      const { data }: ISignInResponse = await api.post("/signin", datas);
      localStorage.setItem("@motors:token", data.token);
      setIsTokenAdd(true);
      navigate("/");
    } catch (error) {
      // toast.error("Não foi possível realizar o login.");
      console.log(error);
    }
  };

  const getUser = async () => {
    const token = localStorage.getItem("@motors:token");

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const { data }: IListUserRes = await api.get("/user");
        const userId = jwt_decode<JwtPayload>(token).sub;

        const userFound = data.find((e) => e.id === userId);
        userFound && setUser(userFound);
      } catch (error) {
        console.log(error);
      }
    }
    setIsTokenAdd(false);
  };

  useEffect(() => {
    getUser();
  }, [isTokenAdd]);

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem("@motors:token");
  };

  return (
    <UserContext.Provider
      value={{
        isTokenAdd,
        createUser,
        loginUser,
        accountType,
        setAccountType,
        logout,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

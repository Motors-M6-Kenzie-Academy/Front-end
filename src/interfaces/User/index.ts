import { IAddressReponse, IAddressRequest } from "../Address";
import { IAds } from "../Ads";
import { ICommentsResponse } from "../Comments";

export interface IUserRequest {
  name: string;
  password: string;
  confirmPassword?: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  birthDate: string;
  description: string;
  accountType: "Anunciante" | "Comprador";
}

export interface IUserResponseComments {
  id: string;
  name: string;
  password?: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  birthDate: string;
  description: string;
  accountType: "Anunciante" | "Comprador";
  isActive: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserFullRequest extends IUserRequest, IAddressRequest {}

export interface IUserResponse extends IUserRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserFullResponse {
  user: IUserResponse;
  address: IAddressReponse;
}

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ISignInResponse {
  data: { token: string };
}

export interface IListUser extends IUserResponse {
  ads: IAds[];
  comments: ICommentsResponse[];
}

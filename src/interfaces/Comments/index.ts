import { IAds } from "../Ads";
import { IUserResponseComments } from "../User";

export interface ICommentsRequest {
  content: string;
}

export interface ICommentsResponse extends ICommentsRequest {
  id: string;
  createdAt: string;
  user: IUserResponseComments;
  ad: IAds;
}

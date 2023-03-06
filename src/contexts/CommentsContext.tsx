import { createContext, ReactNode, useState } from "react";
import { ICommentsRequest, ICommentsResponse } from "../interfaces/Comments";
import api, { RequestAPI } from "../services/api";

interface CommentsContextData {
  onSubmitComments: (data: ICommentsRequest) => void;
  listComments: ICommentsResponse[];
  setListComments: React.Dispatch<React.SetStateAction<ICommentsResponse[]>>;
  commentsApi: ICommentsResponse;
  setCommentsApi: React.Dispatch<React.SetStateAction<ICommentsResponse>>;
  adsId: string;
  setAdsId: React.Dispatch<React.SetStateAction<string>>;
  getComments: () => void;
}

export const CommentsContext = createContext<CommentsContextData>(
  {} as CommentsContextData
);

export interface ICommentsProvierProps {
  children: ReactNode;
}

const CommentsProvider = ({ children }: ICommentsProvierProps) => {
  const [listComments, setListComments] = useState<ICommentsResponse[]>([]);
  const [commentsApi, setCommentsApi] = useState<ICommentsResponse>(
    {} as ICommentsResponse
  );
  const [adsId, setAdsId] = useState<string>("");

  const token = localStorage.getItem("@motors:token")?.toString();

  const getComments = async () => {
    await api
      .get(`/comments/${adsId}`)
      .then((res) => {
        setListComments(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onSubmitComments = async (data: ICommentsRequest) => {
    const response = await RequestAPI("comments", "post", data, adsId, token);
    setListComments((oldComments) => [...oldComments, response]);
    setCommentsApi(response);
  };

  return (
    <CommentsContext.Provider
      value={{
        onSubmitComments,
        listComments,
        setListComments,
        commentsApi,
        setCommentsApi,
        adsId,
        setAdsId,
        getComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;

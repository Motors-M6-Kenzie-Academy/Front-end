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
  onDelComment: (id: string) => void
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

  const onSubmitComments = (data: ICommentsRequest) => {
    api
      .post(`comments/${adsId}`, data, {
        headers: { Authorization: `Bearer ${token}`},
      })
      .then((res) => {
      setListComments((oldComments) => [...oldComments, res.data]);
      setCommentsApi(res.data)
      return res.data
    })
      .catch((err) => err.response);
  };

  const onDelComment = (id: string) => {
    api
    .delete(`comments/${id}`)
    .then(() => {
      const delFilter = listComments.filter((el) => el.id !== id);
      setListComments(delFilter)
    })
    .catch((err) => console.log(err))
  }

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
        onDelComment
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;

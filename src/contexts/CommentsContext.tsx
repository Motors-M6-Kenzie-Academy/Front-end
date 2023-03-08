import { createContext, ReactNode, useState } from "react";
import { ICommentsRequest, ICommentsResponse } from "../interfaces/Comments";
import api from "../services/api";

interface CommentsContextData {
  onSubmitComments: (data: ICommentsRequest) => void;
  listComments: ICommentsResponse[];
  setListComments: React.Dispatch<React.SetStateAction<ICommentsResponse[]>>;
  commentsApi: ICommentsResponse;
  setCommentsApi: React.Dispatch<React.SetStateAction<ICommentsResponse>>;
  adsId: string;
  setAdsId: React.Dispatch<React.SetStateAction<string>>;
  getComments: (id: string) => void;
  onDelComment: (id: string) => void;
  commentId: string;
  setCommentId: React.Dispatch<React.SetStateAction<string>>;
  onPatchComment:  (commentId: string, data: string) => void;
  openUpdate: boolean;
  setOpenUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  autoPost: (data: ICommentsRequest) => void
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
  const [commentId, setCommentId] = useState<string>("");
  const [openUpdate, setOpenUpdate] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const token = localStorage.getItem("@motors:token")?.toString();

  const autoPost = (data: ICommentsRequest) => {
    onSubmitComments(data)
  }

  const getComments = async (id: string) => {
    await api
      .get(`/comments/${id}`)
      .then((res) => {
        setListComments(res.data.reverse());
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const onSubmitComments = (data: ICommentsRequest) => {
    api
      .post(`comments/${adsId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setListComments((oldComments) => [...oldComments, res.data]);
        setCommentsApi(res.data);
        getComments(adsId);
      })
      .catch((err) => err.response);
  };

  const onPatchComment = async (commentId: string, content: string) => {

    api
    .patch(`comments/${commentId}`, {content}, {
      headers: { Authorization: `Bearer ${token}`},
    })
    .then((res) => {
      getComments(adsId)
    })
    .catch((err) => console.log(err))
  }

  const onDelComment = (commentId: string) => {
    api
      .delete(`comments/${commentId}`)
      .then(() => {
        const delFilter = listComments.filter((el) => el.id !== commentId);
        setListComments(delFilter);
      })
      .catch((err) => console.log(err));
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
        onDelComment,
        commentId,
        setCommentId,
        onPatchComment,
        openUpdate,
        setOpenUpdate,
        isLoading,
        setIsLoading,
        autoPost,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;

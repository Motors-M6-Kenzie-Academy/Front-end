import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { IAds } from "../interfaces/Ads";
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

  const getComments = async () => {

    await api
      .get(`/comments/${adsId}`)
      .then((res) => {
        setListComments(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onSubmitComments = async (data: ICommentsRequest) => {
    const response = await RequestAPI("comments/", "post", data, `${adsId}`);
    setListComments((oldComments) => [...oldComments, response]);
    setCommentsApi(response);

    // api
    // .post("/comments/", data)
    // .then((res) => {
    //     setListComments((oldComments) => [...oldComments, res.data])
    //     setCommentsApi(res.data)
    // })
    // .catch((err) => console.log(err));
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

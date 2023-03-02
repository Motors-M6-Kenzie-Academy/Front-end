import { createContext, ReactNode, useState, useEffect } from "react";
import { ICommentsRequest, ICommentsResponse } from "../interfaces/Comments";
import api from "../services/api";

interface CommentsContextData{
    onSubmitComments: (data: ICommentsRequest) => void;
    listComments: ICommentsResponse[];
    setListComments: React.Dispatch<React.SetStateAction<ICommentsResponse[]>>;
    commentsApi: ICommentsResponse;
    setCommentsApi: React.Dispatch<React.SetStateAction<ICommentsResponse>>
}

export const CommentsContext = createContext<CommentsContextData>(
    {} as CommentsContextData
);

export interface ICommentsProvierProps {
    children: ReactNode;
  }

const CommnetsProvider = ({children}: ICommentsProvierProps) => {

    const [listComments, setListComments] = useState<ICommentsResponse[]>([])
    const [commentsApi, setCommentsApi] = useState<ICommentsResponse>({} as ICommentsResponse)

    const getComments = async () => {
        await api
          .get("/ads")
          .then((res) => {
            setListComments(res.data);
          })
          .catch((err) => console.log(err));
      };
    
      useEffect(() => {
        getComments();
      }, []);

    const onSubmitComments = (data: ICommentsRequest) => {
        api
        .post("/comments/", data)
        .then((res) => {
            setListComments((oldComments) => [...oldComments, res.data])
            setCommentsApi(res.data)
        })
        .catch((err) => console.log(err));
    };

    return (
        <CommentsContext.Provider value={{
            onSubmitComments,
            listComments,
            setListComments,
            commentsApi,
            setCommentsApi
        }}>
            {children}
        </CommentsContext.Provider>
    );
};

export default CommnetsProvider
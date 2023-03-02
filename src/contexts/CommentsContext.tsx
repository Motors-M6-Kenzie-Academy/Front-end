import { createContext, ReactNode, useState, useEffect } from "react";
import { ICommentsRequest, ICommentsResponse } from "../interfaces/Comments";
import api from "../services/api";

interface CommentsContextData{
    onSubmitComments: (data: ICommentsRequest) => void;
    listComments: ICommentsResponse[];
    setListComments: React.Dispatch<React.SetStateAction<ICommentsResponse[]>>;
    commnetsApi: ICommentsResponse;
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
    const [commnetsApi, setCommentsApi] = useState<ICommentsResponse>({} as ICommentsResponse)

    const onSubmitComments = (data: ICommentsRequest) => {
        api
        .post("/comments/:adsId", data)
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
            commnetsApi,
            setCommentsApi
        }}>
            {children}
        </CommentsContext.Provider>
    );
};

export default CommnetsProvider
import { createContext, ReactNode, useState } from "react"
import { IAds, IAdsRequest } from "../interfaces/Ads"
import api from "../services/api"

interface AdsContextData{
    listAds: IAds[];
    newAdsList: (ads: IAdsRequest) => void;
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdsContext = createContext<AdsContextData>(
    {} as AdsContextData
)

export interface IAuthProvier {
    children: ReactNode;
  }


const AdsProvider = ({ children }: IAuthProvier) => {
    const [listAds, setListAds] = useState<IAds[]>([])
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const newAdsList = (ads: IAdsRequest) => {
        api.post("/ads", ads)
        .then((res) => {
            setIsOpenModal(false)
        })
        .catch((error) => console.log(error))
    }

    return (
        <AdsContext.Provider
            value = {{
                listAds,
                newAdsList,
                isOpenModal,
                setIsOpenModal,
            }}
            >
                {children}
        </AdsContext.Provider>
    );
};

export default AdsProvider
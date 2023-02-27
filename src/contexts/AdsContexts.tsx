import { createContext, ReactNode, useState, useEffect } from "react"
import { IAds, IAdsRequest } from "../interfaces/Ads"
import api from "../services/api"

interface AdsContextData{
    listAds: IAds[];
    onSubmitAds: (data: IAdsRequest) => void;
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    setTypeVehicle: React.Dispatch<React.SetStateAction<string>>;
    type_vehicle: string;
    onSubmitUpdate: (id: string, dataUpdate: IAdsRequest) => void;
    isOpenModalUpdate: boolean;
    setIsOpenModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdsContext = createContext<AdsContextData>(
    {} as AdsContextData
)

export interface IAuthProvier {
    children: ReactNode;
  }

const AdsProvider = ({ children }: IAuthProvier) => {
    const [adsApi, setAdsApi] = useState<IAds>({} as IAds)
    const [listAds, setListAds] = useState<IAds[]>([])
    const [type_vehicle, setTypeVehicle] = useState<string>("car")
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false)

    // const tokenUser = localStorage.getItem("@login:token")

    
    const onSubmitAds = (data: IAdsRequest) => {
        api
        .post("/ads", data)
        .then((res) => {
            setListAds((oldAds) => [...oldAds, res.data])
            setAdsApi(res.data)
            console.log(res.data)
            setIsOpenModal(false)
        })
        .catch((err) => console.log(err))
    }

    const onSubmitUpdate = (id: string, dataUpdate: IAdsRequest) => {
        api.patch(`/ads/${id}`, dataUpdate)
        .then((res) => {
            console.log(res.data)
            setListAds((ads) => [...ads, res.data])
            setIsOpenModal(false)
        }) 
        .catch((err) => console.log(err))
    }

    // useEffect(() => {
    //     if (tokenUser) {
    //       api
    //         .get("/ads", {
    //           headers: { Authorization: `Bearer ${tokenUser}` },
    //         })
    //         .then((res) => {
    //           setListAds(res.data)
    //           setIsOpenModal(false)
    //         })
    //         .catch((err) => console.error(err));
    //     }
    //   }, []);

    return (
        <AdsContext.Provider
            value = {{
                listAds,
                onSubmitAds,
                isOpenModal,
                setIsOpenModal,
                setTypeVehicle,
                type_vehicle,
                isOpenModalUpdate,
                setIsOpenModalUpdate,
                onSubmitUpdate,
            }}
            >
                {children}
        </AdsContext.Provider>
    );
};

export default AdsProvider
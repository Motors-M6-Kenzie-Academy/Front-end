import { createContext, ReactNode, useState, useEffect } from "react";
import { IAds, IAdsRequest, IAdsResponse } from "../interfaces/Ads";
import api from "../services/api";

interface AdsContextData {
  listAds: IAds[];
  onSubmitAds: (data: IAdsRequest) => void;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTypeVehicle: React.Dispatch<React.SetStateAction<string>>;
  type_vehicle: string;
  listCars: IAds[];
  listMotorbikes: IAds[];
  delAds: (id: string) => void;
  onSubmitUpdate: (id: string, dataUpdate: IAdsRequest) => void;
  isOpenModalUpdate: boolean;
  setIsOpenModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalDelete: boolean
  setIsOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  adsApi: IAds
}

export const AdsContext = createContext<AdsContextData>({} as AdsContextData);

export interface IAuthProvier {
  children: ReactNode;
}

const AdsProvider = ({ children }: IAuthProvier) => {
  const [adsApi, setAdsApi] = useState<IAds>({} as IAds);
  const [listAds, setListAds] = useState<IAds[]>([]);
  const [listCars, setlistCars] = useState<IAds[]>([]);
  const [listMotorbikes, setlistMotorbikes] = useState<IAds[]>([]);
  const [type_vehicle, setTypeVehicle] = useState<string>("car");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(true)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)

  //const tokenUser = localStorage.getItem("@login:token")

  const getAds = async () => {
    await api
      .get("/ads")
      .then((res: IAdsResponse) => {
        setListAds(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAds();
  }, []);

  const onSubmitAds = (data: IAdsRequest) => {
    api
      .post("/ads", data)
      .then((res) => {
        setListAds((oldAds) => [...oldAds, res.data])
        setAdsApi(res.data)
        setIsOpenModal(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const splitAds = () => {
      const AdsCarsFilter = listAds.filter((ad) => ad.typeVehicle === "car");
      setlistCars(AdsCarsFilter);

      const AdsMotorbikesFilter = listAds.filter(
        (ad) => ad.typeVehicle === "motorbike"
      );
      setlistMotorbikes(AdsMotorbikesFilter);
    };
    splitAds();
  }, [listAds]);

  const onSubmitUpdate = (id: string, dataUpdate: IAdsRequest) => {
    api.patch(`/ads/${id}`, dataUpdate)
    .then((res) => {
        console.log(res.data)
        setListAds((ads) => [...ads, res.data])
        setIsOpenModal(false)
    }) 
    .catch((err) => console.log(err))
}

  const delAds = (id: string) => {
    api
    .delete(`/ads/${id}`)
    .then(() => {
        const deletedFiltered = listAds.filter((elem) => elem.id !== id);
        setListAds(deletedFiltered)
    })
    .catch((err) => console.log(err));
  }

  return (
    <AdsContext.Provider
      value={{
        listAds,
        onSubmitAds,
        isOpenModal,
        setIsOpenModal,
        setTypeVehicle,
        type_vehicle,
        listCars,
        listMotorbikes,
        delAds,
        onSubmitUpdate,
        isOpenModalDelete, 
        setIsOpenModalDelete,
        isOpenModalUpdate,
        setIsOpenModalUpdate,
        adsApi
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};

export default AdsProvider;

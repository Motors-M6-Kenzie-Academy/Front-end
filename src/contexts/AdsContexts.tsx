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

  // const tokenUser = localStorage.getItem("@login:token")

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
      .then(() => {
        getAds();
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
      value={{
        listAds,
        onSubmitAds,
        isOpenModal,
        setIsOpenModal,
        setTypeVehicle,
        type_vehicle,
        listCars,
        listMotorbikes,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};

export default AdsProvider;

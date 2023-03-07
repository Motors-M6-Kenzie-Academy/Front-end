import { useMediaQuery } from "react-responsive";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ContainerPage } from "./styles";
import MobileAd from "../../components/MobileAd";
import DesktopAd from "../../components/DesktopAd";
import { useState } from "react";
import { ModalContainer } from "../../components/UI Components/ModalContainer";
import { ModalUpdateComments } from "../../components/UI Modal/ModalUpdateComment";

const AdPage = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 900px)" });
  const [updateComments, setUpdateComments] = useState(false)

  const handleModalUpdateComments = () => {
    setUpdateComments(!updateComments)
  }

  return (
    <>
      <Navbar />
      <ContainerPage>{isTablet ? <MobileAd handleUpdateToggle={handleModalUpdateComments} /> : <DesktopAd handleUpdateToggle={handleModalUpdateComments} />}</ContainerPage>
      <Footer />
      {updateComments && (
      <ModalContainer>
        <ModalUpdateComments handleUpdateToggle={handleModalUpdateComments} />
      </ModalContainer>
    )}
    </>
  );
};

export default AdPage;

//

import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ContainerPage } from "./styles";
import MobileAd from "../../components/MobileAd";
import DesktopAd from "../../components/DesktopAd";
import { ModalContainer } from "../../components/UI Components/ModalContainer";
import { ModalUpdateComments } from "../../components/UI Modal/ModalUpdateComment";
import { CommentsContext } from "../../contexts/CommentsContext";

const AdPage = () => {
  const { getComments } = useContext(CommentsContext);

  const isTablet = useMediaQuery({ query: "(max-width: 900px)" });
  const [updateComments, setUpdateComments] = useState(false);

  const handleModalUpdateComments = () => {
    setUpdateComments(!updateComments);
  };

  const params = useParams();

  useEffect(() => {
    const id = params.id;
    if (id) {
      getComments(id);
    }
  }, [, params.id]);

  return (
    <>
      <Navbar />
      <ContainerPage>
        {isTablet ? (
          <MobileAd handleUpdateToggle={handleModalUpdateComments} />
        ) : (
          <DesktopAd handleUpdateToggle={handleModalUpdateComments} />
        )}
      </ContainerPage>
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

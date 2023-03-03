import { useMediaQuery } from "react-responsive";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ContainerPage } from "./styles";
import MobileAd from "../../components/MobileAd";
import DesktopAd from "../../components/DesktopAd";

const AdPage = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <>
      <Navbar />
      <ContainerPage>{isTablet ? <MobileAd /> : <DesktopAd />}</ContainerPage>
      <Footer />
    </>
  );
};

export default AdPage;

//

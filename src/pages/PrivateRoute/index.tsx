import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const PrivateRout = () => {
  const token = localStorage.getItem("@userAuth");
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div>
      <Navbar />
      <p>Rota Privada</p>
      <Footer />
    </div>
  );
};

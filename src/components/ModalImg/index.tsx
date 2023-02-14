import Car from "../../assets/car.svg";
import { ContainerImg } from "./styles";

const ModalImg = () => {
    return(
    <ContainerImg>
        <div className="modalBox">
            <div className="headerModal">
                <h2>Imagem do veículo</h2>
                <button type="button" className="btnClose">X</button>
            </div>

            <div className="divImg">
                <img src={Car} alt="adsImg" />
            </div>
        </div>
    </ContainerImg>
    )
}

export default ModalImg
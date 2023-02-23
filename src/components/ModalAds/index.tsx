import { Form } from "../Forms/styles";
import { Container } from "./styles";
import { IAdsRequest } from "../../interfaces/Ads";
import {useForm} from "react-hook-form"

const Modal = () => {
    const { register } = useForm<IAdsRequest>();

    return(
        <Container>
            <div className="modalBox">
                <div className="headerModal">
                    <h2>Criar anúncio</h2>
                    <button className="btnClose">X</button>
                </div>

                <div className="formNewAd">
                    <Form>
                        <p>Tipo de Anúncio</p>
                        <div className="btnType">
                            <button className="btnSell">Venda</button>
                            <button className="btnBid">Leilão</button>
                        </div>

                        <p>Informações do Veículo</p>
                        <label htmlFor="Ads">Título</label>
                        <input type="text" id="title" {...register('title')} placeholder="Digitar título"/>

                        <div className="infoVehicle">
                            <label htmlFor="Ads">Ano</label>
                            <input type="text" id="year" {...register('releaseYear')} placeholder="Digitar ano"/>

                            <label htmlFor="Ads">Quilometragem</label>
                            <input type="text" id="km" {...register('mileage')} placeholder="0"/>

                            <label htmlFor="Ads">Preço</label>
                            <input type="text" id="price" {...register('price')} placeholder="Digitar preço"/>
                        </div>

                        <label htmlFor="Ads">Descrição</label>
                        <input type="text" id="description" {...register('description')} placeholder="Digitar descrição"/>

                        <p>Tipo de veículo</p>
                        <div className="listVehicleType">
                            <button className="btnVType">Venda</button>
                            <button className="btnVType">Leilão</button>
                        </div>

                        <label htmlFor="Ads">Imagem da Capa</label>
                        <input type="text" id="cover" {...register('cover')} placeholder="Inserir URL da imagem"/>

                        <label htmlFor="Ads">Imagem da Galeria</label>
                        <input type="text" id="gallery" {...register('gallery_image')} placeholder="Inserir URL da imagem"/>

                        <div className="btnPublish">
                            <button className="btnCancel">Cancelar</button>
                            <button className="btnCreate">Criar anúncio</button>
                        </div>
                    </Form>
                </div>
                
            </div>
        </Container>
    )
}

export default Modal
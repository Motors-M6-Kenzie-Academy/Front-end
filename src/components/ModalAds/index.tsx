import { Form } from "../Forms/styles";
import { Container } from "./styles";
import { IAdsRequest } from "../../interfaces/Ads";
import {useForm} from "react-hook-form"
import { useContext } from "react";
import { AdsContext } from "../../contexts/AdsContexts";

const Modal = () => {
    const { register, handleSubmit } = useForm<IAdsRequest>();
    const {onSubmitAds, isOpenModal, setIsOpenModal, setTypeVehicle, type_vehicle} = useContext(AdsContext)
    
    const onSubmitFunc = (data: any) => {
     data.typeVehicle = type_vehicle

     onSubmitAds(data)
    }

    return(
        <>
        {
            isOpenModal && (
            <Container>
                <div className="modalBox">
                    <div className="headerModal">
                        <h2>Criar anúncio</h2>
                        <button type="button" className="btnClose" onClick={() => setIsOpenModal(false)}>X</button>
                    </div>
    
                    <div className="formNewAd">
                        <Form onSubmit={handleSubmit(onSubmitFunc)}>
                            <div className="initModal">
                                <p>Tipo de Anúncio</p>
                                <div className="btnType">
                                    <button type="button" className="btnSell">Venda</button>
                                    <button type="button" className="btnBid">Leilão</button>
                                </div>
    
                                <p>Informações do Veículo</p>
    
                                <div className="titleAds">
                                    <label htmlFor="Ads">Título</label>
                                    <input type="text" id="title" {...register('title')} placeholder="Digitar título"/>
                                </div>  
                            </div>
    
                            <div className="listInfoVehicle">
                                <div className="infoVehicle">
                                    <label htmlFor="Ads">Ano</label>
                                    <input type="text" id="year" {...register('releaseYear')} placeholder="Digitar ano"/>
                                </div>
    
                                <div className="infoVehicle">
                                    <label htmlFor="Ads">Quilometragem</label>
                                    <input type="text" id="km" {...register('mileage')} placeholder="0"/>
                                </div>
    
                                <div className="infoVehicle">
                                    <label htmlFor="Ads">Preço</label>
                                    <input type="text" id="price" {...register('price')} placeholder="Digitar preço"/>
                                </div>
                            </div>
    
                            <div className="vehicleType">
                                <label htmlFor="Ads">Descrição</label>
                                <input type="text" id="description" {...register('description')} placeholder="Digitar descrição"/>
    
                                <p>Tipo de veículo</p>
                                <div className="listVehicleType">
                                    <button type="button" className="btnVType" onClick= {() => setTypeVehicle("car")}>Carro</button>
                                    <button type="button" className="btnVType" onClick= {() => setTypeVehicle("motorbike")}>Moto</button>
                                </div>
                            </div>
    
                            <div className="imgAds">
                                <label htmlFor="Ads">Imagem da Capa</label>
                                <input type="text" id="cover" {...register('cover')} placeholder="Inserir URL da imagem"/>
    
                                <label htmlFor="Ads">Imagem da Galeria</label>
                                <input type="text" id="gallery" {...register('gallery_image')} placeholder="Inserir URL da imagem"/>
                            </div>
    
                            <div className="btnPublish">
                                <button className="btnCancel">Cancelar</button>
                                <button type="submit" className="btnCreate">Criar anúncio</button>
                            </div>
                        </Form>
                    </div>
                    
                </div>
            </Container>
            )
        }
    </>
    )
}

export default Modal
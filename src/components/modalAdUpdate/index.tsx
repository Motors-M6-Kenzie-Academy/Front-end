import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AdsContext } from "../../contexts/AdsContexts";
import { Container } from "./styles";
import { IAdsRequest } from "../../interfaces/Ads" 


const ModalAdUpdate = (ads: any) => {
    const { isOpenModalUpdate, setIsOpenModalUpdate, onSubmitUpdate, type_vehicle, setTypeVehicle, setIsOpenModalDelete, adsApi } = useContext(AdsContext)
    const { register, handleSubmit } = useForm<IAdsRequest>();
    
    const onSubmitAdsUpdateFunc = (data: any) => {
        console.log(data)
        data.typeVehicle = type_vehicle
        const id = adsApi.id
        onSubmitUpdate(id, data)
    }

    const openModal = () => {
        setIsOpenModalUpdate(false)
        setIsOpenModalDelete(true)
    }

    return(
        <>
            {
                isOpenModalUpdate && (
                    <Container>
                        <div className="modalAdUpdateBox">
                            <div className="headerModalBox">
                                <h2>Editar Anúncio</h2>
                                <button type="button" className="buttonClose" onClick={() => setIsOpenModalUpdate(false)}>X</button>
                            </div>

                            <div className="divFormUpdateAd">
                                <form className="formUpadate" onSubmit={handleSubmit(onSubmitAdsUpdateFunc)} >
                                    <div className="initModalAdEdit">
                                        <p>Tipo de Anúncio</p>
                                        <div className="buttonsTypeAd">
                                            <button type="button" className="buttonStyle">Venda</button>
                                            <button type="button" className="buttonStyle">Leilão</button>
                                        </div>

                                        <p className="p_Info">Informações do Veículo</p>

                                        <div className="titleAdEdit">
                                            <label htmlFor="ads">Título</label>
                                            <input type="text" id="title" {...register('title')} placeholder="Digitar título"/>
                                        </div>
                                    </div>
                                    
                                    <div className="listInfosVehicle">
                                        <div className="infoVehicle">
                                            <label htmlFor="Ads">Ano</label>
                                            <input type="text" id="year" {...register('releaseYear')} placeholder="ano"/>
                                        </div>
                                        
                                        <div className="infoVehicle">
                                            <label htmlFor="Ads">Quilometragem</label>
                                            <input type="text" id="km" {...register('mileage')} placeholder="km"/>
                                        </div>
                                        
                                        <div className="infoVehicle" id="priceInfoVehicle">
                                            <label htmlFor="Ads">Preço</label>
                                            <input type="text" id="price" {...register('price')} placeholder="price"/>
                                        </div>
                                    </div>

                                    <div className="vehicleType">
                                        <div className="description">
                                            <label htmlFor="Ads">Descrição</label>
                                            <input type="text" id="description" {...register('description')} placeholder="descrição" />
                                        </div>

                                        <p>Tipo do Veículo</p>
                                        <div className="buttonVehicleType">
                                            <button type="button" className="buttonStyle" onClick={() => setTypeVehicle('car')}>Carro</button>
                                            <button type="button" className="buttonStyle" onClick={() => setTypeVehicle('motobike')}>Moto</button>
                                        </div>
                                    </div>

                                    <div className="imgAdsUpadate">
                                        <label htmlFor="Ads">Imagem da Capa</label>
                                        <input type="text" id="cover" {...register('cover')} placeholder="Inserir URL da imagem" />
                                        
                                        <label htmlFor="Ads">1° Imagem da Galeria</label>
                                        <input type="text" id="gallery" {...register('gallery_image')} placeholder="Inserir URL da imagem" />
                                        
                                        {/* <label htmlFor="Ads">2° Imagem da Galeria</label>
                                        <input type="text" id="gallery" placeholder="Inserir URL da imagem" /> */}
                                    
                                        <button className="buttonAddImg">Adicionar Campo para imagem da galeria</button>
                                    </div>

                                    <div className="ButtonUpdate">
                                        <button className="buttonStyleUpdate" id="buttonCancel" onClick={() => openModal()}>Excluir Anúncio</button>
                                        <button className="buttonStyleUpdate" type="submit" id="buttonSave">Salvar Alterações</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Container>
                )
            }
        </>
    )
}

export default ModalAdUpdate;
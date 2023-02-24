import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AdsContext } from "../../contexts/AdsContexts";
import { Container } from "./styles";
import { IAdsRequest } from "../../interfaces/Ads" 


const ModalAdUpdate = () => {
    const { setIsOpenModal } = useContext(AdsContext)
    const { register, handleSubmit } = useForm<IAdsRequest>();
    
    const onSubmitUpdate = (data: any) => {
        
    }

    return(
        <Container>
            <div className="modalAdUpdateBox">
                <div className="headerModalBox">
                    <h2>Editar Anúncio</h2>
                    <button type="button" className="buttonClose" onClick={() => setIsOpenModal(false)}>X</button>
                </div>

                <div className="divFormUpdateAd">
                    <form className="formUpadate" >
                        <div className="initModalAdEdit">
                            <p>Tipo de Anúncio</p>
                            <div className="buttonsTypeAd">
                                <button className="buttonStyle">Venda</button>
                                <button className="buttonStyle">Leilão</button>
                            </div>

                            <p className="p_Info">Informações do Veículo</p>

                            <div className="titleAdEdit">
                                <label htmlFor="ads">Título</label>
                                <input type="text" id="title" placeholder="Digitar título"/>
                            </div>
                        </div>
                        
                        <div className="listInfosVehicle">
                            <div className="infoVehicle">
                                <label htmlFor="Ads">Ano</label>
                                <input type="text" id="year" placeholder="ano"/>
                            </div>
                            
                            <div className="infoVehicle">
                                <label htmlFor="Ads">Quilometragem</label>
                                <input type="text" id="km" placeholder="km"/>
                            </div>
                            
                            <div className="infoVehicle" id="priceInfoVehicle">
                                <label htmlFor="Ads">Preço</label>
                                <input type="text" id="price" placeholder="price"/>
                            </div>
                        </div>

                        <div className="vehicleType">
                            <div className="description">
                                <label htmlFor="Ads">Descrição</label>
                                <input type="text" id="description" placeholder="descrição" />
                            </div>

                            <p>Tipo do Veículo</p>
                            <div className="buttonVehicleType">
                                <button className="buttonStyle">Carro</button>
                                <button className="buttonStyle">Moto</button>
                            </div>
                        </div>

                        <div className="imgAdsUpadate">
                            <label htmlFor="Ads">Imagem da Capa</label>
                            <input type="text" id="cover" placeholder="Inserir URL da imagem" />
                            
                            <label htmlFor="Ads">1° Imagem da Galeria</label>
                            <input type="text" id="gallery" placeholder="Inserir URL da imagem" />
                            
                            <label htmlFor="Ads">2° Imagem da Galeria</label>
                            <input type="text" id="gallery" placeholder="Inserir URL da imagem" />
                        
                            <button className="buttonAddImg">Adicionar Campo para imagem da galeria</button>
                        </div>

                        <div className="ButtonUpdate">
                            <button className="buttonStyleUpdate" id="buttonCancel">Excluir Anúncio</button>
                            <button className="buttonStyleUpdate" id="buttonSave">Salvar Alterações</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default ModalAdUpdate;
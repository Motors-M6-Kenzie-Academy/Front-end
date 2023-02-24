import { ContainerDel } from "./styles";
import { useContext } from "react";
import { AdsContext } from "../../contexts/AdsContexts";

const ModalDelete = () => {
    const {isOpenModal, setIsOpenModal, delAds} = useContext(AdsContext)


    return(
        <>
        {
            isOpenModal && (
                <ContainerDel>
                    <div className="modalBox">
                        <div className="headerModal">
                            <h2>Excluir anúncio</h2>
                            <button type="button" className="btnClose" onClick={() => setIsOpenModal(false)}>X</button>
                        </div>
            
                        <div className="divText">
                            <h2>Tem certeza que deseja remover este anúncio?</h2>
                            <p>Essa ação não pode ser desfeita. Isso excluirá permanentemente o anúncio e removerá as informações do mesmo dos nossos servidores.</p>
                        </div>

                        <div>
                            <button type="button" onClick={() => setIsOpenModal(false)}>Cancelar</button>
                            <button className="btnExclude" /*onClick={() => delAds(id)}*/>Sim, excluir anúncio</button>
                        </div>
                    </div>
                </ContainerDel>
            )
        }
        </>
        )
}

export default ModalDelete